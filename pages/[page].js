import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import data from '@/data.json' assert {type: 'json'};
import Navbar from '@/components/Navbar';

export async function getServerSideProps() {
  const json = data
  return {
    props: {
      json
    }
  }
}

export default function Page({ json }) {
  const router = useRouter()
  const { page } = router.query
  const title = json[page][0].title

  return (
    <div className='Page'>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <Navbar links={['Yessir', 'fjfhfhfh']} />
      <main>
        <div id='1' className='article'>
          <h3>{json[page][0].question1}</h3>
          <p>{json[page][0].answer1}</p>
        </div>
        <div id='2' className='article'>
          <h3>{json[page][0].question2}</h3>
          <p>{json[page][0].answer2}</p>
        </div>
        <div id='3' className='article'>
          <h3>{json[page][0].question3}</h3>
          <p>{json[page][0].answer3}</p>
        </div>
      </main>
    </div>
  )
}
