import { Effort, Hero, HeroAdder, Properties, Stats } from "../types/hero";
import { objKeys } from "./helpers";

export type FinalHeroStats = {
  final: FinalHeroStatsVals;
  bioform: FinalHeroStatsVals;
  loot: FinalHeroStatsVals;
};

type FinalHeroStatsVals = {
  stats: Stats;
  effort: Effort;
  properties: Properties;
};

const defaultHeroStatVals: FinalHeroStatsVals = {
  stats: {
    STR: 0,
    DEX: 0,
    CON: 0,
    CHA: 0,
    WIS: 0,
    INT: 0
  },
  effort: {
    BASIC: 0,
    WEAPON: 0,
    SPECIAL: 0,
    MAGIC: 0,
    ULTIMATE: 0
  },
  properties: {
    DEFENSE: 0,
    HP: 0,
    SP: 0
  }
};

export const finalizeHero = (hero: Hero): FinalHeroStats => {
  const heroBaseVals: FinalHeroStatsVals = {
    stats: hero.stats,
    effort: hero.effort,
    properties: hero.properties
  };
  const allAdders = [hero.bioform && hero.bioform.adder, heroBaseVals].filter(
    (adder) => {
      if (adder) {
        return true;
      }
      return false;
    }
  ) as HeroAdder[];
  return {
    final: allAdders.reduce(addAdder, defaultHeroStatVals),
    bioform: hero.bioform
      ? [hero.bioform.adder].reduce(addAdder, defaultHeroStatVals)
      : defaultHeroStatVals,
    loot: defaultHeroStatVals
  };
};

const withDefault = <O extends object>(
  part: Partial<O>,
  fullKeys: (keyof O)[]
): O => {
  let newObj = {};
  fullKeys.forEach((key) => {
    newObj = { ...newObj, [key]: part[key] || 0 };
  });
  return newObj as O;
  //   return Object.fromEntries(fullKeys.map((key) => [key, part[key]]));
};

export const addAdder = (
  finalHero: FinalHeroStatsVals,
  adder: HeroAdder
): FinalHeroStatsVals => {
  let filledStats, filledEffort, filledProperties;
  // Stats
  if (adder.stats) {
    filledStats = withDefault<Stats>(adder.stats, objKeys(finalHero.stats));
  }
  // Effort
  if (adder.effort) {
    filledEffort = withDefault<Effort>(adder.effort, objKeys(finalHero.effort));
  }
  // Properties
  if (adder.properties) {
    filledProperties = withDefault<Properties>(
      adder.properties,
      objKeys(finalHero.properties)
    );
  }

  return {
    ...finalHero,
    stats: filledStats ? addM(finalHero.stats, filledStats) : finalHero.stats,
    effort: filledEffort
      ? addM(finalHero.effort, filledEffort)
      : finalHero.effort,
    properties: filledProperties
      ? addM(finalHero.properties, filledProperties)
      : finalHero.properties
  };
};

const addM = <O extends Record<string, number>>(o1: O, o2: O): O => {
  return Object.fromEntries(
    objKeys(o1).map((key) => {
      return [key, o1[key] + o2[key]];
    })
  ) as O;
};
