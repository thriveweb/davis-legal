import React from 'react'
import Link from 'gatsby-link'

import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import IconList from '../components/IconList'
import Button from '../components/Button'
import Form from '../components/Form'
import FooterHero from '../components/FooterHero'

const AreasPage = () => (
  <div>

    <div className="section">

      <LargeTitle
        SmallTitle="contact robert"
        Title="get in touch"
        LargeTitle="Contact"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <p>
              Get in cantact with Robert via phone or email or fill out the form below to find out more about his work. He looks forward to hearing from you and will get back to you as soon as possible.
            </p>
            }
        />

        <div className="clear"></div>

        <div className="column left">

          <ul className="icons">
            <IconList
              Image="/img/icon-address.svg"
              Content="PO BOX 213, West Burleigh QLD 4219 Australia"
            />

            <IconList
              Image="/img/icon-phone.svg"
              Content="+61 414 339 494"
            />

            <IconList
              Image="/img/icon-mail.svg"
              Content="rdavis@davislegal.com.au"
            />
          </ul>
        </div>

        <div className="column right">
          <Form />
        </div>
      </div>

      <div className="clear"></div>

    </div>

    <FooterHero
      Image="/img/footer-contact.jpg"
    />

  </div>
)

export default AreasPage
