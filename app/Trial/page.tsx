export default function Hero() {
  return (
    <section className="w-full">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center space-x-6">
          <img 
            src="/placeholder.svg?height=50&width=50" 
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
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Find a store
          </button>
          <button className="text-sm font-semibold px-4 py-1 rounded-full border border-black hover:bg-gray-100">
            Sign in
          </button>
          <button className="text-sm font-semibold px-4 py-1 rounded-full bg-black text-white hover:bg-gray-800">
            Join now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Side - Winter Scene */}
        <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden">
        {/*z-10 - removed from div before image*/}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C6E8E9]/70 to-[#F0DBF0]/70 "></div>
          <img 
            src="/coffee.jpg"
            alt="Winter scene illustration with cartoon characters"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 z-20">
            <h1 className="text-[#1E3932] text-4xl md:text-5xl font-bold tracking-tight">
              STARBUCKS® FOR LIFE
            </h1>
          </div>
        </div>

        {/* Right Side - Game Promo */}
        <div className="w-full md:w-1/2 bg-[#D50032] text-white p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-md">
            Our holiday game is here to play
          </h2>
          <p className="text-lg mb-8 max-w-md">
            Pop in for chances to win $20,000 in Delta Gift Cards or Starbucks for Life!*
          </p>
          <button className="bg-transparent border-2 border-white text-white px-6 py-1.5 rounded-full font-semibold hover:bg-white hover:text-[#D50032] transition-colors">
            Play now
          </button>
        </div>
      </div>
    </section>
  )
}

