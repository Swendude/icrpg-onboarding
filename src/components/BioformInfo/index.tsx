import styled from "styled-components";
import AdderBlocks from "../AdderBlocks";
import { Bioform } from "../../types/hero";

const InfoText = styled.p`
  margin: 1.5rem;
`;

const BlockWrapper = styled.div`
  border-style: dashed;
  border-width: 1px 0 0 0;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

const BioFormInfo = ({ selected }: { selected: Bioform | undefined }) => {
  if (selected) {
    return (
      <>
        <InfoText>{selected.description}</InfoText>
        <BlockWrapper>
          <AdderBlocks adder={selected.adder} />
        </BlockWrapper>
      </>
    );
  }
  return (
    <>
      <InfoText>
        <p>Select a bioform to see more info!</p>
      </InfoText>
    </>
  );
};

export default BioFormInfo;
