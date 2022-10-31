import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import { StatKey } from "../../context/hero";
import { useAppContext } from "../../context/appContext";

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
  flex-grow: 2;
  text-align: center;
  padding: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.text};
`;

const EditorTitle = styled.h3`
  border-radius: ${(props) => props.theme.borderRadiusLeft};
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
`;

const StatEditor = ({ stat }: { stat: StatKey }) => {
  const { hero, setStat } = useHeroContext();
  const { showModal } = useAppContext();
  return (
    <Wrapper>
      <EditorTitle>{stat}</EditorTitle>
      <HelpButton onClick={() => showModal(stat)}>?</HelpButton>
      <EditorNumber>{hero.stats[stat]}</EditorNumber>
      <ButtonRow>
        <Button onClick={() => setStat(stat, hero.stats[stat] - 1)}>+</Button>
        <Button onClick={() => setStat(stat, hero.stats[stat] + 1)}>-</Button>
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
  flex: 1 1 20rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: solid 1px;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-color: ${(props) => props.theme.palette.common.text};
  justify-content: space-between;
`;

const HelpButton = styled.button`
  border-style: solid;
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  border-color: ${(props) => props.theme.palette.common.text};
  border-radius: 15px;
  border-width: 1px;
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
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
