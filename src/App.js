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
    limit: 0,
    activeBar: 0
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

  updateActiveBar = activeBar => {
    this.setState({ ...this.state, activeBar})
  }

  updateBar = value => {
    const newBars = [...this.state.bars];
    if(newBars[this.state.activeBar] + Math.round(value / this.state.limit * 100) >  0) 
      newBars[this.state.activeBar] += Math.round(value / this.state.limit * 100);
    this.setState({ ...this.state, bars: newBars })
  }

  render() {
    return (
      <div className="App container">
        <h2>Progress Demo Bar</h2>
        <ProgressBar bars={this.state.bars}/>
        <div className="controls">
          <Dropdown bars={this.state.bars.length} updateActiveBar={this.updateActiveBar}/>
          <Button updateBar={this.updateBar} buttons={this.state.buttons}/>
        </div>
      </div>
    );
  }
}

export default App;
