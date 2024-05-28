import Cover from '@/app/(home)/_components/Cover'

export default function Home() {
  return (
    <main
      className="relative bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(/images/dev-desk.jpg)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Cover />
    </main>
  )
}
