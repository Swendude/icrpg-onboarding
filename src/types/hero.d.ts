export type Hero = {
  name: string;
  properties: Properties;
  story: string;
  stats: Stats;
  effort: Effort;
  inventory: Item[];
};

// Something that can add stuff to a hero
type HeroAdder = {
  stats: Partial<Stats> | undefined;
  effort: Partial<Effort> | undefined;
  properties: Partial<Properties> | undefined;
};

export type Bioform = {
  name: string;
  description: string;
  adder: HeroAdder;
};

export type StatKey = keyof Stats;

export type Stats = {
  STR: number;
  DEX: number;
  CON: number;
  CHA: number;
  WIS: number;
  INT: number;
};

type Properties = {
  DEFENSE: number;
  HP: number;
  SP: number;
};

type Effort = {
  BASIC: number;
  WEAPON: number;
  SPECIAL: number;
  MAGIC: number;
  ULTIMATE: number;
};

export type EffortKey = keyof Effort;

type Item = {
  name: string;
  description: string;
  adder: HeroAdder;
  defense: number;
  effort: Effort;
};
