import React from 'react';

class ProgressBar extends React.Component {
  render() {
    return(
      <div className="myProgress">
        <div className="myBar" style={{width: `${(parseInt(this.props.progress)/parseInt(this.props.length))*100}%`}}></div>
      </div>
    );
  }
}

export default ProgressBar;
