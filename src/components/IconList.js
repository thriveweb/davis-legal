import React, { Component } from 'react'
import Link from 'gatsby-link'

import './IconList.css'

class IconList extends Component {

  render () {

    const { image, title, content } = this.props

    return (
      <li>
        <img src={`${image}`} alt="" />
        <b>{title}</b>
        <p>{content}</p>
      </li>
    )

  }
}

export default IconList
