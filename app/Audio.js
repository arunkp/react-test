import React from 'react'
import ReactDOM from 'react-DOM'

class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="audio-container">
        <div className="audio-name">{this.props.title}</div>
        <audio src={this.props.source} controls></audio>
      </div>

    )
  }
}

export default Audio
