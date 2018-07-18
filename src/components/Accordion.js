import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Accordion.css'


class Accordion extends Component {
  state = {
    activeItem: null
  }

  handleClick = index => {
    const activeItem = this.state.activeItem === index ? null : index
    this.setState({ activeItem })
  }

  render () {
    const { accordionFields = [] } = this.props

    if (accordionFields.length <= 0) return null

    return  (

      <div className="accordion">

        {accordionFields.map((field, index) => {
          const active = this.state.activeItem === index
          return (

            <div className={`item ${active ? 'active' : ''}`} onClick={() => this.handleClick(index)} key={field.title}>

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
