import React, { Component } from "react";
import Field from "./Components/FieldComponent";
import Navigation from "./Components/NavigationComponent";
import Fixture from "./js_classes/Fixture";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.fixtures = new Fixture();
    this.state = {
      seasonFixtures: this.fixtures.seasonMatches,
      season: 1,
      week: 1,
      started: true,
      matchTime: 0,
      Teams: this.fixtures.teamsMetaData
    };
  }
  simulateGame = (evt = 0) => {
    const match = [...this.state.seasonFixtures];
    let time = 1;
    let interval = 12500;
    const matchInterval = setInterval(() => {
      for (let ind = 0; ind < match[0].length; ind++) {
        match[evt][ind].playMatch();
        this.setState({
          seasonFixtures: match
        });
      }
      if (time >= 6) {
        setTimeout(() => {
          this.setState({ week: this.state.week + 1, matchTime: 0 });
          setTimeout(() => {
            this.simulateGame(this.state.week - 1);
          }, 5000);
        }, 10000);
        clearInterval(matchInterval);
      }
      time += 1;
    }, interval);

    const timeInterval = setInterval(() => {
      const timee = Math.ceil(this.state.matchTime + 3);
      this.setState({
        matchTime: timee
      });
      if (time > 6) clearInterval(timeInterval);
    }, 2500);
  };

  render() {
    const { seasonFixtures, season, week, matchTime, Teams } = this.state;
    return (
      <div className="app">
        <Navigation
          currentSeason={season}
          currentWeek={week}
          simulateGame={this.simulateGame}
        />
        <Field
          seasonData={seasonFixtures}
          currentWeek={week}
          matchTime={matchTime}
          teamsMetaData={Teams}
        />
      </div>
    );
  }
}

export default App;
