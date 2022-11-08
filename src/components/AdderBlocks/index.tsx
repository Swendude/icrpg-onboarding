import { HeroAdder, Stats } from "../../types/hero";
import styled from "styled-components";
import { objKeys } from "../../utils/helpers";
import HyperLinkedText from "../HyperLinkedText";
import { Default } from "../../styles/defaults";

const Block = styled(Default)`
  display: flex;
  width: fit-content;
  border-radius: ${(props) => props.theme.borderRadiusRight};
  /* border-left: 3px solid; */
  /* gap: 1rem; */
  color: ${(props) => props.theme.palette.common.text};
  font-size: 1.5rem;
`;
const Key = styled.p`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.common.foreground};
  color: ${(props) => props.theme.palette.common.background};
  padding-right: 2rem;
`;

const Mod = styled.p`
  /* border-left: 1px dashed;
  border-color: ${(props) => props.theme.palette.common.foreground}; */
  padding: 0.5rem;
`;

function MappingBonus<M extends object>({
  bonusMapping
}: {
  bonusMapping: Partial<M>;
}) {
  return (
    <>
      {objKeys(bonusMapping).map((key_, i) => {
        const maybeStat = bonusMapping[key_];
        if (maybeStat) {
          return (
            <Block key={i}>
              <Key>
                {key_ as string}
                {/* <HyperLinkedText text={key_ as string} /> */}
              </Key>
              <Mod>{`${maybeStat > 0 ? "+" : "-"}${maybeStat}`}</Mod>
            </Block>
          );
        } else return <></>;
      })}
    </>
  );
}

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Descr = styled.p`
  padding-bottom: 0.5rem;
`;

const AdderBlocks = ({ adder }: { adder: HeroAdder }) => {
  return (
    <Blocks>
      {adder.stats && <MappingBonus bonusMapping={adder.stats} />}
      {adder.effort && <MappingBonus bonusMapping={adder.effort} />}
      {adder.properties && <MappingBonus bonusMapping={adder.properties} />}
    </Blocks>
  );
};

export default AdderBlocks;
