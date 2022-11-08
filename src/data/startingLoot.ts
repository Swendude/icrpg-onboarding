import { Item } from "../types/hero";

const startingLoot: Item[] = [
  {
    name: "A cat",
    description: "Nobody can resist a furball to pet!",
    adder: {
      stats: {
        CHA: 2
      }
    },
    category: "Tool"
  },
  {
    name: "Lasso",
    description: "WEAPON, grab a FAR enemy and pull them NEAR",
    type: "power",
    level: 1,
    stat: "DEX",
    adder: undefined,
    category: "Weapon"
  },
  {
    name: "Chakram",
    description:
      "Throw this sharp metal disc at an enemey, On a GOOD roll, make another ATTACK",
    adder: undefined,
    category: "Weapon"
  },
  {
    name: "Shortbow",
    description:
      "A short recurve bow that packs a punch, EASY rolls on enemies that are within NEAR",
    adder: undefined,
    category: "Weapon"
  },

  {
    name: "Compass",
    description: "An eternal friend, navigation checks are always EASY!",
    adder: {
      stats: {
        WIS: 1
      }
    },
    category: "Tool"
  },
  {
    name: "Leather Armor",
    description:
      "This armor fabricated from animal skin provides the bare minimum in protection but allows the wearer to maintain speed and agility.",
    adder: {
      properties: {
        DEFENSE: 1
      },
      stats: {
        DEX: 1
      }
    },
    category: "Armor"
  },
  {
    name: "Robes",
    description:
      "Robes mark the precense of a studied mage or pious clergyman, they leave the wearer free to channel their arcane or divine magic",
    adder: {
      stats: {
        INT: 1,
        WIS: 1
      }
    },
    category: "Armor"
  },
  {
    name: "Plate Armor",
    description:
      "Heavy plates protect your body but make you slower to react! Stealth is always HARD.",
    adder: {
      properties: {
        DEFENSE: 3
      }
    },
    category: "Armor"
  },
  {
    name: "Super Warm Socks",
    description:
      "These socks keep your body warm in otherwise freezing temperatures.",
    adder: undefined,
    category: "Armor"
  },
  {
    name: "Swimsuit",
    description:
      "Special clothing that negates any penalty from water, looks sexy.",
    adder: undefined,
    category: "Armor"
  }
];

export default startingLoot;
