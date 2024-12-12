import Image from "next/image"
import Link from "next/link"
import { X, ChevronRight } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
})

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Cookie Notice 
      <Alert className="rounded-none bg-zinc-900 text-white border-none">
        <AlertDescription className="flex items-center justify-between text-[11px] max-w-[1400px] mx-auto w-full px-4">
          <span>This site uses cookies to improve your experience. By continuing to browse, you agree to the use of cookies. Read the Privacy Policy here.</span>
          <X className="h-3 w-3 cursor-pointer" />
        </AlertDescription>
      </Alert>*/}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="py-8">
          <Image
            src="/placeholder.svg?height=50&width=150"
            alt="Supreme Logo"
            width={150}
            height={30}
            className="w-auto h-[30px]"
            priority
          />
        </div>

        {/* Timestamp */}
        <div className={cn("text-[11px] mb-8", courier.className)}>
          12/06/2024 04:08pm NYC
        </div>

        {/* Article Content */}
        <article className="w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Image Section */}
            <div className="relative">
              <Image
                src="/cookie.jpg"
                alt="Supreme/Dickies Collection"
                width={600}
                height={800}
                className="w-full"
              />
              <div className={cn("absolute bottom-4 right-4 text-[11px] text-white flex items-center gap-1", courier.className)}>
                1 of 65 <ChevronRight className="h-3 w-3" />
              </div>
            </div>

            {/* Text Content */}
            <div className={cn("space-y-4", courier.className)}>
              <div className="text-[11px]">12/03/2024</div>
              <h1 className="text-[11px]">Benjamin®/Elon Tusk®</h1>
              <p className="text-[11px] whitespace-pre-line">
                Benjamin has worked with Elon Tusk® on a new collection for Fall 2024. The collection consists of a Hooded Leather Work Jacket, Hooded Work Jacket, L/S Polo, L/S Top, Hooded Sweatshirt, Flannel Lined Overall and Flannel Lined Cargo Pant.
              </p>
              <p className="text-[11px]">Available December 5th.</p>
              <p className="text-[11px]">Available in Asia December 7th.</p>
            </div>
          </div>

          {/* Archive Link */}
          <div className={cn("mb-20", courier.className)}>
            <Link href="/archive" className="text-[11px] hover:opacity-50 transition-opacity">
              archive
            </Link>
          </div>
        </article>

        {/* Navigation */}
        <nav className={cn("py-8 flex items-center justify-center gap-8 text-[11px] fixed bottom-0 w-full bg-white", courier.className)}>
          <Link href="/shop" className="hover:opacity-50 transition-opacity">
            shop
          </Link>
          <Link href="/preview" className="hover:opacity-50 transition-opacity">
            fall/winter 2024 preview
          </Link>
          <Link href="/lookbook" className="hover:opacity-50 transition-opacity">
            lookbook
          </Link>
          <Link href="/news" className="font-bold">
            news
          </Link>
        </nav>
      </main>
    </div>
  )
}

