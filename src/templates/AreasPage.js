import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import Column from '../components/Column'
import Content from '../components/Content'
import Button from '../components/Button'
import IconList from '../components/IconList'
import More from '../components/More'

export const AreasPageTemplate = ({
  title,
  heroImage,
  footerImage,
  intro,
  iconList,
  more,
  meta,
}) => (
  <div>
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>

    <Hero image={heroImage} />

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
          <IconList iconList={iconList.left} />
        </div>

        <div className="column right">
          <IconList iconList={iconList.right} />
        </div>

        <div className="clear" />
      </div>
    </div>

    <More
      largeTitle={more.largeTitle}
      title={more.title}
      content={more.content}
      buttonText={more.buttonText}
      buttonLink={more.buttonLink}
    />

    <Hero image={footerImage} footer={true} />
  </div>
)

const AreasPage = ({ data: { page } }) => (
  <AreasPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AreasPage

export const pageQuery = graphql`
  query AreasPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        heroImage {
          ...NoBlurImage
        }
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
        iconList {
          left {
            icon {
              ...NoBlurImage
            }
            title
            content
          }
          right {
            icon {
              ...NoBlurImage
            }
            title
            content
          }
        }
        more {
          largeTitle
          title
          content
          buttonText
          buttonLink
        }
        meta {
          title
          description
        }
      }
    }
  }
`
