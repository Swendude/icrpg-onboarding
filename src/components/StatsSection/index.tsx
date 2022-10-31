import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import { StatKey } from "../../context/hero";
import HelpButton from "../HelpButton";

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  height: 4rem;
  width: 4rem;
  font-size: 2.5rem;
  background-color: ${(props) => props.theme.palette.common.text};
  color: ${(props) => props.theme.palette.common.background};
  border: 1px solid ${(props) => props.theme.palette.common.text};
  border-radius: ${(props) => props.theme.borderRadius};

  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
  }
`;

const EditorNumber = styled.span`
  margin: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 2rem;
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.common.text};
`;

const EditorTitle = styled.h3`
  border-radius: ${(props) => props.theme.borderRadiusLeft};
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  font-size: 3rem;
`;

const StatEditor = ({ stat }: { stat: StatKey }) => {
  const { hero, setStat } = useHeroContext();

  return (
    <Wrapper>
      <HelpButton keyVal={stat}>
        <EditorTitle>{stat}</EditorTitle>
      </HelpButton>
      <EditorNumber>{hero.stats[stat]}</EditorNumber>
      <ButtonRow>
        <Button onClick={() => setStat(stat, hero.stats[stat] + 1)}>+</Button>
        <Button onClick={() => setStat(stat, hero.stats[stat] - 1)}>-</Button>
      </ButtonRow>
    </Wrapper>
  );
};

const StatBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Wrapper = styled.div`
  flex: 1 1 30rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: solid 1px;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-color: ${(props) => props.theme.palette.common.text};
  justify-content: space-between;
`;

const StatsSection = () => {
  return (
    <StatBlocks>
      <StatEditor stat="STR" />
      <StatEditor stat="DEX" />
      <StatEditor stat="CON" />
      <StatEditor stat="WIS" />
      <StatEditor stat="CHA" />
      <StatEditor stat="INT" />
    </StatBlocks>
  );
};

export default StatsSection;
