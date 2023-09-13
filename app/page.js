"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
export default function Home() {
  const [count, setCount] = useState(0)
//  useEffect(()=> {
//     if (count < 150 ) {
//         setTimeout(()=> {
//             setCount(count+1)
//         }, 100)
//     }
//     else {
//         setCount(150)
//     }
//  })

useEffect(() => {
  const lenis = new Lenis()

console.log(lenis);
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
})

useEffect(() => {
  const scrollPx = document.documentElement.scrollTop;
  console.log(scrollPx);
  window.addEventListener("scroll", scrollProgress)

  return () => window.removeEventListener('scroll', scrollProgress)
}, [])

const scrollProgress = () => {
  const scrollPx = document.documentElement.scrollTop + 2;
  const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollLen = Math.ceil(scrollPx / winHeightPx * 100)

  setCount(scrollLen)
 }

 
  return (
   <div>
     <div className="h-[400vh] ">
      <header className='top-0 z-0 sticky min-h-[100vh] flex flex-col items-center justify-center' >
      <Image
              src={`/sequences/ezgif-frame-${count.toString().padStart(3, '0')}.png`}
              alt="Image sequence"
              className="dark:invert"
              style={{objectFit: "fill"}}
              fill={true}
              priority
            />
      </header>
    </div>
      <div className='z-10'> 
      <h1>hello world</h1>

      </div>
   </div>
  )
}
