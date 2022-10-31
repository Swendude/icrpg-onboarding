import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";

const EditorBlock = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px;
  border-radius: ${(props) => props.theme.borderRadiusLeft};
  border-color: ${(props) => props.theme.palette.common.text};
`;

const EditorButtonRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditorButton = styled.button`
  margin: 0;
  background-color: ${(props) => props.theme.palette.common.text};
  color: ${(props) => props.theme.palette.common.background};
  border: 1px solid ${(props) => props.theme.palette.common.text};
  border-radius: ${(props) => props.theme.borderRadiusLeft};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
  }
`;

const EditorNumber = styled.span`
  margin: 0;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.palette.common.text};
`;

const EditorTitle = styled.h4`
  margin: 0;
  border-radius: ${(props) => props.theme.borderRadiusLeft};
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  font-size: 1.2rem;
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
  gap: 0.1rem;
`;

const ValueScale = ({ val, max }: { val: number; max: number }) => {
  return (
    <BlockRow>
      {[...new Array(max)].map((_, i) =>
        i < val ? <FilledBlock /> : <EmptyBlock />
      )}
    </BlockRow>
  );
};

const StatEditor = ({
  stat,
  val,
  setStat
}: {
  stat: string;
  val: number;
  setStat: (n: number) => void;
}) => {
  return (
    <EditorBlock>
      <EditorTitle>{stat}</EditorTitle>
      <ValueScale val={val} max={10} />
      <EditorNumber>{val}</EditorNumber>
      <EditorButtonRow>
        <EditorButton onClick={() => setStat(val - 1)}>-</EditorButton>
        <EditorButton onClick={() => setStat(val + 1)}>+</EditorButton>
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
  align-items: center;
  gap: 1rem;
`;

const StatsBlockDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
`;

const StatsSection = () => {
  const { hero, setStat } = useHeroContext();
  return (
    <StatBlocks>
      <StatBlocksRow>
        <StatEditor
          stat="STR"
          val={hero.stats.STR}
          setStat={(val) => setStat("STR", val)}
        />
        <StatsBlockDescription>
          🗡 Put points into STR to create a melee fighter, a crusher, a
          bar-bending, boulder-throwing behemoth who smashes his way through
          problems.
        </StatsBlockDescription>
      </StatBlocksRow>
      <StatBlocksRow>
        <StatEditor
          stat="DEX"
          val={hero.stats.DEX}
          setStat={(val) => setStat("DEX", val)}
        />
        <StatsBlockDescription>
          🏹 You'll be using DEX to make ranged attacks, like guns and bows. DEX
          is also a measure of how nimble you are, so you'll roll with that STAT
          when you are trying to move silently, do back flips, or deftly run
          along crumbling rooftops.
        </StatsBlockDescription>
      </StatBlocksRow>
      <StatBlocksRow>
        <StatEditor stat="CON" val={0} setStat={(val) => setStat("CON", val)} />
        <StatsBlockDescription>
          ❤️ CON measures how stout or tough you are. This STAT is used when
          recovering HP, bracing for impact, or fighting to survive poison or
          terrible cold.
        </StatsBlockDescription>
      </StatBlocksRow>
      <StatBlocksRow>
        <StatEditor stat="WIS" val={0} setStat={(val) => setStat("WIS", val)} />
        <StatsBlockDescription>
          🧠 This STAT measures an intuitive, organic kind of smarts. It isn’t
          so much know- ing as it is feeling. How keen is your sixth sense?
          Place points here to be a scout, to be in tune with nature, or to feel
          danger coming.
        </StatsBlockDescription>
      </StatBlocksRow>
      <StatBlocksRow>
        <StatEditor stat="CHA" val={0} setStat={(val) => setStat("CHA", val)} />
        <StatsBlockDescription>
          🗣 Your strength of will is measured by CHARISMA. You’ll be using this
          to roll for persuasive actions, to resist fear, or drive enemies back
          with a battle cry.
        </StatsBlockDescription>
      </StatBlocksRow>
      <StatBlocksRow>
        <StatEditor stat="INT" val={0} setStat={(val) => setStat("INT", val)} />
        <StatsBlockDescription>
          📖 Some heroes use wits over fists. Their key STAT is INT, which is
          used to cast SPELLS, investigate mysteries, recall details, or operate
          complex machinery.
        </StatsBlockDescription>
      </StatBlocksRow>
    </StatBlocks>
  );
};

export default StatsSection;
