import Image from "next/image"
import Link from "next/link"
import NavBar from "../components/NavBar"

export default function PreviewGrid() {
  // Sample preview items - in a real app this would come from a database
  const previewItems = [
    {
      id: 1,
      image: "/french-pink-cookie.jpg",
      title: "Chocolate chunk cookie",
      href: "https://wa.me/256779141801?text=Cookies%20please",
      category: "UGX 1000"
    },
    {
      id: 2,
      image: "/peach-frizz-2.jpg",
      title: "Oreo crumb Cookie",
      href: "https://wa.me/256779141801?text=Oreo-Cookies%20please",
      category: "UGX 1000"
    },
    {
      id: 3,
      image: "/maxi-blue-muffin.jpg",
      title: "maxi muffin chocolate intense",
      href: "https://wa.me/256779141801?text=Muffins%20please",
      category: "UGX 3000"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Notice 
      <div className="fixed top-0 left-0 right-0 bg-zinc-900 text-white text-xs p-2 z-50">
        <p className="text-center">
          This site uses cookies to improve your experience. By continuing to browse, you agree to the use of cookies.{' '}
          <Link href="/privacy" className="underline">
            Read the Privacy Policy here
          </Link>.
        </p>
      </div>*/}

      <NavBar title="SHOP"/>

      {/* Preview Grid */}
      <main className="max-w-[1200px] mx-auto px-4">
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {previewItems.map((item) => (
            <a href={item.href} key={item.id} target="_blank" className="flex flex-col">
              <div className="aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-2">
                <p className="font-bold">{item.title}</p>
                <p className=" text-gray-600">{item.category}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 mt-8 border-t">
        <nav className="flex justify-center space-x-8 text-sm">
          <Link href="/" className="hover:underline">full site</Link>
          <Link href="https://wa.me/256779141801?text=Hello%20there" className="hover:underline">contact</Link>
        </nav>
      </footer>
    </div>
  )
}

