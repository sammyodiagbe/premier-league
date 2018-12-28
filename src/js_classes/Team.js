class Team {
  constructor(name, alias, emblem) {
    this.name = name;
    this.alias = alias;
    this.emblem = emblem;
    this.teamDetails = {
      played: 0,
      win: 0,
      draw: 0,
      loss: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      pts: 0,
      fixture: new Set(),
      form: ["W", "L", "W", "W", "W"],
      scoringAvg: null
    };
  }
}

export default Team;
