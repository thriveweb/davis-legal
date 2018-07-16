import React from 'react'
import Link from 'gatsby-link'

import './More.css'

import Button from '../components/Button'

const More = (props) => (

  <div>

    <div className="section more">
      <div className="small title">
        <div className="small content">
          <div className="column left">
            <h2>find out more</h2>
          </div>
          <div className="column right">
            <p>Robert's fees vary depending on the the amount of work required. Fee estimates can be supplied once a brief is received. In appropriate cases Robert is willing to work on a deferred payment or conditional basis. Further details are available upon request.</p>
          </div>
        </div>

        <h1>More</h1>
      </div>

      <div className="clear"></div>

      <div className="small center">
        <Button
          Text="discover more"
          Page="Contact"
        />
      </div>
    </div>

  </div>

)

export default More
