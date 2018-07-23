import React, { Component } from 'react'
import Link from 'gatsby-link'

import './IconList.css'
import Image from '../components/Image'

class IconList extends Component {
  render() {
    const { iconList = [] } = this.props

    return (
      <ul className="icons">
        {iconList.map((list, index) => {
          return (
            <li>
              <Image src={list.icon} alt={list.title} />
              <b>{list.title}</b>
              <p>{list.content}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default IconList
