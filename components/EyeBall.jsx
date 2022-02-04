import styled from "styled-components";
import { motion } from "framer-motion";

const EyeBall = ({
  animations,
  animationStart,
  size,
  position,
  initialcolor,
}) => {
  return (
    <EyeBorder
      variants={animations}
      animate={animationStart}
      size={size}
      position={position}
      initialcolor={initialcolor}
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
  transition: transform 5s ease-out;
  ${(p) => p.position}
  z-index: 4;
`;
const EyeOuter = styled(EyePiece)`
  background-color: white;
  width: calc(var(--size) * 0.85);
  position: relative;
  height: calc(var(--size) * 0.85);
  z-index: 5;
  /* overflow: hidden; */
`;

const EyeInnerOne = styled(EyePiece)`
  background-color: var(--yellow-main);
  width: calc(var(--size) * 0.6);
  height: calc(var(--size) * 0.6);
  z-index: 6;
  position: absolute;
  bottom: calc(var(--size) * 0.03);
  right: calc(var(--size) * 0.03);
`;

const EyeInnerTwo = styled(EyePiece)`
  background-color: var(--pink-main);
  width: calc(var(--size) * 0.4);
  height: calc(var(--size) * 0.4);
  z-index: 7;
  position: absolute;
  bottom: calc(var(--size) * 0.03);
  right: calc(var(--size) * 0.03);
`;

const Iris = styled(EyePiece)`
  background-color: var(--black-main);
  width: calc(var(--size) * 0.25);
  height: calc(var(--size) * 0.25);
  z-index: 8;
  position: absolute;
  bottom: calc(var(--size) * 0.03);
  right: calc(var(--size) * 0.03);
  border: 2px solid var(--blue-main);
`;
