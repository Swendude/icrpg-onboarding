import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import { StatKey } from "../../types/hero";
import HelpButton from "../HelpButton";
import NumericalAttributeEditor from "../NumericalAttributeEditor";

const StatBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StatsSection = () => {
  const { hero, setStat } = useHeroContext();
  return (
    <StatBlocks>
      <NumericalAttributeEditor
        attr="STR"
        value={hero.stats.STR}
        setter={setStat}
      />
      <NumericalAttributeEditor
        attr="DEX"
        value={hero.stats.DEX}
        setter={setStat}
      />
      <NumericalAttributeEditor
        attr="CON"
        value={hero.stats.CON}
        setter={setStat}
      />
      <NumericalAttributeEditor
        attr="WIS"
        value={hero.stats.WIS}
        setter={setStat}
      />
      <NumericalAttributeEditor
        attr="CHA"
        value={hero.stats.CHA}
        setter={setStat}
      />
      <NumericalAttributeEditor
        attr="INT"
        value={hero.stats.INT}
        setter={setStat}
      />
    </StatBlocks>
  );
};

export default StatsSection;
