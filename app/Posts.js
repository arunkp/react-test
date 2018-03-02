import React from 'react'
import ReactDOM from 'react-DOM'
import Post from './Post'
import Navbar from './Navbar'
import axios from 'axios'

class Posts extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      _allPosts: [],
      _posts: [],
      _groups: [],
      _filterGroup: "All"
    }
    this.filterPosts = this.filterPosts.bind(this);
    this.showPosts = this.showPosts.bind(this);
	}
	render() {
		return (
      <div>
        <Navbar />
        <div className="content">
          <header>All Posts</header>
          <div className="filter">
            <label>Filter by Group</label>
            <select onChange={this.filterPosts}>
              <option value="All">All</option>
              {this.state._groups.map(function(item){
                return <option key={item} value={item}>Group {item}</option>
              })}
            </select>
          </div>
          <ol className="posts">
            {this.state._posts.map(function(post){
              return <Post title={post.title} key={post.id} group={post.userId}/>
            })}
          </ol>
        </div>
      </div>
			)
	}
  componentDidMount() {
    let _group = [];
    axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
      _group = result.data.map(function(item){
        return item.userId;
      })
      this.setState({
        _allPosts: result.data,
        _posts: result.data,
        _groups: Array.from(new Set(_group))
      })
    })
  }
  filterPosts(event) {
    if(event.target.value !== "All") {
      let filterg = event.target.value
      this.setState({
        _filterGroup: filterg
        },function () {
          this.showPosts();
      })
    }else {
      this.setState({
        _posts: this.state._allPosts
      })
    }

  }
  showPosts() {
    let _this = this;
    var new_posts = this.state._allPosts.filter(function(item){
      if(item.userId == _this.state._filterGroup) {
        return item;
      }
    })
    this.setState({
      _posts: new_posts
    })
  }
}

export default Posts
