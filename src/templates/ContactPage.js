import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { MapPin, Smartphone, Mail } from 'react-feather'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import IconList from '../components/IconList'
import EnquiryForm from '../components/EnquiryForm'

const ContactPage = () => (
  <div>
    <Helmet>
      <title lang="en">Contact Robert</title>
    </Helmet>

    <div className="section">
      <LargeTitle
        smallTitle="contact robert"
        title="get in touch"
        largeTitle="Contact"
        marginTop={true}
      />

      <div className="small content">
        <LeftColumn
          content={
            <p>
              Get in cantact with Robert via phone or email or fill out the form
              below to find out more about his work. He looks forward to hearing
              from you and will get back to you as soon as possible.
            </p>
          }
        />

        <div className="clear" />

        <div className="column left">
          <ul className="icons">
            <IconList
              image="/images/icon-address.svg"
              content="PO BOX 213, West Burleigh QLD 4219 Australia"
            />

            <IconList
              image="/images/icon-phone.svg"
              content="+61 414 339 494"
            />

            <IconList
              image="/images/icon-mail.svg"
              content="rdavis@davislegal.com.au"
            />
          </ul>
        </div>

        <div className="column right">
          <EnquiryForm />
        </div>
      </div>

      <div className="clear" />
    </div>

    <Hero image="/images/uploads/footer-contact.jpg" footer={true} />
  </div>
)

export default ContactPage
