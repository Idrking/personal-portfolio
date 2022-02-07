import { motion } from "framer-motion";
import styled from "styled-components";
import EyeBall from "../EyeBall";

const PINKHEX = "#db0054";
const YELLOWHEX = "#ffb338";
const BLUEHEX = "#00e5fa";

const borderPulse = {
  outerPulse: {
    backgroundColor: [null, YELLOWHEX, BLUEHEX, PINKHEX],
    transition: { ease: "anticipate", duration: 2, repeat: Infinity },
  },
  middlePulse: {
    backgroundColor: [null, PINKHEX, YELLOWHEX, BLUEHEX],
    transition: { ease: "anticipate", duration: 2, repeat: Infinity },
  },
  innerPulse: {
    backgroundColor: [null, BLUEHEX, PINKHEX, YELLOWHEX],
    transition: { ease: "anticipate", duration: 2, repeat: Infinity },
  },
};

export default function BorderWrapper({ children }) {
  return (
    <>
      {/* <EyeBall
        animations={borderPulse}
        animationStart={"outerPulse"}
        initialcolor={PINKHEX}
        size="50px"
        position="top: 300px; left: 0px;"
        uniqueID={"1"}
      /> */}
      <EyeBall
        animations={borderPulse}
        animationStart={"middlePulse"}
        size="75px"
        position="top: 220px; left: 30px;"
        initialcolor={BLUEHEX}
        uniqueID={"2"}
      />
      {/* <EyeBall
        animations={borderPulse}
        animationStart={"outerPulse"}
        size="40px"
        position="top: 180px; left: 15px;"
        initialcolor={PINKHEX}
        uniqueID="3"
      />

      <EyeBall
        animations={borderPulse}
        animationStart={"outerPulse"}
        size="90px"
        position="bottom: 200px; right: 0px;"
        initialcolor={PINKHEX}
        uniqueID="4"
      /> */}
      {children}
      <LeftBorderOne variants={borderPulse} animate="outerPulse" />
      <LeftBorderTwo variants={borderPulse} animate="middlePulse" />
      <LeftBorderThree variants={borderPulse} animate="innerPulse" />
      <BottomBorderOne variants={borderPulse} animate="outerPulse" />
      <BottomBorderTwo variants={borderPulse} animate="middlePulse" />
      <BottomBorderThree variants={borderPulse} animate="innerPulse" />
      <RightBorderOne variants={borderPulse} animate="outerPulse" />
      <RightBorderTwo variants={borderPulse} animate="middlePulse" />
      <RightBorderThree variants={borderPulse} animate="innerPulse" />
      <TopBorderOne variants={borderPulse} animate="outerPulse" />
      <TopBorderTwo variants={borderPulse} animate="middlePulse" />
      <TopBorderThree variants={borderPulse} animate="innerPulse" />
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
  background-color: var(--pink-main);
`;

const LeftBorderTwo = styled(LeftBorder)`
  left: var(--width);
  top: var(--width);
  height: calc(100% - calc(var(--width) * 2));
  background-color: var(--blue-main);
`;

const LeftBorderThree = styled(LeftBorder)`
  left: calc(var(--width) * 2);
  height: calc(100% - calc(var(--width) * 4));
  top: calc(var(--width) * 2);
  background-color: var(--yellow-main);
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
  background-color: var(--pink-main);
`;

const BottomBorderTwo = styled(BottomBorder)`
  bottom: var(--height);
  background-color: var(--blue-main);
`;

const BottomBorderThree = styled(BottomBorder)`
  bottom: calc(var(--height) * 2);
  background-color: var(--yellow-main);
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
  background-color: var(--pink-main);
  height: 100%;
`;

const RightBorderTwo = styled(RightBorder)`
  right: var(--width);
  top: var(--width);
  background-color: var(--blue-main);
  height: calc(100% - calc(var(--width) * 2));
`;

const RightBorderThree = styled(RightBorder)`
  right: calc(var(--width) * 2);
  height: calc(100% - calc(var(--width) * 4));
  top: calc(var(--width) * 2);
  background-color: var(--yellow-main);
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
  background-color: var(--pink-main);
`;

const TopBorderTwo = styled(TopBorder)`
  top: var(--height);
  background-color: var(--blue-main);
`;

const TopBorderThree = styled(TopBorder)`
  top: calc(var(--height) * 2);
  background-color: var(--yellow-main);
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
  background-color: var(--blue-main);
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
  background-color: var(--yellow-main);
  width: 80px;
  height: 80px;
  z-index: 6;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const EyeInnerTwo = styled(EyePiece)`
  background-color: var(--pink-main);
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
