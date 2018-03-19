import React from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import { deletePost, updatePost } from '../actions/posts'

class PostView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }


  
  render() {
    const { post = {}, user } = this.props
    const { showForm } = this.state
      
    return (

      <Container>
        <Link to="/posts">View Feed</Link>
        <hr />
        { showForm ? 
            <PostForm {...post} toggleForm={this.toggleForm} />
            :
            <div>
              <Header as="h4">{post.title}</Header>
              <Header as="h3">{post.body}</Header>
              <Header as="h4">{post.name}</Header>
              { user === post.user_id ? 
                  <div>
                    <Button onClick={this.toggleForm}>
                      { showForm ? 'Cancel' : 'Edit' }
                    </Button>
                    <Button>
                      Delete
                    </Button>
                  </div> 
                : 
                  <div></div> 
              }
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )), user: state.user.id }
}

export default connect(mapStateToProps)(PostView)