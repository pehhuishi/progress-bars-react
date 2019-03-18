import React from 'react';

class Button extends React.Component {

  handleClick = event => {
    this.props.updateBar(parseInt(event.target.value));
  }

  render() {

    return this.props.buttons.map((button,index) => {
      return (
        <button onClick={this.handleClick} type="button" key={index} className="btn btn-primary" value={button}>
          {button}
        </button>
      );
    });
  }
}
export default Button;
