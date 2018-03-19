import React from 'react'
import { connect } from 'react-redux'
import { addPost, updatePost } from '../actions/posts'
import { Form } from 'semantic-ui-react'

class PostForm extends React.Component {
  initialState = {
    title: '',
    body: '',
  }
  state = {...this.initialState}

  componentWillMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { dispatch, toggleForm } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    this.setState({...this.initialState})
    toggleForm()
  }

  render() {
    const { title, body } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="title"
          required
          value={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="body"
          value={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Button>Whine</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm)