import React from 'react'
import Link from 'gatsby-link'

import './Timeline.css'

import Event from '../components/Event'

const Timeline = ({ props, timeline }) => (
  <div>
    <div className="timeline">
      <div className="line" />

      {timeline.event.map((event, index) => {
        return <Event year={event.year} content={event.content} />
      })}

      <div className="clear" />
    </div>

    <Event
      year={timeline.eventNow.title}
      content={timeline.eventNow.content}
      eventNow={true}
    />
  </div>
)

export default Timeline
