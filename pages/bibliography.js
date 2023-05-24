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
        <iframe style={{ width: '800px', height: '1000px', border: '0'}} src="https://docs.google.com/document/d/e/2PACX-1vREZT6h5z_ZqaZfcp5uhjvstrZe_Xs4yTrtqamcVNlK7ElnkfUBLIw_nDBiJoMrnOXNFy03Jf5tg5zt/pub?embedded=true"></iframe>
      </main>
    </div>
  )
}
