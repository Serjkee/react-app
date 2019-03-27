import React, { Component } from 'react'

import CardItem from '../../components/CardSection/CardItem'
import './Card.scss'

export class Card extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    )
  }
}

export default Card
