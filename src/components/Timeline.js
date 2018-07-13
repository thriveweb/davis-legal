import React from 'react'
import Link from 'gatsby-link'

import Event from '../components/Event'
import EventNow from '../components/EventNow'

const Timeline = (props) => (

  <div>

    <div className="timeline">
      <div className="line"></div>

      <div className="column left">
        <Event
          Year="1979"
          Content="Robert became Litigation Partner in a large Gold Coast Law Firm practising in both Queensland and New South Wales. He progressed to Senior Litigation Partner and in 1990 became the Managing Partner. He remained at this firm until 2000."
        />

        <Event
          Year="2003"
          Content="Robert was enrolled as a Barrister & Solicitor in the Supreme Court of the Australian Capital Territory and has since conducted many major cases in that court."
        />
      </div>

      <div className="column right">
        <Event
          Year="1979"
          Content="In February 1979 Robert was admitted as a Solicitor of the Supreme Court of Queensland and in June 1979 also became a Solicitor of the Supreme Court of New South Wales."
        />

        <Event
          Year="2000"
          Content="Robert commenced sole practice as a Litigation Lawyer and Legal Consultant while also serving as National President of the Australian Lawyers Association."
        />

        <Event
          Year="2006"
          Content="Robert was the President of the Queensland Law Society, before joining the Queensland Bar in July."
        />
      </div>

      <div className="clear"></div>
    </div>

    <EventNow
      Content="Robert accepts briefs for clients who engage him via a Solicitor. He also accepts direct 'briefs to advise' from accounting firms, financial advisers and other similar professional providers."
    />

  </div>

)

export default Timeline
