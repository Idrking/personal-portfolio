import { motion } from "framer-motion";
import styled from "styled-components";

export default function BorderWrapper({ children }) {
  return (
    <>
      <EyeBorder>
        <EyeOuter>
          <EyeInnerOne>
            <EyeInnerTwo>
              <Iris />
            </EyeInnerTwo>
          </EyeInnerOne>
        </EyeOuter>
      </EyeBorder>
      {children}
      <LeftBorderOne
        animate={{
          backgroundColor: ["red", "blue", "yellow"],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <LeftBorderTwo />
      <LeftBorderThree />
      <BottomBorderOne />
      <BottomBorderTwo />
      <BottomBorderThree />
      <RightBorderOne />
      <RightBorderTwo />
      <RightBorderThree />
      <TopBorderOne />
      <TopBorderTwo />
      <TopBorderThree />
    </>
  );
}

const LeftBorder = styled(motion.div)`
  --width: 25px;
  position: fixed;
  width: var(--width);
  z-index: 2;
`;

const LeftBorderOne = styled(LeftBorder)`
  left: 0;
  height: 100%;
  top: 0;
  background-color: var(--red-new);
`;

const LeftBorderTwo = styled(LeftBorder)`
  left: var(--width);
  top: var(--width);
  height: calc(100% - calc(var(--width) * 2));
  background-color: var(--blue-new);
`;

const LeftBorderThree = styled(LeftBorder)`
  left: calc(var(--width) * 2);
  height: calc(100% - calc(var(--width) * 4));
  top: calc(var(--width) * 2);
  background-color: var(--yellow-new);
`;

const BottomBorder = styled(motion.div)`
  --height: 25px;
  height: var(--height);
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1;
`;

const BottomBorderOne = styled(BottomBorder)`
  bottom: 0;
  background-color: var(--red-new);
`;

const BottomBorderTwo = styled(BottomBorder)`
  bottom: var(--height);
  background-color: var(--blue-new);
`;

const BottomBorderThree = styled(BottomBorder)`
  bottom: calc(var(--height) * 2);
  background-color: var(--yellow-new);
`;

const RightBorder = styled(motion.div)`
  --width: 25px;
  width: var(--width);
  position: fixed;
  z-index: 2;
`;

const RightBorderOne = styled(RightBorder)`
  right: 0;
  top: 0;
  background-color: var(--red-new);
  height: 100%;
`;

const RightBorderTwo = styled(RightBorder)`
  right: var(--width);
  top: var(--width);
  background-color: var(--blue-new);
  height: calc(100% - calc(var(--width) * 2));
`;

const RightBorderThree = styled(RightBorder)`
  right: calc(var(--width) * 2);
  height: calc(100% - calc(var(--width) * 4));
  top: calc(var(--width) * 2);
  background-color: var(--yellow-new);
`;

const TopBorder = styled(motion.div)`
  --height: 25px;
  position: fixed;
  height: var(--height);
  width: 100%;
  left: 0;
  z-index: 1;
`;
const TopBorderOne = styled(TopBorder)`
  top: 0;
  background-color: var(--red-new);
`;

const TopBorderTwo = styled(TopBorder)`
  top: var(--height);
  background-color: var(--blue-new);
`;

const TopBorderThree = styled(TopBorder)`
  top: calc(var(--height) * 2);
  background-color: var(--yellow-new);
`;

const EyePiece = styled(motion.div)`
  border-radius: 50%;
`;
const EyeBorder = styled(EyePiece)`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-new);
  position: relative;
  transform: rotate(40deg);
  transition: transform 1s ease-out;

  z-index: 4;
`;
const EyeOuter = styled(EyePiece)`
  background-color: white;
  width: 135px;
  position: relative;
  height: 135px;
  z-index: 5;
  overflow: hidden;
`;

const EyeInnerOne = styled(EyePiece)`
  background-color: var(--yellow-new);
  width: 80px;
  height: 80px;
  z-index: 6;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const EyeInnerTwo = styled(EyePiece)`
  background-color: var(--red-new);
  width: 60px;
  height: 60px;
  z-index: 7;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const Iris = styled(EyePiece)`
  background-color: var(--black-main);
  width: 30px;
  height: 30px;
  z-index: 8;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
