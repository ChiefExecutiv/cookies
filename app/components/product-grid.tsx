import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Together T-Shirt",
    href: "#",
    imageSrc: "/cookie_french_2.jpg",
    imageAlt: "White t-shirt with graphic print",
    price: "$35",
  },
  {
    id: 2,
    name: "Luigi Hearts T-Shirt",
    href: "#",
    imageSrc: "/peach-frizz-2.jpg",
    imageAlt: "Black t-shirt with hearts design",
    price: "$35",
  },
  {
    id: 3,
    name: "Luigi Green T-Shirt",
    href: "#",
    imageSrc: "/maxi-blue-muffin.jpg",
    imageAlt: "Black t-shirt with green design",
    price: "$35",
  }
]

export function ProductGrid() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        {products.map((product) => (
          <Link key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden ">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

