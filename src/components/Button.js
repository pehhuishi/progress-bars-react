import React from 'react';

const Button = props => {
  return props.buttons.map((button,index) => {
    return (
      <button type="button" key={index} className="btn btn-primary" value={button}>
        {button}
      </button>
    );
  });
};
export default Button;
