import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
  <Header textAlign="center" as="h3">
    Welcome To The<Link to="/posts">Ravings</Link> of {this.props.user.name}
  </Header>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}
export default connect(mapStateToProps)(Home)