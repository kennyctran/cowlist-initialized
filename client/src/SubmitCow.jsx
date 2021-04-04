import React, { Component } from "react";

export default class SubmitCow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: `Name a new cow!`,
      descriptionValue: `Describe the new cow`,
    };
  }

  handleNameChange(e) {
    this.setState({
      nameValue: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      descriptionValue: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.nameValue);
    console.log(this.state.descriptionValue);
    if (
      this.state.nameValue.length > 0 &&
      this.state.descriptionValue.length > 0
    ) {
      this.props.handleCowSubmit({
        name: this.state.nameValue,
        description: this.state.descriptionValue,
      });
      this.setState({
        nameValue: "name another cow!",
        descriptionValue: "",
      });
    } else {
      alert("Your cow has to have a name and a description!");
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          id="have-a-cow"
          name="have-a-cow"
          value={this.state.nameValue}
          onChange={(e) => {
            this.handleNameChange(e);
          }}
        />
        <br />
        <input
          type="text"
          id="cow-description"
          name="describe-a-cow"
          value={this.state.descriptionValue}
          onChange={(e) => this.handleDescriptionChange(e)}
        />
        <br />
        <button
          onClick={(e) => {
            this.handleSubmit(e);
          }}
        >
          Submit!
        </button>
      </form>
    );
  }
}
