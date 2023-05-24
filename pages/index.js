import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='Home'>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar page={''} />
      <h1 className='title' style={{ fontSize: '40px', margin: '15px 15%' }}>The Catalyst of Catastrophe: What Triggered the Assassination of Archduke Franz Ferdinand</h1>
      <main className='content'>
        <img src='https://assets.editorial.aetnd.com/uploads/2018/08/outbreak-of-world-war-i-gettyimages-506127736.jpg' style={{ width: '600px', height: 'auto'}} />
        <h2>What was the turning point that caused the assassination of Archduke Franz Ferdinand?</h2>
        <p style={{ margin: '0 10%', textAlign: 'center', fontSize: '18px'}}>While the assassination of Archduke Franz Ferdinand is often attributed to the Black Hand&apos;s skills, the true turning point leading to the event can be traced back to a series of mishaps and luck throughout the assassination plan that were able to somehow lead to a perfect moment for the Archduke&apos;s death. Therefore, the assassination of Archduke Franz Ferdinand can be credited more to a series of luck rather than the true skills and ability of the Black Hand.</p>
      </main>
      <Footer />
    </div>
  )
}
