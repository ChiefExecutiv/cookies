import Link from "next/link"
import { cn } from "@/lib/utils"
import { Courier_Prime } from 'next/font/google'
import HomeNav from "./components/HomeNav"
import Image from "next/image"


const courier = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={cn("flex flex-wrap max-w-screen min-h-screen items-center bg-white text-black scrollbar-none")}>

      <HomeNav />
      
      <main className="flex items-start mt-0 min-h-[calc(100vh-28rem)] relative w-full">
        <div className="w-full opacity-100">
          <div className="flex flex-none flex-wrap content-start justify-center mx-auto min-h-[45rem] relative w-full">
            <div className="flex flex-wrap relative w-full items-start flex-[0_0_50%] px-4">
            {/*<h1 className="border-0 clip-[rect(0,0,0,0)] h-[1px] m-[-1px]  p-0 absolute  whitespace-nowrap w-[1px]">
                  Shop Cookies
              </h1>*/}

              <ul className="list-none m-0 pl-0 flex-[0_0_100%] mt-24">
                
             {/* <a href="#" className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">Ben</a>*/}
              
             <h1 className='text-xl font-bold mt-5'> <span className='text-[#0095F6]'>Thick, chocolatey, gooey.</span> I promise you will love them</h1>

             <li className="list-none text-[1.2rem] mt-4 relative whitespace-nowrap">
                  <span className="no-underline cursor-pointer text-black font-bold px-[0.2rem]">
                    <h1>
                      Buy 5 cookies, get 1 <Link href="/shop" className="border-b-2 border-pink-500">maxi muffin chocolate intense</Link> free
                    </h1>
                  </span>
              </li>

              
              <li className="list-none text-[1.2rem] mt-0 relative whitespace-nowrap">
                  <Link href="/shop" className="no-underline cursor-pointer text-black font-bold px-[0.2rem] 
                  relative inline-block text-black after:absolute after:left-0 
                      after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r 
                      after:from-[#0095F6] after:to-[#7F00FF] hover:after:h-1
                  ">
                    Shop/  Cookies
                  </Link>
                </li>

                {/*bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom
        
                      <a href="#"
                      className='relative inline-block text-black after:absolute after:left-0 
                      after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r 
                      after:from-[#0095F6] after:to-[#7F00FF] hover:after:h-1'
                      >Hello from the</a>

                    relative inline-block text-black after:absolute after:left-0 after:bottom-0 after:w-full
                    after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 hover:after:h-1
                */}

                <li className="list-none text-[1.2rem] mt-4 relative whitespace-nowrap">
                  <Link href="/random" className="no-underline cursor-pointer text-black font-bold px-[0.2rem] 
                  relative inline-block text-black after:absolute after:left-0 
                      after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r 
                      after:from-[#0095F6] after:to-[#7F00FF] hover:after:h-1
                  ">
                    random
                  </Link>
                </li>

                <li className="list-none text-[1.2rem] mt-4 relative whitespace-nowrap">
                  <Link href="/about" className="no-underline cursor-pointer text-black font-bold px-[0.2rem]">
                    about
                  </Link>
                </li>

                
                <li className="list-none text-[1.2rem] mt-4 relative whitespace-nowrap">
                  <a href="https://wa.me/0779141801" target="_blank" className="no-underline cursor-pointer text-black font-bold px-[0.2rem]">
                      contact
                  </a>
                </li>


              </ul>

              <ul className="flex items-center flex-[0_0_100%] mt-6 relative list-none m-0 pl-0">
                <li className="list-none text-[1.2rem] mt-0 relative whitespace-nowrap">
                  <a href="https://wa.me/0779141801" target="_blank">
                    <Image 
                      src="/whatsapp-glyph-black.svg"
                      alt="Whatsapp Icon"
                      height={20}
                      width={20}
                      />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
