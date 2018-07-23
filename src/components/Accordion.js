import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Accordion.css'

class Accordion extends Component {
  state = {
    activeItems: [],
  }

  handleClick = index => {
    let { activeItems } = this.state
    const activeIndex = activeItems.indexOf(index)
    if (activeIndex >= 0) {
      activeItems.splice(activeIndex, 1)
    } else {
      activeItems.push(index)
    }
    this.setState({ activeItems })
  }

  render() {
    const { accordion = [] } = this.props

    if (accordion.length <= 0) return null

    return (
      <div className="accordion">
        {console.log(accordion)}
        {accordion.map((field, index) => {
          const active = this.state.activeItems.indexOf(index) >= 0
          return (
            <div
              className={`item ${active ? 'active' : ''}`}
              onClick={() => this.handleClick(index)}
              key={field.title}
            >
              <h4>{field.title}</h4>
              <div className="expand">
                <p>{field.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Accordion
