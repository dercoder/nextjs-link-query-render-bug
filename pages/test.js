import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Test = () => {
  console.log('RENDER TEST PAGE')

  return (
    <div>
      <Head>
        <title>Test Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>Test Page</div>
    </div>
  )
}

export default Test
