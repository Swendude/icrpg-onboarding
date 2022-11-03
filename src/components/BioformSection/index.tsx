import { useState } from "react";
import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
import { bioforms } from "../../data/bioforms";
import { Bioform } from "../../types/hero";
import AdderBlocks from "../AdderBlocks";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PickerWrapper = styled.div`
  width: 100%;
  position: relative;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.common.foreground};
  border-radius: ${(props) => props.theme.borderRadiusTop};

  &::after {
    content: "▼";
    font-size: 2rem;
    right: 2.4rem;
    position: absolute;
    margin: 1.2rem;
    pointer-events: none;
  }
`;

const Picker = styled.select`
  border-radius: ${(props) => props.theme.borderRadiusTop};
  padding: 1.2rem;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  color: ${(props) => props.theme.palette.common.text};
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
  border-color: ${(props) => props.theme.palette.common.foreground};
  border-width: 0px 1px 1px 1px;
`;

const BlockWrapper = styled.div`
  border-style: dashed;
  border-width: 1px 0px 0 0;
  border-color: ${(props) => props.theme.palette.common.foreground};
  padding: 1.5rem 40%;
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
  const [selected, setSelected] = useState<Bioform | undefined>(undefined);

  return (
    <Wrapper>
      <PickerWrapper>
        <Picker
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
