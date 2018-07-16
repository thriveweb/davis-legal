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
import FooterImage from '../components/FooterImage'

const AboutPage = () => (
  <div>

    <Hero
      Image="img/hero-faq.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="frequently asked questions"
        Title="all you need to know"
        LargeTitle="FAQ"
      />

      <div className="small content">
        <LeftColumn
          Content="Proin eget ipsum quis lectus molestie rutrum eu in sem. Praesent tincidunt neque nunc, commodo pharetra odio pellentesque aliquam. Pellentesque tincidunt diam dolor, id dignissim arcu varius sit amet. Proin vel gravida neque, nec interdum dolor."
        />

        <RightColumn
          Content="Donec porta, ex sed ullamcorper vehicula, augue diam cursus orci, porta pretium mauris leo iaculis metus. Mauris ac elit sit amet orci dictum pellentesque. Praesent eget aliquam libero. Aenean tempor ligula sed diam gravida, placerat blandit magna bibendum."
        />

        <div className="clear"></div>
      </div>

      <div className="small content">
        <Accordion
          Title="What is a barrister?"
          Content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        />

        <Accordion
          Title="How does a barrister differ from a solicitor?"
          Content="Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        />

        <Accordion
          Title="How do barristers charge?"
          Content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        />

        <Accordion
          Title="Do I also need a solicitor?"
          Content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        />

        <Accordion
          Title="How do I employ a barrister?"
          Content="Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        />
      </div>

    </div>

    <More />

    <FooterImage
      Image="img/footer-about.jpg"
    />

  </div>
)

export default AboutPage
