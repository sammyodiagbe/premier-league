import React, { Component } from "react";

class IndividualMatchComponent extends Component {
  

  render() {
    const { home, away, matchScore } = this.props.data;
    const { home: homeg, away: awayg } = matchScore;
    let score = homeg + awayg || 0;
    return (
      <div className="indmatch">
        <div className="imgleft">
          <img className="teamLogo" src={home.emblem} alt={home.alias} />
        </div>
        <b style={{ position: "relative" }}>
          {homeg} - {awayg}
        </b>
        <div className="imgright">
          <img className="teamLogo" src={away.emblem} alt={away.alias} />
        </div>
      </div>
    );
  }
}

export default IndividualMatchComponent;
