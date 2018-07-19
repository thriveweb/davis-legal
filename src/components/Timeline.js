import React from 'react'
import Link from 'gatsby-link'

import './Timeline.css'

import Event from '../components/Event'

const Timeline = (props) => (

  <div>

    <div className="timeline">
      <div className="line"></div>

        <Event
          year="1979"
          content="Robert became Litigation Partner in a large Gold Coast Law Firm practising in both Queensland and New South Wales. He progressed to Senior Litigation Partner and in 1990 became the Managing Partner. He remained at this firm until 2000."
        />

        <Event
          year="1979"
          content="In February 1979 Robert was admitted as a Solicitor of the Supreme Court of Queensland and in June 1979 also became a Solicitor of the Supreme Court of New South Wales."
        />


        <Event
          year="2000"
          content="Robert commenced sole practice as a Litigation Lawyer and Legal Consultant while also serving as National President of the Australian Lawyers Association."
        />

        <Event
          year="2003"
          content="Robert was enrolled as a Barrister & Solicitor in the Supreme Court of the Australian Capital Territory and has since conducted many major cases in that court."
        />

        <Event
          year="2006"
          content="Robert was the President of the Queensland Law Society, before joining the Queensland Bar in July."
        />

      <div className="clear"></div>
    </div>

    <Event
      year="NOW"
      content="Robert accepts briefs for clients who engage him via a Solicitor. He also accepts direct 'briefs to advise' from accounting firms, financial advisers and other similar professional providers."
      eventNow={true}
    />

  </div>

)

export default Timeline
