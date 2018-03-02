import React from 'react'
import ReactDOM from 'react-DOM'
import {Link} from 'react-router'

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <Link className="logo" to="/">Logo</Link>
        <Link className="navLink" to="/posts">Posts</Link>
        <Link className="navLink" to="/player">Player</Link>
      </nav>
    )
  }
}

export default Navbar
