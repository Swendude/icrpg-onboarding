import { HeroAdder, Stats } from "../../types/hero";
import styled from "styled-components";
import { objKeys } from "../../utils/helpers";
import HyperLinkedText from "../HyperLinkedText";

const BlockLine = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Key = styled.p`
  font-size: 2rem;
`;
const Mod = styled.p`
  font-size: 2rem;
`;

function MappingBonus<M extends object>({
  bonusMapping
}: {
  bonusMapping: Partial<M>;
}) {
  return (
    <>
      {objKeys(bonusMapping).map((key_) => {
        const maybeStat = bonusMapping[key_];
        if (maybeStat) {
          return (
            <BlockLine>
              <Key>
                <HyperLinkedText text={key_ as string} />
              </Key>
              <Mod>{`${maybeStat > 0 ? "+" : "-"}${maybeStat}`}</Mod>
            </BlockLine>
          );
        } else return <></>;
      })}
    </>
  );
}

const AdderBlocks = ({ adder }: { adder: HeroAdder }) => {
  return (
    <>
      {adder.stats && <MappingBonus bonusMapping={adder.stats} />}
      {adder.effort && <MappingBonus bonusMapping={adder.effort} />}
      {adder.properties && <MappingBonus bonusMapping={adder.properties} />}
    </>
  );
};

export default AdderBlocks;
