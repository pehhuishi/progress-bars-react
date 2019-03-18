import React from 'react';

const ProgressBar = props => {

  return props.bars.map((bar,index) => {
    const bgColor = bar > 100 ? '#dc3545' : '#007bff';
    const css = {
      width: `${bar}%`,
      backgroundColor: `${bgColor}`
    }
  
    return (
      <div className="progress" key={index}>
        <div
          className="progress-bar"
          role="progressbar"
          style={css}
          aria-valuenow={bar}
          aria-valuemin="0"
          aria-valuemax="100"
        >
        {bar}
        </div>
      </div>
    );
  });
};

export default ProgressBar;
