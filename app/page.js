"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Home() {
  const [count, setCount] = useState(2)
 useEffect(()=> {
    if (count < 150 ) {
        setTimeout(()=> {
            setCount(count+1)
        }, 100)
    }
    else {
        setCount(150)
    }
 })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full h-full">
      <div >
      <Image
              src={`/sequences/ezgif-frame-${count.toString().padStart(3, '0')}.png`}
              alt="Vercel Logo"
              className="dark:invert"
              fill={true}
              priority
            />
      </div>
    </main>
  )
}
