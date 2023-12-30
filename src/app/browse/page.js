import React from 'react'
import DefaultCard from '../components/DefaultCard'
import Row from '../components/Row'
import TrendRow from '../components/TrendRow'

import Banner from '../components/Banner';
import requests from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function browse() {
  return (
    <div className=''>
      <Navbar />
      <Banner />
      <div className='pl-8 md:pl-8 lg:pl-14 -mt-52 md:-mt-30 xl:-mt-52'>
        <Row rowId="1" title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row rowId="2" title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row rowId="3" title="Action" fetchUrl={requests.fetchAction} />
        <TrendRow rowId="4" title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
        <Row rowId="5" title="Horror" fetchUrl={requests.fetchHorror} />
        <Row rowId="6" title="Comedy" fetchUrl={requests.fetchComedy} />
      </div>
      <Footer />
    </div>
  )
}

export default browse