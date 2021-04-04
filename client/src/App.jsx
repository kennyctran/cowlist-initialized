import React from "react";
import MainCow from "./MainCow.jsx";
import SubmitCow from "./SubmitCow.jsx";
import CowList from "./CowList.jsx";
import axios from "axios";

// TODO: Bug present where page will fail to compile if DB has no cows
// TODO: Bug where does not accept submissions with single quotes ''

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainCow: {},
      allCows: [],
      isLoading: true,
    };

    this.handleCowClick = this.handleCowClick.bind(this);
    this.handleCowSubmit = this.handleCowSubmit.bind(this);
  }

  handleCowClick(cow) {
    this.setState({
      mainCow: cow,
    });
  }

  handleCowSubmit(newCow) {
    this.addACow(newCow)
      .then((res) => {
        return this.fetchAllCows();
      })
      .then((res) => {
        this.setState(() => {
          const newCows = [...res.data];
          return {
            mainCow: newCows[newCows.length - 1],
            allCows: newCows,
          };
        });
      })
      .catch((err) => console.log(err));
  }

  addACow(newCow) {
    return axios.post("http://localhost:3000/api/cows", newCow);
  }

  componentDidMount() {
    this.fetchAllCows()
      .then((response) => {
        this.setState(() => ({
          allCows: response.data,
          mainCow: response.data[0],
          isLoading: false,
        }));
      })
      .catch((err) => console.log(err));
  }

  fetchAllCows() {
    return axios.get("http://localhost:3000/api/cows");
  }

  render() {
    return this.state.isLoading ? null : (
      <>
        <MainCow mainCow={this.state.mainCow} />
        <SubmitCow handleCowSubmit={this.handleCowSubmit} />
        <CowList
          cowData={this.state.allCows}
          handleCowClick={this.handleCowClick}
        />
      </>
    );
  }
}
