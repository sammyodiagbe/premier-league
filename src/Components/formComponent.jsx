import React, { Component } from "react";
import IndividualFormComponent from "./individualFormComponent";

class Form extends Component {
  state = {};
  render() {
    const { teamsMetaData } = this.props;
    return (
      <div className="form">
        <h5>Form</h5>
        <div className="teamform">
          {teamsMetaData.map(element => (
            <IndividualFormComponent data={element} />
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
