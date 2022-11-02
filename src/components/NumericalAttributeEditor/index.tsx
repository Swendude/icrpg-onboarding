import { useHeroContext } from "../../context/heroContext";
import styled from "styled-components";
import { EffortKey, NumericalKey, StatKey } from "../../types/hero";
import HelpButton from "../HelpButton";
import { FC } from "react";

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
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: solid 1px;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-color: ${(props) => props.theme.palette.common.text};
  justify-content: space-between;
`;

type Props = {
  attr: EffortKey | StatKey;
  value: number;
  setter: (attr: NumericalKey, n: number) => void;
};

const NumericalAttributeEditor = ({ attr, value, setter }: Props) => (
  <Wrapper>
    <HelpButton keyVal={attr}>
      <EditorTitle>{attr}</EditorTitle>
    </HelpButton>
    <EditorNumber>{value}</EditorNumber>
    <ButtonRow>
      <Button onClick={() => setter(attr, value + 1)}>+</Button>
      <Button onClick={() => setter(attr, value - 1)}>-</Button>
    </ButtonRow>
  </Wrapper>
);

export default NumericalAttributeEditor;
