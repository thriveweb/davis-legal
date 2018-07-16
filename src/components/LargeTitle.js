import React, { Component } from 'react'
import Link from 'gatsby-link'

import './LargeTitle.css'

class LargeTitle extends Component {

  render () {
    return  (
      <div>

        <div className="large title">
          <div className="small left">
            <h3 className={this.props.SmallTitle ? '' : 'hide'}>{this.props.SmallTitle}</h3>
            <h2 className={this.props.Title ? '' : 'hide'}>{this.props.Title}</h2>
          </div>
          <h1>{this.props.LargeTitle}</h1>
        </div>

      </div>
    )
  }
}

export default LargeTitle
