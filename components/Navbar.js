import React from 'react'
import Link from 'next/link'

export default function Navbar(props) {
  return (
    <div className='nav-bar'>
      {props.links.map((link) => <Link className='nav-link' href={'/' + link}>{link}</Link>)}
    </div>
  )
}
