import { FC } from "react";
import styled from "styled-components";
import Selector from "../Selector";

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

function SelectorSection<V>({
  value,
  stringify,
  setter,
  options,
  Content
}: {
  value: V | undefined;
  stringify: (value: V | undefined) => string;
  setter: (value: string) => void;
  options: V[];
  Content?: FC<{ selected: V | undefined }>;
}) {
  return (
    <Wrapper>
      <Selector
        value={stringify(value)}
        onChange={setter}
        options={options.map(stringify)}
      />
      {Content && (
        <InfoWrapper>
          <Content selected={value} />
        </InfoWrapper>
      )}
    </Wrapper>
  );
}

export default SelectorSection;
