import { Rocket } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="bg-black px-4 py-3 text-center text-sm font-medium text-white">
      <p className="flex items-center justify-center gap-2">
        BUY 5 COOKIES GET A MAXI MUFFIN FREE
        <Rocket className="h-4 w-4" />
      </p>
    </div>
  )
}

