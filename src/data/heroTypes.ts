import { HeroType } from "../types/hero";

const types: HeroType[] = [
  {
    name: "Fighter",
    description:
      "You are a master at fighting with weapons and punching. You single handedly draw the attention of enemies in the heat of battle. You act as the vanguard for your team, using yourself as bait to lead the enemy into traps.",
    startingAbilities: [
      {
        name: "Cleave",
        description: "Hit al CLOSE enemies with a single swing!",
        adder: undefined
      },
      {
        name: "Taunt",
        description:
          "An CLOSE enemy you pick makes a CHA check, on a fail they only attack you on their next turn",
        adder: undefined
      },
      {
        name: "Bolster",
        description: "Raise your shield, gain +2 DEF until your next TURN",
        adder: undefined
      }
    ],
    startingLoot: [
      {
        name: "Longsword",
        description: "WEAPON, the classic longsword has served many HEROES",
        adder: {
          stats: undefined,
          effort: {
            WEAPON: 1
          },
          properties: undefined
        },
        category: "Weapon"
      },
      {
        name: "Plated Armor",
        description: "ARMOR, defend yourself, or perish.",
        adder: {
          stats: undefined,
          effort: undefined,
          properties: {
            DEFENSE: 2
          }
        },
        category: "Armor"
      },
      {
        name: "Banner",
        description:
          "Ever loyal, wave this banner to make an ALLIES roll EASY!",
        adder: undefined,
        category: "Tool"
      }
    ]
  },
  {
    name: "Thief",
    description:
      "As a thief you are a slippery crawly, sneaking and hiding in the shadows and slithering when you need to run. Your lock picks slide through locks like silk, or snap them like balsa wood. When there is fighting to be done you dart from the darkness attacking unaware enemies.",
    startingAbilities: [
      {
        name: "Sneak",
        description:
          "Your first attack next TURN deals ULTIMATE damage, unless you get attacked",
        adder: undefined
      },
      {
        name: "Dodge",
        description:
          "Once per REST, completly negate the negative effect of a DEX, STR, CON or DEFENSE check",
        adder: undefined
      },
      {
        name: "Contacts",
        description:
          "Once per REST use a TURN to find a specific piece of information from the criminal scene after a sucesfull CHA check.",
        adder: undefined
      }
    ],
    startingLoot: [
      {
        name: "Lockpick",
        description:
          "With this tool nobody can stop you, picking any lock is EASY, breaks on a NATURAL 1",
        adder: undefined,
        category: "Tool"
      },
      {
        name: "Hood",
        description:
          "This elvish hood hides your face and grants you amazing nimbleness",
        adder: {
          stats: {
            DEX: 2
          },
          effort: undefined,
          properties: undefined
        },
        category: "Armor"
      },
      {
        name: "Sleeping darts",
        description:
          "Ten sharp and pointy darts filled with a impact activated sleep agent. Disables target for 1d4 turns, or until attacked.",
        adder: undefined,
        category: "Consumable"
      }
    ]
  },
  {
    name: "Mage",
    description:
      "As a mage you've spent your life studying the secrets of the arcane. You manipulate matter and time, smashing and crushing your opponent with tomes of thunder and fire, or maybe you've learned the healing power of magic instead.",
    startingAbilities: [
      {
        name: "Student",
        description: "Double your effort when trying to decrypt, read or study",
        adder: undefined
      },
      {
        name: "Wild Magic",
        description:
          "When rolling MAGIC, double it and make an INT check. On a fail you receive half the damage.",
        adder: undefined
      },
      {
        name: "Vagabond",
        description:
          "You are seen as a wise wanderer, when you need to make a CHA check you can use INT instead.",
        adder: undefined
      }
    ],
    startingLoot: [
      {
        name: "Spark",
        description: "Ignite your foe, deal MAGIC damage for 1D4 TURNS.",
        type: "spell",
        level: 0,
        adder: {
          stats: undefined,
          effort: undefined,
          properties: undefined
        },
        category: "Scroll"
      },
      {
        name: "Jolt",
        description:
          "Deal MAGIC damage, the target makes a CON check or is unable to MOVE on their next TURN",
        adder: {
          stats: undefined,
          effort: undefined,
          properties: undefined
        },
        category: "Scroll"
      },
      {
        name: "Slow",
        description: "Delay a TIMER by 1, always HARD",
        adder: undefined,
        category: "Scroll"
      }
    ]
  }
];

export default types;
