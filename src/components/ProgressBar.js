import React from 'react';

const ProgressBar = props => {

  return props.bars.map((bar,index) => {
    console.log(index);
    return (
      <div className="progress" key={index}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: '25%' }}
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
