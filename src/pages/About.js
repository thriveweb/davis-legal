import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Timeline from '../components/Timeline'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import More from '../components/More'
import FooterHero from '../components/FooterHero'

import FooterImage from '../../public/static/img/footer-about.jpg'
import HeroImage from '../../public/static/img/hero-about.jpg'

const AboutPage = () => (
  <div>

    <Hero
      Image={`${HeroImage}`}
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
      <LargeTitle
        LargeTitle="History"
      />

      <div className="small content">
        <Timeline />
      </div>

      <div className="clear"></div>

    </div>

    <div className="section">

      <LargeTitle
        SmallTitle="roberts work"
        Title="publications"
        LargeTitle="Work"
      />

      <div className="small content">
        <LeftColumn
          Content="Publications authored, books contributed towards and conference presentations made, include:"
        />

        <div className="clear"></div>

        <Accordion
          accordionFields={[
            {
              title: "What is a barrister?",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },

            {
              title: "How does a barrister differ from a solicitor?",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },

            {
              title: "How do barristers charge?",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },

            {
              title: "Do I also need a solicitor?",
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },

            {
              title: "How do I employ a barrister?", 
              content: "Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
            },
          ]}

        />
      </div>

      <div className="clear"></div>

    </div>

    <More />

    <FooterHero
      Image={`${FooterImage}`}
    />

  </div>
)

export default AboutPage
