import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Accordion from '../components/Accordion'
import More from '../components/More'
import FooterHero from '../components/FooterHero'

import FooterImage from '../../public/static/img/footer-faq.jpg'
import HeroImage from '../../public/static/img/hero-faq.jpg'

const AboutPage = () => (
  <div>

    <Hero
      Image={`${HeroImage}`}
    />

    <div className="section">

      <LargeTitle
        SmallTitle="frequently asked questions"
        Title="all you need to know"
        LargeTitle="FAQ"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <p>
              Proin eget ipsum quis lectus molestie rutrum eu in sem. Praesent tincidunt neque nunc, commodo pharetra odio pellentesque aliquam. Pellentesque tincidunt diam dolor, id dignissim arcu varius sit amet. Proin vel gravida neque, nec interdum dolor.
            </p>
          }
        />

        <RightColumn
          Content={
            <p>
              Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum.
            </p>
          }
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

    </div>

    <More />

    <FooterHero
      Image={`${FooterImage}`}
    />

  </div>
)

export default AboutPage
