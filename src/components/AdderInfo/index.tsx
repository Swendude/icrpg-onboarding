import styled from "styled-components";
import AdderBlocks from "../AdderBlocks";
import { HeroAdder } from "../../types/hero";

const InfoText = styled.p`
  margin: 1.5rem;
`;

const BlockWrapper = styled.div`
  border-style: dashed;
  border-width: 1px 0 0 0;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

function AdderInfo<
  T extends { description: string; adder: HeroAdder | undefined }
>({ selected, notSetMsg }: { selected: T | undefined; notSetMsg: string }) {
  if (selected) {
    return (
      <>
        <InfoText>{selected.description}</InfoText>
        {selected.adder ? (
          <BlockWrapper>
            <AdderBlocks adder={selected.adder} />
          </BlockWrapper>
        ) : (
          <></>
        )}
      </>
    );
  }
  return (
    <>
      <InfoText>
        <p>{notSetMsg}</p>
      </InfoText>
    </>
  );
}

export default AdderInfo;
