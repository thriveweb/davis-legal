import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'
import IconList from '../components/IconList'
import More from '../components/More'
import FooterHero from '../components/FooterHero'

const AreasPage = () => (
  <div>

    <Hero
      Image="/img/hero-areas.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="areas of practice"
        Title="accepting briefs to advise & appear"
        LargeTitle="Areas"
      />

      <div className="small content">
        <LeftColumn
          Content={
            <p>
              Robert Davis appears as counsel in Australian State, Territorial and Federal Courts and the High Court of Australia. His main areas of practice include:
            </p>
          }
        />

          <div className="clear"></div>

        <div className="column left">

        <ul className="icons">
          <IconList
            Image="/img/icon-medical.svg"
            Title="Legal, Medical & Financial Professional Negligence Litigation"
            Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            Image="/img/icon-safety.svg"
            Title="Motor Vehicle, Workplace, Defective Products & Premises Liability"
            Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            Image="/img/icon-trade.svg"
            Title="Trade Practices & Consumer Litigation"
            Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />

          <IconList
            Image="/img/icon-super.svg"
            Title="Commonwealth Superannuation Litigation"
            Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
          />
        </ul>
      </div>

      <div className="column right">
          <ul className="icons">
            <IconList
              Image="/img/icon-aviation.svg"
              Title="Civil Aviation Litigation"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              Image="/img/icon-scuba.svg"
              Title="Scuba Diving Litigation"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              Image="/img/icon-inquests.svg"
              Title="Inquests and Commissions of Inquiry"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />

            <IconList
              Image="/img/icon-ethical.svg"
              Title="Professional & Ethical Standards Disciplinary Proceedings"
              Content="Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan."
            />
          </ul>
        </div>

      </div>

      <div className="clear"></div>

    </div>

    <More />

    <FooterHero
      Image="/img/footer-areas.jpg"
    />

  </div>
)

export default AreasPage
