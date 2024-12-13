import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Chocolate Chunk Cookie",
    link: "https://wa.me/256779141801?text=Cookies%20please",
    price: "UGX 1000",
    image: "/cookie_french_2.jpg",
  },
  {
    id: 2,
    name: "Oreo Cookie Crumble",
    link: "https://wa.me/256779141801?text=Oreo-Cookies%20please",
    price: "UGX 1000",
    image: "/peach-frizz-2.jpg",
  },
  {
    id: 3,
    link: "https://wa.me/256779141801?text=Muffins%20please",
    name: "Maxi muffin chocolate intense",
    price: "UGX 3000",
    image: "/maxi-blue-muffin.jpg",
  },
]

export function ProductGrid() {
  return (
    <div className="px-6">
      <h1 className="text-3xl text-center font-extrabold tracking-wide text-black mt-10 mb-12">Explore The Originals</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={product.link} key={product.id} className="group">
            <div className="space-y-4">
              <div className="aspect-[1/1.2] relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h2 className="font-medium">{product.name}</h2>
                <p className="font-mono">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-12">
        <a href="https://wa.me/256779141801" target="_blank" rel="noopener noreferrer">
          <Button  size="lg" className="px-8 rounded-none">
            Shop on Whatsapp
          </Button>
        </a>
      </div>
    </div>
  )
}

