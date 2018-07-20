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
    const { accordionFields = [] } = this.props

    if (accordionFields.length <= 0) return null

    return (
      <div className="accordion">
        {accordionFields.map((field, index) => {
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
