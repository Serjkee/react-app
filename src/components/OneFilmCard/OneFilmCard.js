import React, { Component } from 'react';

import './OneFilmCard.scss'

class OneFilmCard extends Component {

  render() { 
    return ( 
      <div className='film-card-wrapper'>
        <div className='film-card-image'>
          <img src='src/assets/images/pulp.jpg' />
        </div>
        <div className='film-card-description'>
          <h2 className='film-card-header'>Pulp Fiction</h2>
          <p className='film-card-awards'>Oscar winning</p>
          <div className='film-card-characteristics'><span className='film-card-year'>1994</span><span className='film-card-time'>156 min</span></div>
          <p className='film-card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores culpa necessitatibus reiciendis! Illo unde placeat et dignissimos laboriosam eveniet ipsum minima, praesentium delectus tempora tempore molestias autem. Corporis consequuntur, inventore tenetur quidem commodi illo natus est, ab accusantium, obcaecati ipsam eius laborum quibusdam soluta aspernatur exercitationem molestiae harum deserunt consectetur! Reprehenderit est repellendus hic placeat, aspernatur quis quod enim nesciunt.</p>
        </div>
      </div>
     );
  }
}
 
export default OneFilmCard;