import React, { Component } from "react";
import Match from "./MatchComponent";
import Table from "./tableComponent";
import Form from "./formComponent";

class Field extends Component {
  render() {
    const { currentWeek, matchTime, teamsMetaData } = this.props;
    return (
      <div className="field">
        <Match
          seasonData={this.props.seasonData}
          currentWeek={currentWeek}
          matchTime={matchTime}
        />
        <Table teamsMetaData={teamsMetaData} />
        <Form teamsMetaData={teamsMetaData} />
      </div>
    );
  }
}

export default Field;
