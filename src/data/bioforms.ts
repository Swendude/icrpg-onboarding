import { Bioform } from "../types/hero";

export const bioforms: Bioform[] = [
  {
    name: "Human",
    description:
      "Humans are known for their creativity, their willingness to take risks, and their tendency to live briefly.",
    adder: {
      stats: {
        INT: 1,
        CHA: 1
      },
      effort: undefined,
      properties: undefined
    }
  },
  {
    name: "Dwarf",
    description:
      "Dwarves are known for their stubbornness, which is at odds with their pride and shorter-than-average stature.",
    adder: {
      stats: {
        CON: 1
      },
      effort: undefined,
      properties: {
        DEFENSE: 1
      }
    }
  },
  {
    name: "Gnome",
    description:
      "Gnomes are known for their love of tobacco and red hats, as well as their poor sense of humor.They eat a lot, man they eat a lot!!Gnomes are known for their love of tobacco and red hats, as well as their poor sense of humor.They eat a lot, man they eat a lot!!Gnomes are known for their love of tobacco and red hats, as well as their poor sense of humor.They eat a lot, man they eat a lot!!Gnomes are known for their love of tobacco and red hats, as well as their poor sense of humor.They eat a lot, man they eat a lot!!Gnomes are known for their love of tobacco and red hats, as well as their poor sense of humor.They eat a lot, man they eat a lot!!",
    adder: {
      stats: {
        DEX: 1
      },
      effort: { MAGIC: 1 },
      properties: undefined
    }
  }
];
