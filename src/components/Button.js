import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Button.css'

class Button extends Component {

  render () {

    const { page, text } = this.props

    return (
      <Link to={page}>
        <button>
          <p>{text}</p>
          <div className="circle"></div>
        </button>
      </Link>

    )
  }
}

export default Button
