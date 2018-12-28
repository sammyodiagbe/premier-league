import React, { Component } from "react";

class IndividualTableComponent extends Component {
  render() {
    const { teamData } = this.props;
    const { name, emblem, alias, teamDetails } = teamData;
    const { played, win, loss, draw, ga, gf, gd, pts } = teamDetails;
    return (
      <div className="tableline">
        <div className="teamname">
          <img src={emblem} alt={alias} className="teamLogo" /> {name}
        </div>
        <div className="teamtabledata">
          <span className="teamtablecoldata">{played}</span>
          <span className="teamtablecoldata">{win}</span>
          <span className="teamtablecoldata">{draw}</span>
          <span className="teamtablecoldata">{loss}</span>
          <span className="teamtablecoldata">{pts}</span>
          <span className="teamtablecoldata">{gf}</span>
          <span className="teamtablecoldata">{gd}</span>
          <span className="teamtablecoldata">{ga}</span>
        </div>
      </div>
    );
  }
}

export default IndividualTableComponent;
