import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import BIRDS from "vanta/dist/vanta.birds.min"

export default function Home() {
  
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
  return (
   <>
   {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></Script> */}



   <div ref={myRef} style={{height: "100vh", width: "100vw"}}>
    
   </div>
   </>
  )
}
