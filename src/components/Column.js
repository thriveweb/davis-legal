import React, { Component } from 'react'
import Link from 'gatsby-link'

class Column extends Component {
  render() {
    const { children, left, right, content } = this.props

    return (
      <div
        className={`${'column'} ${left ? 'left' : ''} ${right ? 'right' : ''}`}
      >
        {children}
      </div>
    )
  }
}

export default Column
