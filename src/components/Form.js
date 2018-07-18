import React from 'react'
import Link from 'gatsby-link'

import './Form.css'

const FooterImage = (props) => (

  <div>

    <form className="contact" action="success.html" method="post">
      <input type="text" name="reference" placeholder="Solicitor's Reference" required />
      <input type="text" name="name" placeholder="Solicitor's Firm Name" />
      <input type="text" name="email" placeholder="Email Address" required />
      <select>
        <option value="default">I need help with...</option>
        <option value="one">First Option</option>
        <option value="two">Second Option</option>
        <option value="three">Third Option</option>
      </select>
      <textarea name="comments" placeholder="Comments" />

      <p>Court and other commitments may sometimes result in a delay in responding to email inquiries. If your inquiry is urgent then it is best to phone. Robert will not accept urgent briefs without prior discussion and agreement.</p>

      <button type="sumbit">
        <p>send now</p>
        <div className="circle"></div>
      </button>
    </form>

  </div>

)

export default FooterImage
