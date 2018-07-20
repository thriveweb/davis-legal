import React from 'react'
import Link from 'gatsby-link'

const RightColumn = props => (
  <div className="column right">{props.content || props.children}</div>
)

export default RightColumn
