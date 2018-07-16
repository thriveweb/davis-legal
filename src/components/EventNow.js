import React from 'react'
import Link from 'gatsby-link'

import './EventNow.css'

const EventNow = (props) => (

  <div>

    <div className="event now">
      <h4>NOW</h4>
      <p>{props.Content}</p>
    </div>

  </div>

)

export default EventNow
