import React from 'react'

export default function Navbar(props) {
  const links = [
    {
      route: '',
      title: 'Home'
    },
    {
      route: 'event',
      title: 'Event'
    },
    {
      route: 'context',
      title: 'Context'
    },
    {
      route: 'longueduree',
      title: 'Longue Duree'
    },
    {
      route: 'triggering',
      title: 'Triggering Event'
    },
    {
      route: 'impact',
      title: 'Immediate Impact'
    },
    {
      route: 'significance',
      title: 'Enduring Significance'
    },
    {
      route: 'bibliography',
      title: 'Bibliography'
    },
  ]

  return (
    <div id='nav-bar'>
      {links.map((link) => {
        let selected = ''
        if (props.page === link.route) {
          selected = 'selected'
        }
        return <a key={link.route} className={'nav-link ' + selected} href={'/' + link.route}>{link.title}</a>
      })}
    </div>
  )
}
