import axios from 'axios'

export const POSTS = 'POSTS'
export const ADD_POST = 'ADD_POST'

export const getPosts = () => {
  return (dispatch) => {
    axios.get('/api/posts')
      .then( res => {
        dispatch({ type: POSTS, posts: res.data })
        dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', { post })
      .then( res => {
        dispatch({ type: ADD_POST, post: res.data })
        dispatch({ type: 'HEADERS', headers: res.headers })
      })
  }
}