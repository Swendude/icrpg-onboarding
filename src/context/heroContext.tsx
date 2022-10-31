import * as React from "react";
import { HeroContext, Hero } from "../types/hero";

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
  stats: { STR: 0, DEX: 0, CON: 0, CHA: 0, INT: 0, WIS: 0 },
  effort: { BASIC: 0, WEAPON: 0, SPECIAL: 0, MAGIC: 0, ULTIMATE: 0 },
  inventory: []
});

export const heroContext = React.createContext<HeroContext | undefined>(
  undefined
);

const HeroProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [hero, setHero] = React.useState<Hero>(defaultHero());

  const setName = (name: string) => {
    setHero({ ...hero, name: name });
  };
  const setStory = (story: string) => {
    setHero({ ...hero, story: story });
  };

  const setStat = (stat: string, value: number) => {
    if (!(value < 0) && !(value > 10)) {
      setHero({ ...hero, stats: { ...hero.stats, [stat]: value } });
    }
  };

  return (
    <heroContext.Provider value={{ hero, setName, setStory, setStat }}>
      {children}
    </heroContext.Provider>
  );
};

export default HeroProvider;
