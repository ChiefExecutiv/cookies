"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from 'lucide-react'
import NavBar from "../components/NavBar"

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Cookie Notice 
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
      </div>*/}
      <NavBar title="Random" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-12 pb-4">
        {/* Video Container */}
        <div className="w-full max-w-[700px]">
          <div className="relative pt-[66.25%] bg-black">
          <iframe
  className="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/is1dBR6hprE"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>

          {/* Video Navigation */}
          <div className="flex justify-between mt-1">
            <Link 
              href="/random" 
              className="bg-black text-white px-4 py-1.5 text-[11px] uppercase tracking-wide font-medium hover:bg-zinc-800"
            >
              Random videos on here occassionally
            </Link>
          </div>
        </div>

        {/* Video Info */}
        <div className="mt-6 flex items-center gap-4">
          <div className="w-[100px]">

          </div>
          <p className="text-sm font-mono">
            
          </p>
        </div>
      </main>

      <style jsx global>{`
        video::-webkit-media-controls-timeline {
          background-color: black;
        }
        video::-webkit-media-controls-panel {
          background-color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  )
}

