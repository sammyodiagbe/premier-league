import React, { Component } from "react";
import IndividualMatchComponent from "./IndividualMatchComponent";

class Match extends Component {
  state = {};
  render() {
    const classname = "gameTimer ";
    const animate = this.props.matchTime === 90 ? "" : "animateTimer";
    const { currentWeek, matchTime } = this.props;
    return (
      <div className="match">
        <h5>
          Match-
          <span className={classname + animate}>{matchTime}'</span>
        </h5>
        <div className="games">
          {this.props.seasonData[currentWeek - 1].map(element => (
            <IndividualMatchComponent data={element} />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default Match;
