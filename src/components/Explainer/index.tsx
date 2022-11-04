import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import modalInfos, { ModalInfos } from "../../data/modalInfo";
import { RoundedTop } from "../../styles/defaults";
import HyperLinkedText from "../HyperLinkedText";

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

const Modal = styled(RoundedTop)`
  min-width: 30rem;
  max-width: 70vw;
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  align-items: center;
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
  border-style: solid;
  border-radius: 50px;
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${(props) => props.theme.palette.common.foreground};
    background-color: ${(props) => props.theme.palette.common.background};
  }
`;

const Explainer = () => {
  const { state, hideModal } = useAppContext();
  return (
    <Background className={state.showModal ? "show" : ""}>
      <Modal>
        {state.modalInfoKey ? (
          <>
            <Title>
              {modalInfos[state.modalInfoKey as keyof ModalInfos].title}
            </Title>
            <Descr>
              <HyperLinkedText
                text={modalInfos[state.modalInfoKey as keyof ModalInfos].descr}
              />
            </Descr>
          </>
        ) : (
          <>SOMETHING WENT WRONG!</>
        )}

        <Closer onClick={() => hideModal()}>✕</Closer>
      </Modal>
    </Background>
  );
};

export default Explainer;
