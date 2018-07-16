import React from 'react'
import Link from 'gatsby-link'

import './Form.css'

const FooterImage = (props) => (

  <div>

    <form class="contact" action="success.html" method="post">
      <input type="text" name="reference" value="" placeholder="Solicitor's Reference" required />
      <input type="text" name="name" value="" placeholder="Solicitor's Firm Name" />
      <input type="text" name="email" value="" placeholder="Email Address" required />
      <select>
        <option value="default">I need help with...</option>
        <option value="one">First Option</option>
        <option value="two">Second Option</option>
        <option value="three">Third Option</option>
      </select>
      <textarea name="comments" placeholder="Comments" />
      <button type="sumbit">
        <p>send now</p>
        <div className="circle"></div>
      </button>
    </form>

  </div>

)

export default FooterImage
