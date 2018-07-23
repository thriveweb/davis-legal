import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { MapPin, Smartphone, Mail } from 'react-feather'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Image from '../components/Image'
import Button from '../components/Button'
import IconList from '../components/IconList'
import EnquiryForm from '../components/EnquiryForm'

export const ContactPageTemplate = ({ footerImage, intro, contactInfo }) => (
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
            <li>
              <Image src="/images/icon-phone.svg" alt="" />
              <a href={`tel:${contactInfo.phone}`}>
                <p>{contactInfo.phone}</p>
              </a>
            </li>
            <li>
              <Image src="/images/icon-mail.svg" alt="" />
              <a href={`mailto:${contactInfo.email}`}>
                <p>{contactInfo.email}</p>
              </a>
            </li>
            <li>
              <Image src="/images/icon-address.svg" alt="" />
              <p>{contactInfo.address}</p>
            </li>
          </ul>
        </div>

        <div className="column right">
          <EnquiryForm />
        </div>
      </div>

      <div className="clear" />
    </div>

    <Hero image={footerImage} footer={true} />
  </div>
)

const ContactPage = ({ data: { page } }) => (
  <ContactPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        footerImage {
          ...NoBlurImage
        }
        intro {
          largeTitle
          title
          subtitle
        }
        contactInfo {
          phone
          email
          address
        }
      }
    }
  }
`
