export type HeroContext = {
  hero: Hero;
  setName: (string) => void;
  setStory: (string) => void;
  setStat: (string, number) => void;
  savedTime: luxon.DateTime;
  isSaved: boolean;
};

export type Hero = {
  name: string;
  story: string;
  stats: Stats;
  effort: Effort;
  inventory: Item[];
};

export type StatKey = keyof Stats;

type Stats = {
  STR: number;
  DEX: number;
  CON: number;
  CHA: number;
  WIS: number;
  INT: number;
};

interface ItemStats extends Stat {
  DEFENSE: number;
}

type Effort = {
  BASIC: number;
  WEAPON: number;
  SPECIAL: number;
  MAGIC: number;
  ULTIMATE: number;
};

type Item = {
  name: string;
  description: string;
  stats: ItemStats;
  effort: Effort;
};
