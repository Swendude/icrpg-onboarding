import { useState } from "react";
import styled from "styled-components";
import { bioforms } from "../../data/bioforms";
import { Bioform } from "../../types/hero";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PickerWrapper = styled.div`
  width: 100%;
  position: relative;
  border-style: solid solid dashed solid;
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

const InfoBox = styled.div`
  width: 100%;
  padding: 1.2rem;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.common.foreground};
  border-width: 0 1px 1px 1px;
`;

const CurrentInfo = ({ selected }: { selected: Bioform | undefined }) => {
  if (selected) {
    return (
      <InfoBox>
        <p>{selected.description}</p>
      </InfoBox>
    );
  }
  return (
    <InfoBox>
      <p>Select a race to see more info!</p>
    </InfoBox>
  );
};
const BioformSection = () => {
  const [selected, setSelected] = useState<Bioform | undefined>(undefined);

  return (
    <Wrapper>
      <PickerWrapper>
        <Picker
          value={selected?.name}
          onChange={(e) =>
            setSelected(bioforms.find((bf) => bf.name === e.target.value))
          }
        >
          <option>Pick a race</option>
          {bioforms.map((bf, i) => (
            <option key={i}>{bf.name}</option>
          ))}
        </Picker>
      </PickerWrapper>
      <CurrentInfo selected={selected} />
    </Wrapper>
  );
};

export default BioformSection;
