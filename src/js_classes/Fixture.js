import Team from "./Team.js";
import Match from "./Match.js";

class Fixture {
  constructor() {
    this.teamsMetaData = [
      new Team("MANCHESTER UTD", "MAN", "./premier/MAN.png"),
      new Team("MANCHESTER CTY", "MNC", "./premier/MNC.png"),
      new Team("LIVERPOOL", "LIV", "./premier/LIV.png"),
      new Team("ARSENAL", "ARS", "./premier/ARS.png"),
      new Team("CHELSEA", "CHE", "./premier/CHE.png"),
      new Team("HUDDERSFIELD", "HUD", "./premier/HUD.png"),
      new Team("BRIGHTON HOV", "BRI", "./premier/BRI.png"),
      new Team("TOTENHAM", "TOT", "./premier/TOT.png"),
      new Team("WATFORD", "WAT", "./premier/WAT.png"),
      new Team("STOKE CITY", "CAR", "./premier/STK.png"),
      new Team("BURNLEY", "BUR", "./premier/BUR.png"),
      new Team("CRYSTAL PALACE", "CRY", "./premier/CRY.png"),
      new Team("WEST HAM", "WHM", "./premier/WHM.png"),
      new Team("BOUNERMOUTH", "BOU", "./premier/BOU.png"),
      new Team("NEWCASTLE", "NEW", "./premier/NEW.png"),
      new Team("EVERTON", "EVE", "./premier/EVE.png"),
      new Team("SWANSEA CITY", "SWA", "./premier/SWA.png"),
      new Team("SOUTHAMPTON", "SOU", "./premier/SOU.png"),
      new Team("WEST BROM", "WES", "./premier/WBA.png"),
      new Team("LEICESTER", "LIE", "./premier/LIE.png")
    ];
    this.fixturesSet = new Set();
    this.shuffledWeekGames = new Set();
    this.generateSeasonFixtures();
    this.seasonMatches = this.generateWeekFixtures();
  }

  generateSeasonFixtures() {
    const data = [...this.teamsMetaData];
    for (const team of data) {
      for (let index = 0; index < data.length; index++) {
        if (index === data.indexOf(team)) continue;
        const homeMatch = new Match(team, data[index]);
        const awayMatch = new Match(data[index], team);
        if (
          this.fixturesSet.has(homeMatch) ||
          this.fixturesSet.has(awayMatch)
        ) {
          continue;
        } else {
          this.fixturesSet.add(homeMatch);
          this.fixturesSet.add(awayMatch);
        }
      }
    }
  }

  generateWeekFixtures() {
    const shuffledGame = this.generateImutable([...this.fixturesSet]);
    return shuffledGame;
  }

  generateImutable(data) {
    const length = 76;
    let index = 0;
    const arr = [];
    const check = [];
    while (arr.length < length) {
      arr[index] = [];
      check[index] = new Set();
      while (arr[index].length < 10) {
        const random = Math.floor(Math.random() * data.length);
        const MatchData = data[random];
        const teamAName = data[random].home.alias;
        const teamBName = data[random].away.alias;
        if (!check[index].has(teamAName) && !check[index].has(teamBName)) {
          arr[index].push(MatchData);
          check[index].add(teamAName);
          check[index].add(teamBName);
        } else {
          continue;
        }
      }
      index += 1;
    }
    return arr;
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}

export default Fixture;
