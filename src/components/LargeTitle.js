import React, { Component } from 'react'
import Link from 'gatsby-link'

import './LargeTitle.css'

class LargeTitle extends Component {

  render () {

    const { marginTop, smallTitle, title, largeTitle } = this.props

    return (
      <div className={`${'large title'} ${marginTop ? 'margin-top' : ''}`}>
        <div className="small left">
          <h3 className={smallTitle ? '' : 'hide'}>{smallTitle}</h3>
          <h2 className={title ? '' : 'hide'}>{title}</h2>
        </div>
        <h1>{largeTitle}</h1>
      </div>

    )
  }
}

export default LargeTitle
