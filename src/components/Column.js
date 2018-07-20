import React from 'react'
import Link from 'gatsby-link'

const Column = props => (
  <div className={`${'column'} ${left ? 'left' : ''} ${right ? 'right' : ''}`}>
    {props.content}
  </div>
)

export default Column
