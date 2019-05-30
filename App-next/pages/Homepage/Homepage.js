import React from 'react'
import Header from '../../src/containers/Header/Header.hoc'
import SortingSection from '../../src/containers/SortingSection/SortingSection.hoc'
import Cards from '../../src/containers/Cards/Cards.hoc'
import Footer from '../../src/containers/Footer/Footer'


export default function Homepage() {
  return (
    <>
      <Header />
        <><SortingSection />
        <Cards /></>
      <Footer />
    </>
  )
}
