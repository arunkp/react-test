import React from 'react'
import ReactDOM from 'react-DOM'

class Post extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <li data-group={this.props.group}>{this.props.title}</li>
    )
  }
}

export default Post;
