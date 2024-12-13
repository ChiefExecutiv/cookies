'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Cookie, CandyIcon as ChocolateBar, Candy, IceCream2 } from 'lucide-react'

const ingredients = [
  { name: 'Chocolate Chips', icon: ChocolateBar, color: 'bg-amber-700' },
  { name: 'Oreo Pieces', icon: Cookie, color: 'bg-gray-800' },
  { name: 'Brownie Bits', icon: Candy, color: 'bg-amber-900' },
  { name: 'M&Ms', icon: Candy, color: 'bg-rainbow' },
  { name: 'Sprinkles', icon: IceCream2, color: 'bg-rainbow' },
]

export function CustomCookieBuilder() {
  const [chocolateLevel, setChocolateLevel] = useState(50)
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-purple-600 sm:text-5xl">
        Build Your Dream Cookie!
      </h2>
      <div className="mt-8">
        <Card className="overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-indigo-700">Custom Cookie Creator</CardTitle>
            <CardDescription className="text-center text-indigo-500">Mix and match to create your perfect treat!</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="chocolate-level" className="text-lg font-semibold text-indigo-700">Chocolate Level</Label>
              <div className="flex items-center space-x-4">
                <Cookie className="h-6 w-6 text-amber-700" />
                <Slider
                  id="chocolate-level"
                  min={0}
                  max={100}
                  step={10}
                  value={[chocolateLevel]}
                  onValueChange={(value) => setChocolateLevel(value[0])}
                  className="flex-grow"
                />
                <Cookie className="h-8 w-8 text-amber-900" />
              </div>
              <p className="text-sm text-indigo-600 text-center">{chocolateLevel}% Chocolatey Goodness</p>
            </div>
            <div className="space-y-2">
              <Label className="text-lg font-semibold text-indigo-700">Extra Ingredients</Label>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {ingredients.map((ingredient) => (
                  <Button
                    key={ingredient.name}
                    variant={selectedIngredients.includes(ingredient.name) ? "default" : "outline"}
                    className={`h-auto py-2 ${selectedIngredients.includes(ingredient.name) ? ingredient.color : ''}`}
                    onClick={() => toggleIngredient(ingredient.name)}
                  >
                    <ingredient.icon className="mr-2 h-5 w-5" />
                    {ingredient.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
           {/* 
           <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 shadow-lg transform transition duration-200 hover:scale-105">
              Bake My Custom Cookie!
            </Button>*/} 
            <Button className="w-full bg-white text-blue-500 font-bold py-3 transform transition duration-200 hover:scale-105">
              Bake My Custom Cookie!
            </Button>

          </CardFooter>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-semibold text-indigo-600">Your Custom Cookie Preview</p>
       
      </div>
    </div>
  )
}


