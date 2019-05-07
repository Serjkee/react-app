import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


import './Header.scss'
import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
import NetflixLogo from '../../components/NetflixLogo/NetflixLogo'
import Search from '../../components/Search/Search.hoc'
import OneCardFilm from '../../components/OneFilmCard/OneFilmCard'
import SearchButton from '../../components/Search/SearchButton/SearchButton'

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let withButtonLogo = <><NetflixLogo /><SearchButton onCustomSubmit={this.props.showSearchFilter} buttonClass='backToFilter' ><Link to='/' >Search</Link></ SearchButton></>;

    let withoutMovie = (props) => {
      return (<div className='header'>
      <div className='logo-header'>
        <NetflixLogo />
      </div>
        <><FindYourMovie /><Search /></>
      </div>)
    }

    let withMovie = (props) => {
      let oneCardData = this.props.apiData.filter(arrData => Number(props.match.params.id) === arrData.id )[0];
      let oneCardHeaderContent = <OneCardFilm 
        cardImgPath={oneCardData.poster_path} 
        cardTitle={oneCardData.title}
        cardGenres={oneCardData.genres.join(', ')}
        cardReleaseDate={oneCardData.release_date.slice(0, 4)}
        cardRuntime={oneCardData.runtime}
        cardFilmOverview={oneCardData.overview} /> 

      return (<div className='header'>
      <div className='logo-header'>
        {withButtonLogo}
      </div>
      {oneCardHeaderContent}
      </div>)
    }

    return (
      <div className='header-image'>
        <Route exact path={['/', '/movies']} component={withoutMovie} />
        <Route path='/movies/:id' component={withMovie} />
      </div>
    )
  }
}

export default Header
