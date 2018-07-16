import React from 'react'
import Link from 'gatsby-link'

import Opener from '../components/Opener'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import FooterImage from '../components/FooterImage'

const IndexPage = () => (
  <div>

    <Opener />

    <div className="section">

      <LargeTitle
        SmallTitle="areas of practice"
        Title="accepting briefs to advise & appear"
        LargeTitle="Areas"
      />

      <div className="small content">
        <LeftColumn
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <RightColumn
          Content="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        />
      </div>

      <div className="clear"></div>

      <Button
        Text="discover more"
        Page="Areas"
      />

    </div>



    <div className="section">

      <LargeTitle
        SmallTitle="about robert davis"
        Title="over 35 years of legal experience"
        LargeTitle="About"
      />

      <div className="small content">
        <LeftColumn
          Content="With extensive experience and ongoing academic qualifications, Robert began his career in Queensland and New South Wales in 1979 then worked for many years as a Litigation Solicitor before being called to the Queensland Bar in 2007."
        />

        <RightColumn
          Content="Over his career he has been featured in many publications and has served as President of the Queensland Law Society and the Australian Plaintiff Lawyers Association (now the Australian Lawyers Alliance). He has has appeared in many high profile cases in Australia."
        />
      </div>

      <div className="clear"></div>

      <Button
        Text="discover more"
        Page="About"
      />

    </div>

    <FooterImage
      Image="img/footer-home.jpg"
    />

  </div>
)

export default IndexPage
