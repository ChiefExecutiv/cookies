"use client"

import * as React from "react"
import Link from "next/link"
import {  Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navItems = [

  {
    title: "Random",
    items: [
      { title: "Watch Random video", href: "/random" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "Discover the story", href: "/about" },
    ],
  },
]

export function Navigation() {
  return (
    <header className="py-4 px-6 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">

          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="font-normal text-base">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {subItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-xl font-bold whitespace-nowrap" style={{ fontFamily: 'Arial' }}>
         B...
        </Link>

        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h2 className="font-medium text-lg">{item.title}</h2>
                    <ul className="space-y-2 pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <Link href={subItem.href} className="text-sm hover:underline">
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

