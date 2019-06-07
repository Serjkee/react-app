import React from 'react'
import Header from '../../containers/Header/Header.hoc'
import SortingSection from '../../containers/SortingSection/SortingSection.hoc'
import Cards from '../../containers/Cards/Cards.hoc'
import Footer from '../../containers/Footer/Footer'


export default function Movies() {
  return (
    <>
      <Header />
        <><SortingSection />
        <Cards /></>
      <Footer />
    </>
  )
}
