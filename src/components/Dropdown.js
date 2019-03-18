import React from 'react';

class Dropdown extends React.Component{
  handleOnSelected = () => {
    // return value;
  }

  render(){
    return(
      <select class="custom-select" id="inputGroupSelect01">
        <option onChange={this.handleOnSelected} selected value="1">Progress 1</option>
        <option onChange={this.handleOnSelected} value="2">Progress 2</option>
        <option onChange={this.handleOnSelected} value="3">Progress 3</option>
      </select>
    )
  }

}

export default Dropdown;