import React from 'react'
import Link from 'gatsby-link'

import './Event.css'

const Event = (props) => (

  <div>

    <div className="event">
      <h4>{props.Year}</h4>
      <p>{props.Content}</p>
    </div>

  </div>

)

export default Event
