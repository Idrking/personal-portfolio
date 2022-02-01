import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import styled from "styled-components";

export default function BirdsWrapper({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0908,
          color1: 0xdb0054,
          color2: 0x00e8fc,
          birdSize: 1.9,
          wingSpan: 31.0,
          speedLimit: 3.0,
          separation: 20.0,
          alignment: 4.0,
          cohesion: 100.0,
          quantity: 3.0,
          colorMode: "lerp",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <Wrapper ref={myRef}>{children}</Wrapper>;
}

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

// backgroundColor: 0xf4faff,
// color1: 0x35ce8d,
// color2: 0x982649,
