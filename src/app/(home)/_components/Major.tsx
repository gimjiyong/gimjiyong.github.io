import Link from "next/link";

interface MajorProps {
  major: string;
  bgImg: string;
  link: string;
}

export default function Major({ major, bgImg, link }: MajorProps) {
  return (
    <Link
      href={`/${link}`}
      className="relative flex justify-center items-center group w-1/2"
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(/images/${bgImg}.jpg)` }}
      />
      <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-80 duration-500" />
      <div className="text-6xl text-white z-10 animate-fadeIn group-hover:scale-110 duration-500">
        {major}
      </div>
    </Link>
  );
}
