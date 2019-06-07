import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'


import './Header.scss'
// import FindYourMovie from '../../components/Header/FindYourMovie/FindYourMovie'
// import NetflixLogo from '../../components/NetflixLogo/NetflixLogo'
import Search from '../../components/Search/Search.hoc'
import OneCardFilm from '../../components/OneFilmCard/OneFilmCard'
import SearchButton from '../../components/Search/SearchButton/SearchButton'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      find: null,
      logo: null
    }
  }

  componentDidMount() {
    import('../../components/Header/FindYourMovie/FindYourMovie').then((mod) => this.setState({find: mod.default()}));
    import('../../components/NetflixLogo/NetflixLogo').then((mod) => this.setState({logo: mod.default()}));
  }
  

  render() {
    let header, headerContent;

    if( this.props.location.pathname === '/' || this.props.location.pathname === '/movies') {
      header = this.state.logo;
      headerContent = <>{this.state.find}<Search /></>;
    } else if ( this.props.match.params.id ) {
      let cardToShow = this.props.apiData.filter( card => card.id === Number(this.props.match.params.id))[0];

      header = <>{this.state.logo}<SearchButton buttonClass='backToFilter' ><Link to={{pathname: `/movies`, search: `?search=${this.props.searchValue}&searchBy=${this.props.searchBy}&sortBy=${this.props.sortBy}&sortOrder=desc&limit=20`}}>Search</Link></SearchButton></>;
      headerContent = <OneCardFilm 
        cardImgPath={cardToShow.poster_path} 
        cardTitle={cardToShow.title}
        cardGenres={cardToShow.genres.join(', ')}
        cardReleaseDate={cardToShow.release_date.slice(0, 4)}
        cardRuntime={cardToShow.runtime}
        cardFilmOverview={cardToShow.overview} />
    }

    return (
      <div className='header-image'>
        <div className='header'>
          <div className='logo-header'>
            {header}
          </div>
          {headerContent}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
