import Link from 'next/link'
import React from 'react'
import { HomeIcon } from '@primer/octicons-react'
import ActiveLink from '../active-link/ActiveLink'

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' }
]

export default async function Navbar() {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href={'/'} className='flex items-center gap-1'>
        <HomeIcon />
        <span>Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {
            navItems.map((item) => <ActiveLink text={item.text} path={item.path} key={item.path} />)
        }

    </nav>
  )
}
