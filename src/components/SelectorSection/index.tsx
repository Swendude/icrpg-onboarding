import styled from "styled-components";
import Selector from "../Selector";
import Description from "../Description";
import { HeroAdder } from "../../types/hero";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 1rem;
  border: 1px solid;
  border-width: 0px 1px 1px 1px;
  border-color: ${(props) => props.theme.palette.common.foreground};
`;

function SelectorSection<
  V extends { name: string; description: string; adder?: HeroAdder | undefined }
>({
  value,
  stringify,
  setter,
  options,
  notSetMsg
}: {
  value: V | undefined;
  stringify: (value: V | undefined) => string;
  setter: (value: string) => void;
  options: V[];
  notSetMsg: string;
}) {
  return (
    <Wrapper>
      <Selector
        value={stringify(value)}
        onChange={setter}
        options={options.map(stringify)}
      />
      <InfoWrapper>
        <Description selected={value} notSetMsg={notSetMsg} />
      </InfoWrapper>
    </Wrapper>
  );
}

export default SelectorSection;
