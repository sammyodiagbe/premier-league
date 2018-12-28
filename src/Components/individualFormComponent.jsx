import React, { Component } from "react";

class IndividualFormComponent extends Component {
  state = {};
  render() {
    const { emblem, alias, teamDetails } = this.props.data;
    const { form } = teamDetails;
    return (
      <div class="teamformline">
        <div class="teamformlineleft">
          <img src={emblem} alt="alias" className="teamLogo" />
          {"   "}
          {alias}
        </div>
        <div class="teamformlineright">{form}</div>
      </div>
    );
  }
}

export default IndividualFormComponent;
