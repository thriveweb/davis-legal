import React from 'react'
import Link from 'gatsby-link'

import './More.css'

import Button from '../components/Button'
import RightColumn from '../components/RightColumn'

const More = (props) => (

  <div className="more">
    <div className="small title">
      <div className="small left">
        <h2>find out more</h2>
      </div>
      <h1>More</h1>
    </div>

    <div className="small content">
      <RightColumn
        content={
          <p>
            Robert's costs vary depending on the the amount of work required. Cost estimates can be supplied once a brief is received. In appropriate cases Robert is willing to work on a deferred payment or conditional basis. Further details are available upon request.
          </p>
        }
      />

      <div className="clear"></div>
    </div>

    <Button
      text="contact robert"
      page="/contact/"
    />
  </div>

)

export default More
