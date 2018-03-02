import React from 'react'
import ReactDOM from 'react-DOM'
import Audio from './Audio'
import Navbar from './Navbar'
import axios from 'axios'

class Player extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      _musicFiles: [{
        title: 'Synth-organ.ogg',
        source: 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg'
      },
      {
        title: 'new-wave-kit.ogg',
        source: 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg'
      }]
    }
  }
  render() {
    return(
      <div>
        <Navbar />
        <div className="content">
          {this.state._musicFiles.map(function(music,index){
            return <Audio title={music.title} source={music.source} key={index}/>
          })}
        </div>
      </div>

    )
  }
}

export default Player
