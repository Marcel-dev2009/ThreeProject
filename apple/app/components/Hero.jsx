'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useState } from "react"
import Link from "next/link"
function Hero() {
  const useWidth = (threshold =  768) => {
    const [Narrow , setIsNarrow] = useState(false)
    useEffect(() => {
     function onResize(){
       setIsNarrow(window.innerWidth <= threshold)
     }
     window.addEventListener('resize' , onResize);
     onResize();
     return () => window.removeEventListener('resize' , onResize);
    } , [threshold])
    return Narrow
   }
   const Narrow = useWidth(760);
  useGSAP(() => {
  gsap.to("#hero", {
    y : 0,
    opacity: 1,
    duration : 2,
    ease: "power4.out",
    delay: 1.5
  }),
  gsap.to("#cta" ,  {
    y : 0,
    opacity: 1,
    duration : 2,
    ease : "power4.out",
    delay : 2,
    stagger: 0.2
  })
  }, [])
  return (
    <section className="w-full bg-black nav-height relative mt-10">
     <div className="h-auto w-full grid place-content-center transform translate-y-10">
        <p id="hero" className="hero-title">Iphone 15 pro</p>
        <div className={`md:w-10/12 w-9/12 transform ${Narrow ? "translate-x-10" : "translate-x-20"}`}>
         <video className="pointer-events-none mb-10" preload="none" autoPlay muted loop playsInline={true} src={Narrow ? "/assets/videos/smallHero.mp4" : "/assets/videos/hero.mp4"}>
         </video>
        </div>
     </div>
     <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
      <button className="px-10">
      <Link href="#highlights">Buy</Link>
      </button>
      <p className="pointer-events-none mt-10 text-lg">From $199/Month - $999/Year</p>
     </div>
    </section>
  )
}
export default Hero