import * as React from "react";
import { Hero, StatKey, EffortKey, Bioform, HeroType } from "../types/hero";
import { useDebounce } from "./hooks";
import { DateTime } from "luxon";
import { FinalHeroStats, finalizeHero } from "../utils/heroTools";

export type HeroContext = {
  hero: Hero;
  final: FinalHeroStats;
  setName: (v: string) => void;
  setStory: (v: string) => void;
  setStat: (k: StatKey, v: number) => void;
  setEffort: (k: EffortKey, v: number) => void;
  setBioform: (b: Bioform | undefined) => void;
  setType: (t: HeroType | undefined) => void;
  savedTime: luxon.DateTime;
  isSaved: boolean;
};

export const useHeroContext = () => {
  const heroContextI = React.useContext(heroContext);
  if (!heroContextI)
    throw new Error(
      "No heroContext.Provider found when calling useHeroContext."
    );
  return heroContextI;
};

const defaultHero = (): Hero => ({
  name: "",
  story: "",
  properties: { DEFENSE: 0, HP: 10, SP: 10 },
  stats: { STR: 0, DEX: 0, CON: 0, CHA: 0, INT: 0, WIS: 0 },
  effort: { BASIC: 0, WEAPON: 0, SPECIAL: 0, MAGIC: 0, ULTIMATE: 0 },
  bioform: undefined,
  type: undefined,
  inventory: []
});

const savedOrDefaultHero = (): Hero => {
  const savedHeroJSON = localStorage.getItem("hero");
  if (!savedHeroJSON) {
    return defaultHero();
  } else {
    try {
      return JSON.parse(savedHeroJSON);
    } catch (error) {
      console.log("Error while loading hero:", error);
      return defaultHero();
    }
  }
};

export const heroContext = React.createContext<HeroContext | undefined>(
  undefined
);

const HeroProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [hero, setHero] = React.useState<Hero>(savedOrDefaultHero());
  const [changedBeforeSave, setChangedBeforeSave] = React.useState<
    boolean | "no changes"
  >("no changes");
  const [savedTime, setSavedTime] = React.useState<luxon.DateTime>(
    DateTime.now()
  );
  const debouncedHero = useDebounce(hero, 1000);

  React.useEffect(() => {
    setChangedBeforeSave(false);
  }, [hero]);

  React.useEffect(() => {
    setSavedTime(DateTime.now());
    setChangedBeforeSave(true);
    localStorage.setItem("hero", JSON.stringify(debouncedHero));
  }, [debouncedHero]);

  const setName = (name: string) => {
    setHero({ ...hero, name: name });
  };
  const setStory = (story: string) => {
    setHero({ ...hero, story: story });
  };

  const setStat = (stat: StatKey, value: number) => {
    if (!(value < 0) && !(value > 10)) {
      setHero({ ...hero, stats: { ...hero.stats, [stat]: value } });
    }
  };

  const setEffort = (effort: EffortKey, value: number) => {
    if (!(value < 0) && !(value > 10)) {
      setHero({ ...hero, effort: { ...hero.effort, [effort]: value } });
    }
  };
  const setBioform = (bf: Bioform | undefined) => {
    setHero({ ...hero, bioform: bf });
  };
  const setType = (t: HeroType | undefined) => {
    setHero({ ...hero, type: t });
  };
  return (
    <heroContext.Provider
      value={{
        hero,
        final: finalizeHero(hero),
        setName,
        setStory,
        setStat,
        setEffort,
        setBioform,
        setType,
        savedTime,
        isSaved: changedBeforeSave === "no changes" ? true : changedBeforeSave
      }}
    >
      {children}
    </heroContext.Provider>
  );
};

export default HeroProvider;
