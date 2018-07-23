import React from 'react'
import Link from 'gatsby-link'

import './More.css'

import Button from '../components/Button'
import Column from '../components/Column'
import Content from '../components/Content'

const More = props => (
  <div className="more">
    <div className="small title">
      <div className="small left">
        <h2>{props.title}</h2>
      </div>
      <h1>{props.largeTitle}</h1>
    </div>

    <div className="small content">
      <Column right={true}>
        <Content src={props.content} />
      </Column>

      <div className="clear" />
    </div>

    <Button text={props.buttonText} page={props.buttonLink} />
  </div>
)

export default More
