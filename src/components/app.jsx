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
      pictures: []
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    let pictures = [];
    for (let i = 0; i < pictures_urls.length; i++) {
        let img = new Image();
        img.src = pictures_urls[i];
        pictures.push(img);
    }
    this.setState({picture: pictures[0], pictures: pictures, length: pictures_urls.length})
  }

  handleKeyUp = e => {
    if ((e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) && this.state.progress < this.state.length) {
      this.setState({
        progress: this.state.progress + 1,
        picture: this.state.pictures[this.state.progress]
      });
    }
    else if (e.keyCode == 37 && this.state.progress > 1) {
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
          // API call
          break;
        case 'No':
          // API call
          break;
        case 'I Don\'t Know':
          // API call
          break;
      }
      this.setState({ progress: this.state.progress + 1, picture: this.state.pictures[this.state.progress] });
    }
  }

  render() {
    return(
      <div className="app">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Heuritech Tagging Platform</a>
        </nav>
        <div className="row">
          <div className="col-9 image-wrapper">
            <Picture picture={this.state.picture} key={this.state.picture ? this.state.picture.src : null} />
            <ProgressBar progress={this.state.progress} length={this.state.length} />
          </div>
          <div className="sidebar col-3 bg-light">
            <Sidebar progress={this.state.progress} length={this.state.length} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
