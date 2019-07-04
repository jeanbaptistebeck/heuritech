import React from 'react';

import Sidebar from './sidebar';
import ProgressBar from './progress_bar';
import Picture from './picture';

import pictures_urls from '../../db/images';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 1,
      picture: null,
      pictures: [],
      frame: 'white'
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    let pictures = [];
    pictures_urls.forEach(function(src) {
      let img = new Image();
      img.src = src;
      pictures.push(img);
    });
    this.setState({picture: pictures[0], pictures: pictures, length: pictures_urls.length})
  }

  handleKeyUp = e => {
    if (this.state.progress < this.state.length) {
      if (e.keyCode === 38) { this.setState({frame: 'green'}) }
      if (e.keyCode === 39) {
        this.setState({
          progress: this.state.progress + 1,
          picture: this.state.pictures[this.state.progress]
        });
      }
      if (e.keyCode === 40) { this.setState({frame: 'red'}) }
      if (e.keyCode === 38 || e.keyCode === 40) {
        setTimeout(() => this.setState({
          progress: this.state.progress + 1,
          picture: this.state.pictures[this.state.progress],
          frame: 'white'
        }), 500);
      }
    }
    if (e.keyCode == 37 && this.state.progress > 1) {
      this.setState({
        progress: this.state.progress - 1,
        picture: this.state.pictures[this.state.progress - 2]
      });
    }
  }

  handleClick = (value) => {
    if (this.state.progress < this.state.length) {
      switch(value) {
        case 'Yes':
          this.setState({frame: 'green'})
          break;
        case 'No':
          this.setState({frame: 'red'})
          break;
        case 'I Don\'t Know':
          this.setState({frame: 'yellow'})
          break;
      }
      setTimeout(() => this.setState({
        progress: this.state.progress + 1,
        picture: this.state.pictures[this.state.progress],
        frame: 'white'
      }), 500);
    }
  }

  render() {
    return(
      <div className="app">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Heuritech Tagging Platform</a>
        </nav>
        <div className="row">
          <div className="col-9 image-wrapper">
            <div ref={(ref) => { this.picture_frame=ref }}>
              <Picture
                picture={this.state.picture}
                key={this.state.picture ? this.state.picture.src : null}
                frame={this.state.frame}
              />
            </div>
            <ProgressBar progress={this.state.progress} length={this.state.length} />
          </div>
          <div className="sidebar col-3 bg-light">
            <Sidebar
              progress={this.state.progress}
              length={this.state.length}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
