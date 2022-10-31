import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import { StatKey } from "../../context/hero";
import { useAppContext } from "../../context/appContext";

const EditorBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: solid 1px;
  border-radius: ${(props) => props.theme.borderRadius};
  border-color: ${(props) => props.theme.palette.common.text};
`;

const EditorButtonRow = styled.div`
  display: flex;
  gap: 2rem;
`;
const EditorButton = styled.button`
  aspect-ratio: 1;
  width: 3rem;
  font-size: 2rem;
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
  padding: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.text};
`;

const EditorTitle = styled.h3`
  border-radius: ${(props) => props.theme.borderRadiusLeft};
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  margin: 1rem;
`;

const EmptyBlock = styled.div`
  aspect-ratio: 1;
  width: 1.8rem;
  border: solid 1px;
  border-color: ${(props) => props.theme.palette.common.text};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const FilledBlock = styled(EmptyBlock)`
  border-color: ${(props) => props.theme.palette.common.text};
  background-color: ${(props) => props.theme.palette.common.text};
`;

const BlockRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const ValueScale = ({ val, max }: { val: number; max: number }) => {
  return (
    <BlockRow>
      {[...new Array(max)].map((_, i) =>
        i < val ? <FilledBlock key={i} /> : <EmptyBlock key={i} />
      )}
    </BlockRow>
  );
};

const StatEditor = ({ stat }: { stat: StatKey }) => {
  const { hero, setStat } = useHeroContext();
  const { showModal } = useAppContext();
  return (
    <EditorBlock>
      <EditorTitle>{stat}</EditorTitle>
      <HelpButton onClick={() => showModal(stat)}>?</HelpButton>
      {/* <ValueScale val={hero.stats[stat]} max={10} /> */}
      <EditorNumber>{hero.stats[stat]}</EditorNumber>
      <EditorButtonRow>
        <EditorButton onClick={() => setStat(stat, hero.stats[stat] - 1)}>
          -
        </EditorButton>
        <EditorButton onClick={() => setStat(stat, hero.stats[stat] + 1)}>
          +
        </EditorButton>
      </EditorButtonRow>
    </EditorBlock>
  );
};

const StatBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatBlocksRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const StatsBlockTitle = styled.h3``;

const HelpButton = styled.button`
  border-style: solid;
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  border-color: ${(props) => props.theme.palette.common.text};
  border-radius: 15px;
  border-width: 1px;
  width: 2.4rem;
  height: 2.4rem;
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
