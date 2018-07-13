import React from 'react'
import Link from 'gatsby-link'

const Accordion = (props) => (

  <div>

    <div className="accordion">
      <div className="title">{props.Title}</div>

      <div className="expand">
        <p>{props.Content}</p>
      </div>
    </div>

  </div>

)

export default Accordion
