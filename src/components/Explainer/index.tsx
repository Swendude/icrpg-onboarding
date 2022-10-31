import { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const Background = styled.div`
  position: fixed;
  display: flex;
  visibility: hidden;
  bottom: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.6);

  &.show {
    visibility: visible;
  }
`;

const Modal = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-style: solid;
  border-width: 1px 1px 0px 1px;
  border-color: ${(props) => props.theme.palette.common.text};
  background-color: ${(props) => props.theme.palette.common.background};
`;

const Descr = styled.p`
  text-align: center;
`;

const Title = styled.h2`
  padding-bottom: 1rem;
`;

const Closer = styled.button`
  width: 5rem;
  height: 5rem;
  color: ${(props) => props.theme.palette.common.background};
  background-color: ${(props) => props.theme.palette.common.foreground};
  border-color: ${(props) => props.theme.palette.common.foreground};
  border-style: solid;
  border-radius: 50px;
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.palette.common.foreground};
    background-color: ${(props) => props.theme.palette.common.background};
  }
`;
const Explainer = () => {
  const { state, hideModal } = useAppContext();
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <Background className={state.showModal ? "show" : ""}>
      <Modal>
        <Title>🗡 Strength</Title>
        <Descr>
          Put points into STR to create a melee fighter, a crusher, a
          bar-bending, boulder-throwing behemoth who smashes his way through
          problems.
        </Descr>
        <Closer onClick={() => hideModal()}>X</Closer>
      </Modal>
    </Background>
  );
};

export default Explainer;
