'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='font-serif fixed top-8 w-screen text-2xl text-white z-20 flex justify-center'>
      <ul className='hidden md:flex gap-10'>
        <li>
          <Link
            href='/info'
            className='hover:scale-110 duration-300'
            onClick={handleLinkClick}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className='hover:scale-110 duration-300'
            onClick={handleLinkClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/blog'
            className='hover:scale-110 duration-300'
            onClick={handleLinkClick}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href='/contacts'
            className='hover:scale-110 duration-300'
            onClick={handleLinkClick}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <div className='md:hidden flex items-center z-20'>
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className='w-6 h-6 text-white fixed right-8' />
          ) : (
            <FaBars className='w-6 h-6 text-white fixed right-8' />
          )}
        </button>
      </div>
      <div
        className={`md:hidden fixed pt-28 top-0 left-0 h-screen w-full bg-black bg-opacity-65 flex flex-col gap-12 items-center text-nowrap transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link
          href='/info'
          className='block text-gray-300 hover:text-white'
          onClick={handleLinkClick}
        >
          About Me
        </Link>
        <Link
          href='/projects'
          className='block text-gray-300 hover:text-white'
          onClick={handleLinkClick}
        >
          Projects
        </Link>
        <Link
          href='/blog'
          className='block text-gray-300 hover:text-white'
          onClick={handleLinkClick}
        >
          Blog
        </Link>
        <Link
          href='/contacts'
          className='block text-gray-300 hover:text-white'
          onClick={handleLinkClick}
        >
          Contacts
        </Link>
      </div>
    </nav>
  )
}
