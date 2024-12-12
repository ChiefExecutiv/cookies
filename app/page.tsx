import Link from "next/link";
import { cn } from "@/lib/utils";
import { Courier_Prime } from "next/font/google";
import HomeNav from "./components/HomeNav";
import Image from "next/image";

const courier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cn("flex flex-wrap max-w-screen min-h-screen items-center bg-white text-black scrollbar-none px-4 sm:px-6")}>
      <HomeNav />
      <main className="flex flex-col items-start mt-0 min-h-[calc(100vh-28rem)] relative w-full">
        <div className="w-full opacity-100">
          <div className="flex flex-col sm:flex-row flex-wrap content-start justify-center mx-auto min-h-[45rem] relative w-full max-w-screen-md">
            <div className="flex flex-col items-start w-full sm:w-1/2 px-4">
              <h1 className="text-xl font-bold mt-5 text-center sm:text-left">
                <span className="text-[#0095F6]">Thick, chocolatey, gooey.</span> I promise you will love them
              </h1>
              <ul className="list-none m-0 pl-0 flex-[0_0_100%] mt-6 space-y-4">
                <li className="text-[1.2rem] font-bold">
                  Buy 5 cookies, get 1{" "}
                  <Link href="/shop" className="border-b-2 border-pink-500">
                    maxi muffin chocolate intense
                  </Link>{" "}
                  free
                </li>
                <li className="text-[1.2rem]">
                  <Link
                    href="/shop"
                    className="no-underline cursor-pointer text-black font-bold px-[0.2rem] relative inline-block after:absolute after:left-0 
                      after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#0095F6] after:to-[#7F00FF] hover:after:h-1"
                  >
                    Shop / Cookies
                  </Link>
                </li>
                <li className="text-[1.2rem]">
                  <Link
                    href="/random"
                    className="no-underline cursor-pointer text-black font-bold px-[0.2rem] relative inline-block after:absolute after:left-0 
                      after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#0095F6] after:to-[#7F00FF] hover:after:h-1"
                  >
                    Random
                  </Link>
                </li>
                <li className="text-[1.2rem]">
                  <Link href="/about" className="no-underline cursor-pointer text-black font-bold px-[0.2rem]">
                    About
                  </Link>
                </li>
                <li className="text-[1.2rem]">
                  <a
                    href="https://wa.me/256779141801"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline cursor-pointer text-black font-bold px-[0.2rem]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="flex items-center mt-6 space-x-4">
                <li>
                  <a
                    href="https://wa.me/256779141801"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/whatsapp-glyph-black.svg" alt="WhatsApp Icon" height={20} width={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

