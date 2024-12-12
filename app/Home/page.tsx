import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react'
import NavBar from "../components/NavBar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
    
      {/* Navigation 
      <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
        <div className="flex items-center space-x-6">
          <img 
            src="/placeholder.svg?height=48&width=48"
            alt="Starbucks"
            className="h-12 w-12"
          />
          <div className="hidden md:flex space-x-6 text-sm font-semibold">
            <button className="hover:text-green-700">MENU</button>
            <button className="hover:text-green-700">REWARDS</button>
            <button className="hover:text-green-700">GIFT CARDS</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-sm">
            <MapPin className="w-5 h-5 mr-2" />
            Find a store
          </button>
          <Button variant="outline" className="text-sm font-semibold">
            Sign in
          </Button>
          <Button variant="default" className="text-sm font-semibold">
            Join now
          </Button>
        </div>
      </nav>*/}

      {/* Hero Section (Original) */}
      <div className="mt-20 flex flex-col md:flex-row w-full">
        {/* Left Side - Winter Scene */}
        <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C6E8E9]/70 to-[#F0DBF0]/70"></div>
          <img 
            src="/Hero-cookie_1.jpg"
            alt="Winter scene illustration with cartoon characters"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 z-20">
            {/*text-[#1E3932]*/}
            <h1 className=" text-white text-4xl md:text-5xl font-bold tracking-tight">
              BENJIS® FOR LIFE
            </h1>
          </div>
        </div>

        {/* Right Side - Game Promo */}
        <div className="w-full md:w-1/2 bg-[#032B44] text-white  flex flex-col items-center justify-center text-center min-h-[400px]">
          <h2 className="text-5xl md:text-5xl font-bold mb-6 max-w-md">
            Our holiday game is here to play
          </h2>
          <p className="text-xl font-bold mb-8 max-w-md">
            Pop in for chances to win $20,000 in Delta Gift Cards or Starbucks for Life!*
          </p>
          <Button variant="outline" size="lg" className=" border-white hover:bg-white hover:text-[#D50032]">
            Order now
          </Button>
        </div>
      </div>

      {/* About Product Section */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1E3932]">Discover the Starbucks Experience</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-gray-700">
            At Starbucks, we go beyond just serving coffee. We're passionate about crafting the perfect cup, 
            sourcing the finest beans from around the world, and creating a warm, welcoming environment where 
            everyone can feel at home. Our commitment to quality, sustainability, and community is at the heart 
            of everything we do. Whether you're starting your day, taking a break, or meeting with friends, 
            we're here to make every moment special with our handcrafted beverages, delicious food options, 
            and exceptional service.
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-700">
            From our signature espresso drinks to our seasonal favorites, each Starbucks beverage is an 
            artful creation designed to delight your senses and uplift your day. Join us in our stores or 
            through our convenient mobile app to experience the magic of Starbucks, where every cup tells a story.
          </p>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1E3932]">Explore Our Menu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Maxi Muffin", image: "caramel-macchiato", src: "/Muffin.jpg" },
              { name: "Oreo cookie", image: "pumpkin-spice-latte", src: "/Cookie_1.jpg" },
            ].map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-center font-semibold text-[#1E3932]">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <img 
                src="/placeholder.svg?height=48&width=48"
                alt="Starbucks"
                className="h-12 w-12 mb-4"
              />
              <p className="text-sm text-gray-600">&copy; 2023 Starbucks Coffee Company. All rights reserved.</p>
            </div>
            <div className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Use</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">CA Supply Chain Act</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookie Preferences</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

