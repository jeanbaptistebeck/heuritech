import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <div>
        <button onClick={() => this.props.handleClick(this.props.text)} type="button" className={`btn btn-${this.props.color}`}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
