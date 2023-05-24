import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

export default function Bibliography() {
  return (
    <div className='Bibliography'>
      <Head>
        <title>Bibliography</title>
      </Head>
      <Navbar page={'bibliography'} />
      <h1>Bibliography</h1>
      <main className='content'>
        <iframe src='' />
      </main>
    </div>
  )
}
