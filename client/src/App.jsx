import React from 'react';
import MainCow from './MainCow.jsx';
import SubmitCow from './SubmitCow.jsx';
import CowList from './CowList.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainCow: {},
      allCows: [],
      isLoading: true
    }

    this.handleCowClick = this.handleCowClick.bind(this);
  }


  handleCowClick(cow) {
    this.setState({
      mainCow: cow
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/cows')
      .then((response) => {
        this.setState(() => ({
          allCows: response.data,
          mainCow: response.data[0],
          isLoading: false
        }))
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      this.state.isLoading
      ? null
      :
      <>
        <MainCow mainCow={this.state.mainCow} />
        <SubmitCow />
        <CowList cowData={this.state.allCows} handleCowClick={this.handleCowClick} />
      </>
    );
  }
}