const modalInfos = {
  STR: {
    title: "🗡 Strength",
    descr:
      "Put points into STR to create a MELEE fighter, a crusher, a bar-bending, boulder-throwing behemoth who smashes his way through problems."
  },
  MELEE: {
    title: "⚔️ Melee",
    descr:
      "Close combat fighting, using swords, axes, clubs. Heck, even a rusty pipe will do!"
  },
  DEX: {
    title: "🏹 Dexterity",
    descr:
      "You'll be using DEX to make ranged attacks, like guns and bows. DEX is also a measure of how nimble you are, so you'll roll with that STAT when you are trying to move silently, do back flips, or deftly run along crumbling rooftops."
  },
  CON: {
    title: "🛡 Constitution",
    descr:
      "CON measures how stout or tough you are. This STAT is used when recovering HP, bracing for impact, or fighting to survive poison or terrible cold."
  },
  WIS: {
    title: "🧠 Wisdom",
    descr:
      "This STAT measures an intuitive, organic kind of smarts. It isn’t so much know- ing as it is feeling. How keen is your sixth sense? Place points here to be a scout, to be in tune with nature, or to feel danger coming."
  },
  CHA: {
    title: "🗣 Charisma",
    descr:
      "Your strength of will is measured by CHA. You’ll be using this to roll for persuasive actions, to resist fear, or drive enemies back with a battle cry."
  },
  INT: {
    title: "📖 Intelligence",
    descr:
      "Some heroes use wits over fists. Their key STAT is INT, which is used to cast SPELL, investigate mysteries, recall details, or operate complex machinery."
  },
  STATS: {
    title: "👤 Stats",
    descr:
      "Characters have a set of STATS that describe their capability in different areas. Depending on what’s being tried, you’ll almost always get to add the value of one STAT to your D20."
  },
  STAT: {
    title: "👤 Stats",
    descr:
      "Characters have a set of STATS that describe their capability in different areas. Depending on what’s being tried, you’ll almost always get to add the value of one STAT to your D20."
  },
  SPELL: {
    title: "🪄 Spells",
    descr:
      "Manipulate time, bend matter, heal and empower your allies! Or just throw a fireball, we don't care. SPELL come in different levels and a SPELL cost 2 x level SP to cast!"
  },
  SPELLS: {
    title: "🪄 Spells",
    descr:
      "Manipulate time, bend matter, heal and empower your allies! Or just throw a fireball, we don't care. SPELL come in different levels and a SPELL cost 2 x level SP to cast!"
  },
  SP: {
    title: "🔵 Skill Points",
    descr:
      "SP is used to cast powerfull spells and perform mighty abilities. Every character start with 10 SP and they are regained on a rest."
  },
  HP: {
    title: "❤️ Health Points",
    descr:
      "Don't lose out on these or you might die! Every character start with 10 HP and they are regained on a rest."
  },
  D20: {
    title: "🎲 20 Sided Dice",
    descr:
      "The D20 is the main dice you will use to perform ATTEMPTS in combination with STATS. Roll the bones, pray to the fates and hit those sweet natural 20s!"
  },
  D12: {
    title: "🎲 12 Sided Dice",
    descr: "A dice with 12 sides. Used for ULTIMATE."
  },
  D10: {
    title: "🎲 10 Sided Dice",
    descr: "A dice with 10 sides. Used for MAGIC."
  },
  D8: {
    title: "🎲 8 Sided Dice",
    descr: "A dice with 8 sides. Used for SPECIAL."
  },
  D6: {
    title: "🎲 6 Sided Dice",
    descr: "A dice with 6 sides. Used for WEAPON."
  },
  D4: {
    title: "🎲 4 Sided Dice",
    descr: "A dice with 4 sides. Used for BASIC."
  },
  EFFORT: {
    title: "💪 Effort",
    descr:
      "You use STATS to determine if your ATTEMPT succeeds or fails, EFFORT is rolled after making a sucesfull ATTEMPT to determine how well you did."
  },
  ATTEMPTS: {
    title: "🎯 Attempt",
    descr:
      "Larger tasks can take time to complete. ATTEMPTS involve a D20 roll, adding a STAT, and rolling EFFORT to complete a task or destroy a foe. Some examples: 'Destroy a security droid with multiple blaster shots', 'Translate a tablet covered in mysterious old runes', 'Cut your way through a barricade with your battle axe'."
  },
  ATTEMPT: {
    title: "🎯 Attempt",
    descr:
      "Larger tasks can take time to complete. ATTEMPTS involve a D20 roll, adding a STAT, and rolling EFFORT to complete a task or destroy a foe. Some examples: 'Destroy a security droid with multiple blaster shots', 'Translate a tablet covered in mysterious old runes', 'Cut your way through a barricade with your battle axe'."
  },
  BIOFORM: {
    title: "🧬 Bioform",
    descr:
      "The human with the blade, the sludge-monster with a shield, the orange glowing energy creature; these are only a few examples of BIOFORMS your hero can be. Your BIOFORM determines your physical appearance, and gives you some specific stats! It also influences how NPCs react to your hero!"
  },
  NPC: {
    title: "👤 NPCs",
    descr:
      "Non-Playable Characters (NPCs) are the characters your HERO will encounter in the world. They will be played by your DM."
  },
  NPCs: {
    title: "👤 NPCs",
    descr:
      "Non-Playable Characters (NPCs) are the characters your HERO will encounter in the world. They will be played by your DM."
  },
  BASIC: {
    title: "✊ Basic",
    descr:
      "If you are only using your bare hands or your wits, roll a D4 after a successful ATTEMPT to do damage with a punch, bend bars with raw muscle, or take time to decipher a block of cod- ed writing."
  },
  WEAPON: {
    title: "🗡 Weapon & Tools",
    descr:
      "Any time you are using a standard ranged or melee weapon to do damage, roll a D6. Also roll a D6 when using tools to accomplish a task such as using a pry bar to open a jammed door, using bandages to cure a wound, or using a micro torch to seal a bulkhead hatch."
  },
  SPECIAL: {
    title: "❓ Special",
    descr:
      "Some weapons or tools require unique skills from the wielder, roll a D8 to use a severed monster part for attacking or fire one of those powerful firearms folks have been experimenting with."
  },
  MAGIC: {
    title: "✨ Magic",
    descr:
      "Roll a D10 for EFFORT when you are casting explosive magic or using arcane energy. Also roll a D10 for any weapon or effect that employs energy such as particle beams, lasers or plasma. Healing with magical power? That would also be a D10."
  },
  ULTIMATE: {
    title: "⭐️ Ultimate",
    descr:
      "Ah, the almighty D12. When you roll a critical success on your ATTEMPT, a natural 20 on the D20 roll, you’ll roll the type of EFFORT above that fits, and add a D12 on top of that roll! You have excelled at your ATTEMPT with ULTIMATE results!"
  }
};
export type InfoKeys = keyof ModalInfos;

export type ModalInfos = typeof modalInfos;

export default modalInfos as ModalInfos;
