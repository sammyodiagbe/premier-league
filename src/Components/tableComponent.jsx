import React, { Component } from "react";
import IndividualTableComponent from "./individualTableComponent";

class Table extends Component {
  state = {};
  render() {
    const teamsMetaData = this.props.teamsMetaData;
    console.log(teamsMetaData);
    return (
      <div className="match">
        <h5>League Table</h5>

        <div className="tableData">
          <div className="tableheader">
            <div className="tableheaderleft">
              <span>Name</span>
            </div>
            <div className="tableheaderright">
              <span className="">MP</span>
              <span className="">W</span>
              <span className="">D</span>
              <span className="">L</span>
              <span className="">PT</span>
              <span className="">GF</span>
              <span className="">GA</span>
              <span className="">GD</span>
            </div>
          </div>
          {teamsMetaData.map(team => (
            <IndividualTableComponent teamData={team} />
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
