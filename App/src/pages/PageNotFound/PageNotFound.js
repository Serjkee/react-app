import React, { Component } from 'react'

export class PageNotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNotFound: null,
    }
  }

  componentDidMount() {
    import('../../components/PageNotFound/PageNotFound').then((mod) => this.setState({pageNotFound: mod.default()}))
  }
  

  render() {
    return (
      <>
        {this.state.pageNotFound}
      </>
    )
  }
}

export default PageNotFound
