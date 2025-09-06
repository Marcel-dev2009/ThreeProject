'use client'
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import { PlayCircle } from "lucide-react";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
const VideoCarousel = dynamic(() => import("./VideoCarousel"), {ssr : false})
function Highlight() {
  useGSAP(() => {
   gsap.to("#title" , {
    y: 0,
    opacity: 1,
    duration : 1,
    ease: "power4.out",
    delay: 2,
    stagger: 0.2
   }),
   gsap.to("#link" , {
    opacity : 1,
    ease: "power1.inOut",
    y : 0,
    duration : 1,
    delay : 1,
    stagger : 0.25,
   })
  }, [])
  return (
 <section id="highlights" className="w-screen h-full common-padding bg-zinc-900 overflow-hidden transform translate-y-22 mb-10">
   <div className="screen-max-width">
    <div className="mb-12 w-full items-end justify-between md:flex">
      <h1 id="title" className="section-heading">Get the highlights</h1>
      <div className="flex flex-wrap items-end gap-2">
       <Link id="link" href="#" className="flex gap-2 border-b border-b-blue-800 text-blue-800 opacity-0 translate-y-10">
       Watch the film <PlayCircle size={18} className="translate-y-0.5"/>
       </Link> 
       <Link id="link" href="#" className="flex gap-2 border-b border-b-blue-800 text-blue-800 opacity-0 translate-y-10">
       Watch the event <ArrowRight size={18} className="translate-y-0.5"/>
       </Link>
      </div>
    </div>

    <VideoCarousel/>
   </div>
 </section>
  )
}
export default Highlight