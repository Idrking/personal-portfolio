import styled from "styled-components";
import Image from "next/image";
import crab from "../public/images/HeaderCrabUnfin.png";

export default function Home() {
  return (
    <>
      <ImageWrapper>
        <Image src={crab} />
      </ImageWrapper>
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

const ImageWrapper = styled.div`
  margin-top: 200px;
  margin-left: 80px;

  max-width: 800px;
`;
