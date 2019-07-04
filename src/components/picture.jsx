import React from 'react';

class Picture extends React.Component {
  componentDidMount() {
    if (this.props.picture) {
      this.props.picture.classList.add("picture")
      this.componentRef.appendChild(this.props.picture)
    }
  }

  render() {
    return(
      <div className='picture-box' ref={(DOMNodeRef) => { this.componentRef=DOMNodeRef }}>
      </div>
    );
  }
}

export default Picture;
