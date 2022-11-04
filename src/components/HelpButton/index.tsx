import { ReactNode } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { ModalInfos } from "../../data/modalInfo";

const Button = styled.button`
  border-style: solid;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.palette.common.text};
  border-radius: 50%;
  border-width: 1px;
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${(props) => props.theme.palette.common.background};
    background-color: ${(props) => props.theme.palette.common.foreground};
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

function HelpButton<KType>({
  keyVal,
  children
}: {
  keyVal: KType;
  children?: ReactNode;
}) {
  const { showModal } = useAppContext();
  return (
    <Wrapper>
      {children}
      <Button onClick={() => showModal(keyVal as keyof ModalInfos)}>?</Button>
    </Wrapper>
  );
}

export default HelpButton;
