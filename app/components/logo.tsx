import React from 'react'
import Link from 'next/link'

interface ThisComponentProps {
  className: string;
  title: string;
}

const BenjaminLogo: React.FC<ThisComponentProps> = ({ className, title }) => {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <h1 className="bg-[#0095f6] px-1 py-0.5 text-2xl font-bold text-white transition-colors md:text-3xl lg:text-4xl">
        {title}
      </h1>
    </Link>
  )
}

export default BenjaminLogo