import React from 'react'
import Layout from '../../components/layout/Layout'
import IntroSection from './sections/introSection/IntroSection'
import SshopByCategory from './sections/shopByCategory/SshopByCategory'
import LatestNews from './sections/latestNews/LatestNews'
import FreeShipping from './sections/freeShipping/FreeShipping'
import Products from './sections/productsSection/Products'

const Home = () => {
  return (
    <Layout>
        <IntroSection/>
        <SshopByCategory/>
        <Products/>
        <LatestNews/>
        <FreeShipping/>
    </Layout>
  )
}

export default Home
