import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
import { bioforms } from "../../data/bioforms";
import { Bioform } from "../../types/hero";
import AdderBlocks from "../AdderBlocks";
import { RoundedTop } from "../../styles/defaults";
import Selector from "../Selector";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoText = styled.p`
  margin: 1.5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 1rem;
  border: 1px solid;
  border-width: 0px 1px 1px 1px;
`;

const BlockWrapper = styled.div`
  border-style: dashed;
  border-width: 1px 0 0 0;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CurrentInfo = ({ selected }: { selected: Bioform | undefined }) => {
  if (selected) {
    return (
      <InfoWrapper>
        <InfoText>{selected.description}</InfoText>
        <BlockWrapper>
          <AdderBlocks adder={selected.adder} />
        </BlockWrapper>
      </InfoWrapper>
    );
  }
  return (
    <InfoWrapper>
      <InfoText>
        <p>Select a bioform to see more info!</p>
      </InfoText>
    </InfoWrapper>
  );
};
const BioformSection = () => {
  const { hero, setBioform } = useHeroContext();

  return (
    <Wrapper>
      <Selector
        value={hero.bioform?.name}
        onChange={(val) => setBioform(bioforms.find((bf) => bf.name === val))}
        options={bioforms.map((bf) => bf.name)}
      />
      <CurrentInfo selected={hero.bioform} />
    </Wrapper>
  );
};

export default BioformSection;
