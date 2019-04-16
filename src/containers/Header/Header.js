import React, { Component } from 'react'

import './Header.scss'
import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
import NetflixLogo from '../../components/NetflixLogo/NetflixLogo'
import Search from '../../components/Search/Search'
import OneCardFilm from '../../components/OneFilmCard/OneFilmCard'
import SearchButton from '../../components/Search/SearchButton/SearchButton'
import {showingSearchFilterContent} from '../../redux/movies/movies.actions'
import {connect} from 'react-redux'

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let withButtonLogo = this.props.oneCardShowed ? <><NetflixLogo /><SearchButton onCustomSubmit={this.props.showSearchFilter} buttonClass='backToFilter' buttonText='Search' /></> : <NetflixLogo />;
    let oneCardHeaderContent = this.props.oneCardShowed ? 
    <OneCardFilm 
    cardImgPath={this.props.oneCardData.poster_path} 
    cardTitle={this.props.oneCardData.title}
    cardGenres={this.props.oneCardData.genres.join(', ')}
    cardReleaseDate={this.props.oneCardData.release_date.slice(0, 4)}
    cardRuntime={this.props.oneCardData.runtime}
    cardFilmOverview={this.props.oneCardData.overview} /> : <><FindYourMovie /><Search /></>

    return (
      <div className='header-image'>
        <div className='header'>
          <div className='logo-header'>
            {withButtonLogo}
          </div>
          {oneCardHeaderContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({oneCardShowed: state.movies.oneCardShowed, oneCardData: state.movies.oneCardData[0]})
const mapDispatchToProps = (dispatch) => ({
  showSearchFilter() {
    dispatch(showingSearchFilterContent());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
