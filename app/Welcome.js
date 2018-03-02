import React from 'react'
import ReactDOM from 'react-DOM'
import Navbar from './Navbar'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="content">
          <header>Welcome to this Application</header>
          <p>
            This Application is built with React. It has two routes, Blog Posts and Media Player.
          </p>
          <img src="assets/img/animated.gif" />
        </div>
      </div>
    )
  }
}

export default Welcome
