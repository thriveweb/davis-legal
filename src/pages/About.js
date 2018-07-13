import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Timeline from '../components/Timeline'
import Button from '../components/Button'
import Accordion from '../components/Accordion'

const AboutPage = () => (
  <div>

    <Hero
      Image="img/hero-about.jpg"
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
          Title="Journal"
          Content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        />

        <Accordion
          Title="Books"
          Content="Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        />

        <Accordion
          Title="Presentations & Submissions"
          Content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        />
      </div>

      <div className="clear"></div>

    </div>

  </div>
)

export default AboutPage
