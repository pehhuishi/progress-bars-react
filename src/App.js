import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ProgressBar from './components/ProgressBar';
import Dropdown from './components/Dropdown';
import Button from './components/Button';


class App extends Component {
  state = {
    bars: [],
    buttons:[],
    limit: 0
  }

  componentDidMount = () => {
    axios.get('http://pb-api.herokuapp.com/bars')
    .then(res => {
      const bars = res.data.bars;
      const buttons = res.data.buttons;
      const limit = res.data.limit;
      this.setState({bars,buttons,limit});
    })
  }

  render() {
    return (
      <div className="App container">
        <h2>Progress Demo Bar</h2>
        <ProgressBar bars={this.state.bars}/>
        <div className="controls">
          <Dropdown />
          <Button buttons={this.state.buttons}/>
        </div>
      </div>
    );
  }
}

export default App;
