import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

//Past a certain point, the eye has reached a maximum realistic looking depth
const MAX_DEPTH = 1000;

const calculateRotation = (e, pos, stateFunc) => {
  const radians = Math.atan2(e.clientX - pos.centerX, e.clientY - pos.centerY);
  const degree = radians * (180 / Math.PI) * -1 + 180;
  const depth = setDepth(e, pos);
  stateFunc({ rotation: degree, depth });
};

const setDepth = (e, pos) => {
  const xDiff = Math.abs(pos.centerX - e.clientX);
  const yDiff = Math.abs(pos.centerY - e.clientY);
  const primeDiff = xDiff > yDiff ? xDiff : yDiff;

  if (!(primeDiff >= MAX_DEPTH)) {
    const percentOfMax = primeDiff / MAX_DEPTH;
    console.log(percentOfMax);
    return 30 * percentOfMax;
  }

  return 30 * (primeDiff / MAX_DEPTH);
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
  const [rotation, setRotation] = useState({ rotation: 0, depth: 30 });
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
      style={{
        transform: `rotate(${rotation.rotation}deg)`,
      }}
    >
      <EyeOuter>
        <EyeInnerOne style={{ marginBottom: `${rotation.depth}%` }}>
          <EyeInnerTwo style={{ marginBottom: `${rotation.depth}%` }}>
            <Iris style={{ marginBottom: `${rotation.depth}%` }} />
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
  overflow: hidden;
`;

const EyeInnerOne = styled(EyePiece)`
  background-color: var(--yellow-main);
  width: calc(var(--size) * 0.6);
  height: calc(var(--size) * 0.6);
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const EyeInnerTwo = styled(EyePiece)`
  background-color: var(--pink-main);
  width: calc(var(--size) * 0.4);
  height: calc(var(--size) * 0.4);
  z-index: 7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Iris = styled(EyePiece)`
  background-color: var(--black-main);
  width: calc(var(--size) * 0.25);
  height: calc(var(--size) * 0.25);
  z-index: 8;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid var(--blue-main);
`;
