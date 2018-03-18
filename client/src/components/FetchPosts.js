import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getPosts } from '../actions/posts'
import Posts from './Posts'


class FetchPosts extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    return (
      <div>
        <Route exact path="/posts" component={Posts} />
      </div>
    )
  }
}

export default connect()(FetchPosts)