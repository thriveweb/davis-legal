import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { MapPin, Smartphone, Mail } from 'react-feather'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import Column from '../components/Column'
import Content from '../components/Content'
import Image from '../components/Image'
import Button from '../components/Button'
import IconList from '../components/IconList'
import EnquiryForm from '../components/EnquiryForm'

export const ContactPageTemplate = ({
  footerImage,
  intro,
  contactInfo,
  meta,
}) => (
  <div>
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>

    <div className="section">
      <LargeTitle
        smallTitle={intro.subtitle}
        title={intro.title}
        largeTitle={intro.largeTitle}
        marginTop={true}
      />

      <div className="small content">
        <Column left={true}>
          <Content src={intro.leftColumn} />
        </Column>

        <Column right={true}>
          <Content src={intro.rightColumn} />
        </Column>

        <div className="clear" />

        <div className="column left">
          <ul className="icons">
            <li>
              <Image src="/images/uploads/icon-phone.svg" alt="" />
              <a href={`tel:${contactInfo.phone}`}>
                <p>{contactInfo.phone}</p>
              </a>
            </li>
            <li>
              <Image src="/images/uploads/icon-mail.svg" alt="" />
              <a href={`mailto:${contactInfo.email}`}>
                <p>{contactInfo.email}</p>
              </a>
            </li>
            <li>
              <Image src="/images/uploads/icon-address.svg" alt="" />
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
          leftColumn
          rightColumn
        }
        contactInfo {
          phone
          email
          address
        }
        meta {
          title
          description
        }
      }
    }
  }
`
