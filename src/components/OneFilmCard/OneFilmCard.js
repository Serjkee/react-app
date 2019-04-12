import React from 'react';

import './OneFilmCard.scss'

const OneFilmCard = (props) => {

  return ( 
    <div className='film-card-wrapper'>
      <div className='film-card-image'>
        <img src={props.cardImgPath} />
      </div>
      <div className='film-card-description'>
        <h2 className='film-card-header'>{props.cardTitle}</h2>
        <p className='film-card-genres'>{props.cardGenres}</p>
        <div className='film-card-characteristics'><span className='film-card-year'>{props.cardReleaseDate}</span><span className='film-card-time'>{props.cardRuntime ? `${props.cardRuntime} min` : null }</span></div>
        <p className='film-card-text'>{props.cardFilmOverview}</p>
      </div>
    </div>
    );
}
 
export default OneFilmCard;