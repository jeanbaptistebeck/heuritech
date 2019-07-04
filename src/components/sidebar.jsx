import React from 'react';

import Button from './button';

class Sidebar extends React.Component {
  render() {
    return(
      <div className='sidebar-wrapper'>
        <div className='spacer'>Batch : <span className="bold">uniqlo_top_jp_basictshirt_0</span></div>
        <div className='spacer'>Do you see <span className="bold">basictshirt</span> in the picture ?</div>
        <div className="grey spacer">{this.props.progress} / {this.props.length}</div>
        <div className="buttons spacer">
          <Button text="Yes" color="success" handleClick={this.props.handleClick} />
          <Button text="No" color="danger" handleClick={this.props.handleClick} />
          <Button text="I Don't Know" color="secondary" handleClick={this.props.handleClick} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
