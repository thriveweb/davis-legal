import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Timeline from '../components/Timeline'
import Button from '../components/Button'

const AboutPage = () => (
  <div>

    <Hero
      Image="/img/hero_about.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="about robert davis"
        Title="academic qualifications"
        LargeTitle="About"
      />

      <div className="small content">
        <LeftColumn
          Content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        />

        <RightColumn
          Content="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        />
      </div>

      <div className="clear"></div>

    </div>

    <div className="section">
      {/* <LargeTitle
        LargeTitle="History"
      /> */}

      <div className="small content">
        <Timeline />
      </div>

      <div className="clear"></div>

    </div>

    <div className="section">

      <LargeTitle
        SmallTitle="about his career"
        Title="past professional roles"
        LargeTitle="Career"
      />

      <div className="small content">
        <LeftColumn
          Content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        />

        <RightColumn
          Content="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        />
      </div>

      <div className="clear"></div>

    </div>

  </div>
)

export default AboutPage
