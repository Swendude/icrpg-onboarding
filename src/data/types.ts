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
    startingLoot: []
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
    startingLoot: []
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
    startingLoot: []
  }
];

export default types;
