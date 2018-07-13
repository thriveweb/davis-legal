import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import LargeTitle from '../components/LargeTitle'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'
import Button from '../components/Button'

const AreasPage = () => (
  <div>

    <Hero
      Image="img/hero-areas.jpg"
    />

    <div className="section">

      <LargeTitle
        SmallTitle="areas of practice"
        Title="accepting briefs to advise & appear"
        LargeTitle="Areas"
      />

      <div className="small content">
        <LeftColumn
          Content="Robert Davis appears as counsel in Australian State, Territorial and Federal Courts and the High Court of Australia. His main areas of practice include:"
        />

          <div className="clear"></div>

        <div className="column left">

        <ul className="icons">
          <li>
            <img src="img/icon-medical.svg" alt="" />
            <b>Legal, medical and financial professional negligence litigation</b>
            <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
          </li>

          <li>
            <img src="img/icon-safety.svg" alt="" />
            <b>Motor vehicle, workplace, defective products and premises liability</b>
            <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
          </li>

          <li>
            <img src="img/icon-trade.svg" alt="" />
            <b>Trade practices and consumer litigation</b>
            <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
          </li>

          <li>
            <img src="img/icon-super.svg" alt="" />
            <b>Commonwealth superannuation litigation</b>
            <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
          </li>
        </ul>
      </div>

      <div className="column right">
          <ul className="icons">
            <li>
              <img src="img/icon-aviation.svg" alt="" />
              <b>Civil aviation litigation</b>
              <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
            </li>

            <li>
              <img src="img/icon-scuba.svg" alt="" />
              <b>Scuba diving litigation</b>
              <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
            </li>

            <li>
              <img src="img/icon-inquests.svg" alt="" />
              <b>Inquests and Commissions of Inquiry</b>
              <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
            </li>

            <li>
              <img src="img/icon-ethical.svg" alt="" />
              <b>Professional and ethical standards disciplinary proceedings</b>
              <p>Phasellus vitae velit lorem. Quisque viverra purus sit amet tellus posuere egestas. Nullam eleifend sem scelerisque purus cursus accumsan.</p>
            </li>
          </ul>
        </div>

      </div>

      <div className="clear"></div>

    </div>

  </div>
)

export default AreasPage
