import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <div>
    <Helmet>
      <body className="four04" />
    </Helmet>

    <div className="center">
      <h1>NOT FOUND</h1>
      <h4>
        This page doesnt exist, go <Link to="/">home.</Link>
      </h4>
    </div>
  </div>
)

export default NotFoundPage
