import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import NumericalAttributeEditor from "../NumericalAttributeEditor";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const EffortSection = () => {
  const { hero, setEffort } = useHeroContext();
  return (
    <Wrapper>
      <NumericalAttributeEditor
        attr="BASIC"
        value={hero.effort.BASIC}
        setter={setEffort}
      />
      <NumericalAttributeEditor
        attr="WEAPON"
        value={hero.effort.WEAPON}
        setter={setEffort}
      />
      <NumericalAttributeEditor
        attr="MAGIC"
        value={hero.effort.MAGIC}
        setter={setEffort}
      />
      <NumericalAttributeEditor
        attr="ULTIMATE"
        value={hero.effort.ULTIMATE}
        setter={setEffort}
      />
    </Wrapper>
  );
};

export default EffortSection;
