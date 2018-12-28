import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const logo = "./premier/epl2016.png";
    const { currentSeason, currentWeek, simulateGame } = this.props;
    return (
      <div className="nav">
        <a className="nav-brand" href="index.html">
          <span>
            <img
              className="animate-logo"
              src={logo}
              style={{ height: 30, width: 30 }}
              alt="brand logo"
            />
          </span>
          Premier
        </a>
        <span className="seasonAndWeek">
          {" "}
          Season: {currentSeason} - Week : {currentWeek}
        </span>
        <button className="simulateGame" onClick={() => simulateGame()}>
          Start simulation
        </button>
      </div>
    );
  }
}

export default Navigation;
