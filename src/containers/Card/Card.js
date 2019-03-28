import React, { Component } from 'react'

import CardItem from '../../components/CardSection/CardItem'
import './Card.scss'

export class Card extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        <CardItem imgSrc='src/assets/images/pulp.jpg' movieName='Pulp Fiction' movieAge='2004' movieGenre='Crime' />
        <CardItem imgSrc='src/assets/images/pulp.jpg' movieName='Fun Fiction' movieAge='2014' movieGenre='Comedy' />
        <CardItem imgSrc='src/assets/images/pulp.jpg' movieName='Crime Fiction' movieAge='2024' movieGenre='Drama' />
      </div>
    )
  }
}

export default Card
