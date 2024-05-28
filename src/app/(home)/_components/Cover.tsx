import { Protest_Riot, Roboto_Slab } from 'next/font/google'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: '400',
})

const protest = Protest_Riot({
  subsets: ['latin'],
  weight: '400',
})

export default function Cover() {
  return (
    <div className="relative flex justify-evenly w-screen h-screen">
      <section
        className={`w-fit text-white z-10 flex flex-col justify-center gap-4 ${robotoSlab.className} animate-fadeInUp`}
      >
        <p className="text-6xl text-nowrap">Frontend Developer</p>
        <p className={`w-full flex gap-4 text-6xl ${protest.className}`}>
          <span className="flex-grow flex flex-col gap-2 justify-center">
            <span className="bg-red-600 h-1"></span>
            <span className="bg-red-600 h-1"></span>
            <span className="bg-red-600 h-1"></span>
            <span className="bg-red-600 h-1"></span>
          </span>
          Photographer
        </p>
      </section>
    </div>
  )
}
