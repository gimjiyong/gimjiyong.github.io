import Major from "@/app/(home)/_components/Major";

export default function Home() {
  return (
    <main className="font-serif">
      <div className="h-screen w-screen flex">
        <Major major="WEB Developer" bgImg="dev-desk" link="dev" />
        <Major major="Photographer" bgImg="cam-desk" link="photo" />
      </div>
    </main>
  );
}
