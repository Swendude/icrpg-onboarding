import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
import { bioforms } from "../../data/bioforms";
import { Bioform } from "../../types/hero";
import AdderBlocks from "../AdderBlocks";
import { RoundedTop } from "../../styles/defaults";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PickerWrapper = styled(RoundedTop)`
  width: 100%;
  position: relative;
  border-style: solid;

  &::after {
    content: "▼";
    font-size: 2rem;
    right: 2.4rem;
    position: absolute;
    margin: 1.2rem;
    pointer-events: none;
  }
`;

const Picker = styled(RoundedTop)`
  padding: 1.2rem;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.background};
  font-size: 2rem;
  font-family: inherit;
  cursor: pointer;
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
        <p>Select a race to see more info!</p>
      </InfoText>
    </InfoWrapper>
  );
};
const BioformSection = () => {
  const { hero, setBioform } = useHeroContext();

  return (
    <Wrapper>
      <PickerWrapper>
        <Picker
          as="select"
          value={hero.bioform?.name}
          onChange={(e) =>
            setBioform(bioforms.find((bf) => bf.name === e.target.value))
          }
        >
          <option>Pick a race</option>
          {bioforms.map((bf, i) => (
            <option key={i}>{bf.name}</option>
          ))}
        </Picker>
      </PickerWrapper>
      <CurrentInfo selected={hero.bioform} />
    </Wrapper>
  );
};

export default BioformSection;
