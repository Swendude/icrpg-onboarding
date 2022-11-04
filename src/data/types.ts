import { HeroType } from "../types/hero";

const types: HeroType[] = [
  {
    name: "Fighter",
    description:
      "You are a master at fighting with weapons and punching. You single handedly draw the attention of enemies in the heat of battle. You act as the vanguard for your team, using yourself as bait to lead the enemy into traps.",
    startingAbilities: [],
    startingLoot: []
  },
  {
    name: "Thief",
    description:
      "As a thief you are a slippery crawly, sneaking and hiding in the shadows and slithering when you need to run. Your lock picks slide through locks like silk, or snap them like balsa wood. When there is fighting to be done you dart from the darkness attacking unaware enemies.",
    startingAbilities: [],
    startingLoot: []
  },
  {
    name: "Mage",
    description:
      "As a mage you've spent your life studying the secrets of the arcane. You manipulate matter and time, smashing and crushing your opponent with tomes of thunder and fire, or maybe you've learned the healing power of magic instead.",
    startingAbilities: [],
    startingLoot: []
  }
];

export default types;
