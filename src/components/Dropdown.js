import React from 'react';

class Dropdown extends React.Component{

  handleOnSelected = event => {
    const activeBar = parseInt(event.target.value);
    this.props.updateActiveBar(activeBar);
  }

  render(){
    return(
      <select onChange={this.handleOnSelected} className="custom-select" id="inputGroupSelect01">
        <option defaultValue value="0">Progress 1</option>
        <option value="1">Progress 2</option>
        <option value="2">Progress 3</option>
      </select>
    )
  }

}

export default Dropdown;