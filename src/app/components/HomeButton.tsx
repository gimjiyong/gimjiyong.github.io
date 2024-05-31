import { Fredericka_the_Great } from 'next/font/google'
import Link from 'next/link'

const frederika = Fredericka_the_Great({
  subsets: ['latin'],
  weight: '400',
})

export default function HomeButton() {
  return (
    <Link
      className={`text-white text-2xl fixed top-8 left-8 z-20 ${frederika.className} text-nowrap`}
      href={'/'}
    >
      Kim Ji Yong
    </Link>
  )
}
