import React from 'react'
import Link from 'gatsby-link'

const LargeTitle = (props) => (

  <div>

    <div className="large title">
      <div className="small left">
        <h3>{props.SmallTitle}</h3>
        <h2>{props.Title}</h2>
      </div>
      <h1>{props.LargeTitle}</h1>
    </div>

  </div>

)

export default LargeTitle
