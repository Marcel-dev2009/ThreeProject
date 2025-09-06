'use client'
import { useEffect, useState } from "react"
import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants/index"
import { Search  } from "lucide-react"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
function Navbar() {
    /* const win = typeof window !== "undefined" ? window   : undefined;
    const useWidth = (threshold =  768) => {
      const [Narrow , setIsNarrow] = useState(win ? win.innerWidth <= threshold : false)
      useEffect(() => {
       function onResize(){
         setIsNarrow(window.innerWidth<= threshold)
       }
       window.addEventListener('resize' , onResize);
       onResize();
       return () => window.removeEventListener('resize' , onResize);
      } , [threshold])
      return Narrow
     }
     const Narrow = useWidth(760); */
  return (
    <>
     <header className="w-full py-5 sm:px-10 px-5 "> {/* flex justify-between items-center */}
         <nav className="flex w-full max-w-[1120px] justify-between items-center">
          <Image src={appleImg} alt="Apple" width={14} height={18} loading="lazy"/>
         
          <div className="text-white flex flex-1 justify-center  max-sm:hidden transform translate-x-26 font-bold 
          border w-fit py-4 rounded-lg border-white/10">
           {navLists.map((nav , i) => (
              <div key={i} className="px-5 text-md cursor-pointer text-gray-300 hover:text-white transition-all">{nav}</div>      
           ))}     
          </div>
           <div className={`flex gap-7 max-sm:justify-end max-sm:flex-1 transform`}>
           <Search/>
           <ShoppingBag/>
           </div>
          </nav> 
     </header>
    </>
  )
}
export default Navbar