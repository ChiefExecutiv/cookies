import Image from "next/image"
import Link from "next/link"
import NavBar from "../components/NavBar"
import { X } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Cookie Notice */}
      <div className="fixed top-0 left-0 right-0 bg-zinc-900 text-white text-xs p-2 z-50 flex justify-between items-center">
        <p className="text-center flex-1">
          This site uses cookies to improve your experience. By continuing to browse, you agree to the use of cookies.{' '}
          <Link href="/privacy" className="underline">
            Read the Privacy Policy here
          </Link>.
        </p>
        <button className="p-1">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 pt-16">
        {/* Logo */}

        <NavBar title="ABOUT"/>


        {/* About Content */}
        <div className="w-full max-w-[660px] mt-20 mx-auto font-mono leading-[1.6] space-y-6">
          <h1 className="mb-4">About</h1>
          <p>
              I got bored of food at home, so I decided to look for recipes. Overtime I 
              I discovered these amazing things called "Chocolate Chunk Cookies". It took 
              a dozen tries but I finally found a near perfect recipe.
          </p>
          <p>
            I decided to share the products of my endavours, beautifully crafted and wonderfully made (with love).
          </p>

        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="py-8">
        <nav className="flex justify-center space-x-8 text-xs">
          <Link href="/">Full site</Link>          
        </nav>
      </footer>
    </div>
  )
}

