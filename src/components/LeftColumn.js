import React from 'react'
import Link from 'gatsby-link'

const LeftColumn = ({ children, content }) => (
  <div className="column left">{children || content}</div>
)

export default LeftColumn
