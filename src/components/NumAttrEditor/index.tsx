import styled from "styled-components";
import HelpButton from "../HelpButton";

const ButtonRow = styled.div`
  display: flex;

  & :first-child {
    border-width: 0 0px 1px 1px;
  }
`;

const Button = styled.button<{ enabled?: boolean }>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  border-color: ${(props) => props.theme.palette.common.text};
  border-width: 0 1px 1px 1px;
  border-style: solid;

  ${(props) =>
    props.enabled
      ? `cursor: pointer;
    :hover {
    background-color: ${props.theme.palette.common.text};
    color: ${props.theme.palette.common.background};`
      : `
      background-color: ${props.theme.palette.common.foreground};

      `}
`;

const NumberWrapper = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.common.foreground};
  margin-bottom: 1rem;
`;

const Number = styled.span`
  font-size: 2.5rem;
  color: ${(props) => props.theme.palette.common.background};
  font-weight: 800;
`;

const TitleWrapper = styled.div`
  color: ${(props) => props.theme.palette.common.text};
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-style: dashed;
  border-width: 1px 0 0 0;
  width: 100%;
`;

const EditorTitle = styled.h3`
  font-size: 1.8rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  border-color: ${(props) => props.theme.palette.common.text};
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-style: solid;
  border-width: 1px 1px 1px 1px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 14rem;
`;

const NumberSubNumberWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const SubNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubNumber = styled.p`
  font-size: 1rem;
  opacity: 0.6;
  text-align: right;
`;

function NumAttrEditor<KType>({
  attr,
  baseValue,
  lootValue,
  bioformValue,
  finalValue,
  setter,
  allowPlus = true
}: {
  attr: KType;
  baseValue: number;
  bioformValue: number;
  lootValue: number;
  finalValue: number;
  setter: (key: KType, n: number) => void;
  allowPlus?: boolean;
}) {
  return (
    <Wrapper>
      <InnerWrapper>
        <NumberSubNumberWrapper>
          <NumberWrapper>
            <Number>{finalValue}</Number>
          </NumberWrapper>
          <SubNumberWrapper>
            <SubNumber>BASE: {baseValue}</SubNumber>
            <SubNumber>LOOT: {lootValue}</SubNumber>
            <SubNumber>BIO: {bioformValue}</SubNumber>
          </SubNumberWrapper>
        </NumberSubNumberWrapper>
        <TitleWrapper>
          <HelpButton keyVal={attr}>
            <EditorTitle>{attr as String}</EditorTitle>
          </HelpButton>
        </TitleWrapper>
      </InnerWrapper>
      <ButtonRow>
        <Button
          onClick={() => allowPlus && setter(attr, baseValue + 1)}
          enabled={true}
        >
          ＋
        </Button>
        <Button onClick={() => setter(attr, baseValue - 1)} enabled={true}>
          －
        </Button>
      </ButtonRow>
    </Wrapper>
  );
}

export default NumAttrEditor;
