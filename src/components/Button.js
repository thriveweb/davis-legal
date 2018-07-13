import React from 'react'
import Link from 'gatsby-link'

const Button = (props) => (

  <div>

    <Link to="">
      <button>
        <p>{props.Text}</p>
        <div className="circle"></div>
      </button>
    </Link>

  </div>

)

export default Button
