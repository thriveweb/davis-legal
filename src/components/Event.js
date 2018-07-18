import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Event.css'

class Event extends Component {
  constructor(props) {
    super(props)

    this.eventRef = null

    this.state = {

    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { eventActive } = this.state
    const elPosition = this.eventRef.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    const scrollOffset = window.pageYOffset

    if(!eventActive && elPosition - (windowHeight - 200) < 0) {
      this.setState({
        eventActive: true
      })
    } else if(eventActive && elPosition - (windowHeight - 200) > 0) {
      this.setState({
        eventActive: false
      })
    }
  }


  render() {
    const { Year, Content, EventNow } = this.props
    const { eventActive } = this.state

    return <div className={`event ${eventActive ? 'active' : ''} ${EventNow ? 'now' : ''}`} ref={el => this.eventRef = el}>
      <h4>{Year}</h4>
      <p>{Content}</p>
    </div>
  }
}
export default Event
