import { ReactNode } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { ModalInfos } from "../../data/modalInfo";

const Button = styled.button<{ dark: boolean }>`
  border-style: solid;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) =>
    props.dark
      ? props.theme.palette.common.background
      : props.theme.palette.common.text};
  border-color: ${(props) =>
    props.dark
      ? props.theme.palette.common.background
      : props.theme.palette.common.text};
  border-radius: 15px;
  border-width: 1px;
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

function HelpButton<KType>({
  keyVal,
  children,
  dark = false
}: {
  keyVal: KType;
  children?: ReactNode;
  dark?: boolean;
}) {
  const { showModal } = useAppContext();
  return (
    <Wrapper>
      {children}
      <Button dark={dark} onClick={() => showModal(keyVal as keyof ModalInfos)}>
        ?
      </Button>
    </Wrapper>
  );
}

export default HelpButton;
