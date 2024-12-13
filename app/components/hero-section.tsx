import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative w-full flex items-center justify-center text-center">
      <h1 className="mt-10 bg-pink-200 px-8 py-1 max-w-sm rounded-sm">Good Mood Food</h1>
      <Link href="/collections/best-sellers">
       {/* <Image
          src="/Muffin_.webp"
          alt="Shop Our Best Sellers"
          width={1920}
          height={600}
          className="w-full object-cover"
          priority
        />*/}
        {/*<div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-lg">
            Jerseys
          </h1>
        </div>*/}
      </Link>
    </div>
  )
}

