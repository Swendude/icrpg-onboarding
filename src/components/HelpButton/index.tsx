import { ReactNode } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { ModalInfos } from "../../data/modalInfo";

const Button = styled.button`
  border-style: solid;
  background-color: ${(props) => props.theme.palette.common.background};
  color: ${(props) => props.theme.palette.common.text};
  border-color: ${(props) => props.theme.palette.common.text};
  border-radius: 15px;
  border-width: 1px;
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  opacity: 0.6;
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
