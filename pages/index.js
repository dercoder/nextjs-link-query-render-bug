import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => {
  console.log('RENDER HOME PAGE')

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>Home Page</div>
    </div>
  )
}

export default Home
