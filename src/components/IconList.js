import React from 'react'
import Link from 'gatsby-link'

import './IconList.css'

const IconList = (props) => (

  <div>

    <li>
      <img src={`${props.Image}`} alt="" />
      <b>{props.Title}</b>
      <p>{props.Content}</p>
    </li>

  </div>

)

export default IconList
