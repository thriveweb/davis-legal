import React from 'react'
import Link from 'gatsby-link'

import './Button.css'

const Button = (props) => (

  <div>

    <Link to={props.Page}>
      <button>
        <p>{props.Text}</p>
        <div className="circle"></div>
      </button>
    </Link>

  </div>

)

export default Button
