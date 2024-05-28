import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="font-serif fixed top-8 w-screen text-2xl text-white z-20 flex justify-center">
      <ul className="flex gap-10">
        <Link href="/info" className="hover:scale-110 duration-300">
          About Me
        </Link>
        <Link href="/projects" className="hover:scale-110 duration-300">
          Projects
        </Link>
        <Link href="/blog" className="hover:scale-110 duration-300">
          Blog
        </Link>
        <Link href="/contacts" className="hover:scale-110 duration-300">
          Contacts
        </Link>
      </ul>
    </nav>
  )
}
