const modalInfos = {
  STR: {
    title: "🗡 Strength",
    descr:
      "Put points into STR to create a melee fighter, a crusher, a bar-bending, boulder-throwing behemoth who smashes his way through problems."
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
      "Your strength of will is measured by CHARISMA. You’ll be using this to roll for persuasive actions, to resist fear, or drive enemies back with a battle cry."
  },
  INT: {
    title: "📖 Intelligence",
    descr:
      "Some heroes use wits over fists. Their key STAT is INT, which is used to cast SPELL investigate mysteries, recall details, or operate complex machinery."
  },
  STATS: {
    title: "👤 Stats",
    descr:
      "Characters have a set of STATS that describe their capability in different areas. Depending on what’s being tried, you’ll almost always get to add the value of one STAT to your D20."
  }
};

export type ModalInfos = typeof modalInfos;

export default modalInfos as ModalInfos;
