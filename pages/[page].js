import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import data from '@/data.json' assert {type: 'json'};
import Navbar from '@/components/Navbar';

export async function getServerSideProps(context) {
  const { page } = context.query
  const json = data[page][0]
  return {
    props: {
      json
    }
  }
}

export default function Page({ json }) {
  const router = useRouter()
  const { page } = router.query
  const title = json.title

  return (
    <div className='Page'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar page={page} />
      <h1>{title}</h1>
      <main className='content'>
        <div id='1' className='article'>
          <h3>{json.question1}</h3>
          <div>
            <p>{json.answer1}</p>
            <span>
              <img src={json.image1} alt='sdasd' />
              <p style={{ fontSize: '12px'}}>{json.caption1}</p>
            </span>
          </div>
        </div>
        <div id='2' className='article'>
          <h3>{json.question2}</h3>
          <div>
            <span>
              <img src={json.image2} alt='sdasd' />
              <p style={{ fontSize: '12px'}}>{json.caption2}</p>
            </span>
            <p>{json.answer2}</p>
          </div>
        </div>
        <div id='3' className='article'>
          <h3>{json.question3}</h3>
          <div>
            <p>{json.answer3}</p>
            <span>
              <img src={json.image3} alt='sdasd' />
              <p style={{ fontSize: '12px'}}>{json.caption3}</p>
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
