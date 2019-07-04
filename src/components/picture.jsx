import React from 'react';

class Picture extends React.Component {
  componentDidMount() {
    if (this.props.picture) {
      this.props.picture.classList.add("picture")
      this.picture_box.appendChild(this.props.picture)
    }
  }

  render() {
    return(
      <div className={`picture-box ${this.props.frame}-frame`} ref={(ref) => { this.picture_box=ref }}>
      </div>
    );
  }
}

export default Picture;
