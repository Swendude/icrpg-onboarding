export type Hero = {
  name: string;
  properties: Properties;
  story: string;
  stats: Stats;
  effort: Effort;
  bioform: Bioform | undefined;
  type: HeroType | undefined;
  inventory: Item[];
};

// Something that can add stuff to a hero
type HeroAdder = {
  stats: Partial<Stats> | undefined;
  effort: Partial<Effort> | undefined;
  properties: Partial<Properties> | undefined;
};

export type HeroType = {
  name: string;
  description: string;
  startingAbilities: Ability[];
  startingLoot: Item[];
};

type Ability = {
  name: string;
  description: string;
  adders: HeroAdder;
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

type Item = BasicItem | AbilityItem;

type BasicItem = {
  name: string;
  description: string;
  adder: HeroAdder | undefined;
};

type AbilityItem = {
  name: string;
  type: "spell" | "power";
  level: number;
  stat: StatKey;
  description: string;
  adder: HeroAdder | undefined;
};
