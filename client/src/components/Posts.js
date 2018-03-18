import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header, Button } from 'semantic-ui-react';
import { getPosts } from '../actions/posts'
import PostForm from './PostForm'

class Posts extends Component {
  state = { showForm: false }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
      
    })
  }

  render() {
    const { showForm } = this.state
    return(
      <div> 
        <Button onClick={this.toggleForm}>
          { showForm ? "Cancel" : "Create" }
        </Button>
        { showForm ?
          <PostForm toggleForm={this.toggleForm} />
          :
          <div>
          <Header as='h1' textAlign='center'>WhineWall</Header>
          { this.props.posts.map( post => 
              <div key={post.id}>
                <h3>{post.name}</h3>
                <h2>{post.title}</h2>
                <h4>{post.body}</h4>
                <hr />
              </div>
            )
            }
          </div>
        } 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts);