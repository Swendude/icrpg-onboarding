import styled from "styled-components";
import { HeroType } from "../../types/hero";

const InfoText = styled.p`
  margin: 1.5rem;
`;

const HeroTypeInfo = ({ selected }: { selected: HeroType | undefined }) => {
  if (selected) {
    return (
      <>
        <InfoText>{selected.description}</InfoText>
      </>
    );
  }
  return (
    <>
      <InfoText>
        <p>Select a type to see more info!</p>
      </InfoText>
    </>
  );
};

export default HeroTypeInfo;
