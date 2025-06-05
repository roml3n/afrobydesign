import Link from 'next/link'
import React from 'react'

const Button = ({ href, className, label }: { href: string, className?: string, label: string }) => {
  return (
    <Link href={href} className={`${className} bg-gray-10 text-gray-0 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-sm md:text-base`}>
        {label}
    </Link>
  )
}

export default Button