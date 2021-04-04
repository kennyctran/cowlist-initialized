import React from 'react';
import MainCow from './MainCow.jsx';
import SubmitCow from './SubmitCow.jsx';
import CowList from './CowList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainCow: this.props.exampleData[0],
      allCows: this.props.exampleData
    }
  }

  render() {
    return (
      <>
        <MainCow mainCow={this.state.mainCow}/>
        <SubmitCow />
        <CowList cowData={this.props.exampleData}/>
      </>
    );
  }
}