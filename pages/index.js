import BirdsWrapper from "../components/single/BirdsWrapper";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <BirdsWrapper>
        {/* <SubHeader>Isaac King</SubHeader>
        <Header>WEB DEVELOPER</Header> */}
      </BirdsWrapper>
    </>
  );
}

const Header = styled.h1`
  font-family: var(--font-highlight);
  font-size: 8rem;
  color: var(--red-main);
`;

const SubHeader = styled.h2`
  font-size: 4rem;
  color: var(--teal-main);
`;
