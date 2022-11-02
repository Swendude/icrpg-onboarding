import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import NumAttrEditor from "../NumAttrEditor";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StatsSection = () => {
  const { hero, setStat } = useHeroContext();
  return (
    <Wrapper>
      <NumAttrEditor attr="STR" value={hero.stats.STR} setter={setStat} />
      <NumAttrEditor attr="DEX" value={hero.stats.DEX} setter={setStat} />
      <NumAttrEditor attr="CON" value={hero.stats.CON} setter={setStat} />
      <NumAttrEditor attr="WIS" value={hero.stats.WIS} setter={setStat} />
      <NumAttrEditor attr="CHA" value={hero.stats.CHA} setter={setStat} />
      <NumAttrEditor attr="INT" value={hero.stats.INT} setter={setStat} />
    </Wrapper>
  );
};

export default StatsSection;
