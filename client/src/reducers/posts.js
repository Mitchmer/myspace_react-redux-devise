import {
  POSTS,
  ADD_POST,
} from '../actions/posts'

const posts = ( state = [], action ) => {
  switch (action.type) {
    case POSTS: 
      return action.posts
    case ADD_POST:
      return [action.post, ...state]
    default:
      return state
  }
}

export default posts