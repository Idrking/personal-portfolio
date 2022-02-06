import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const calculateRotation = (e, pos, stateFunc) => {
  const radians = Math.atan2(e.clientX - pos.centerX, e.clientY - pos.centerY);
  const degree = radians * (180 / Math.PI) * -1 + 180;
  stateFunc(degree);
};

const getEyePosition = (uniqueID) => {
  if (typeof window !== "undefined") {
    const eyeball = document.getElementById(`eyeball${uniqueID}`);
    const eyeballBox = eyeball.getBoundingClientRect();
    return {
      centerX: eyeballBox.left + eyeballBox.width / 2 - window.scrollX,
      centerY: eyeballBox.top + eyeballBox.height / 2 - window.scrollY,
    };
  }
};

const EyeBall = ({
  animations,
  animationStart,
  size,
  position,
  initialcolor,
  uniqueID,
}) => {
  const [rotation, setRotation] = useState(0);
  const [eyePosition, setEyePosition] = useState({ centerX: 0, centerY: 0 });

  useEffect(() => {
    setEyePosition(getEyePosition(uniqueID));
  }, [uniqueID]);

  useEffect(() => {
    const eyeRotator = (e) => {
      calculateRotation(e, eyePosition, setRotation);
    };

    document.addEventListener("mousemove", eyeRotator);

    return () => {
      document.removeEventListener("mousemove", eyeRotator);
    };
  });

  return (
    <EyeBorder
      variants={animations}
      animate={animationStart}
      size={size}
      position={position}
      initialcolor={initialcolor}
      rotation={rotation}
      id={`eyeball${uniqueID}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <EyeOuter>
        <EyeInnerOne>
          <EyeInnerTwo>
            <Iris />
          </EyeInnerTwo>
        </EyeInnerOne>
      </EyeOuter>
    </EyeBorder>
  );
};

export default EyeBall;

const EyePiece = styled(motion.div)`
  border-radius: 50%;
`;
const EyeBorder = styled(EyePiece)`
  --size: ${(p) => p.size};
  height: var(--size);
  width: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.initialcolor};
  position: fixed;
  ${(p) => p.position}
  z-index: 4;
`;
const EyeOuter = styled(EyePiece)`
  background-color: white;
  width: calc(var(--size) * 0.85);
  position: relative;
  height: calc(var(--size) * 0.85);
  z-index: 5;
`;

const EyeInnerOne = styled(EyePiece)`
  background-color: var(--yellow-main);
  width: calc(var(--size) * 0.6);
  height: calc(var(--size) * 0.6);
  z-index: 6;
  position: absolute;
  top: calc(var(--size) * 0.03);
  right: calc(var(--size) * 0.13);
`;

const EyeInnerTwo = styled(EyePiece)`
  background-color: var(--pink-main);
  width: calc(var(--size) * 0.4);
  height: calc(var(--size) * 0.4);
  z-index: 7;
  position: absolute;
  top: calc(var(--size) * 0.03);
  right: calc(var(--size) * 0.13);
`;

const Iris = styled(EyePiece)`
  background-color: var(--black-main);
  width: calc(var(--size) * 0.25);
  height: calc(var(--size) * 0.25);
  z-index: 8;
  position: absolute;
  top: calc(var(--size) * 0.03);
  right: calc(var(--size) * 0.08);
  border: 2px solid var(--blue-main);
`;
