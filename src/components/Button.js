import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Button.css'

class Button extends Component {
  render() {
    const { page, text } = this.props

    return (
      <button className="button">
        <Link to={page}>
          <p>{text}</p>
          <div className="circle" />
        </Link>
      </button>
    )
  }
}

export default Button
