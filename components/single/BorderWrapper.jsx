import { motion } from "framer-motion";
import styled from "styled-components";

export default function BorderWrapper({ children }) {
  return (
    <>
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
  --width: 15px;
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
  --height: 15px;
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
  --width: 15px;
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
  --height: 15px;
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
