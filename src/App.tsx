import styled from "styled-components";
import Header from "./components/Header";
import DetailsSection from "./components/DetailsSection";
import { createGlobalStyle } from "styled-components";
import StatsSection from "./components/StatsSection";
import Explainer from "./components/Explainer";

const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
    font-size: 1.4rem;
    }
`;

const Wrapper = styled.div`
  max-width: 88vw;
  margin: 0 auto;
  margin-top: 2vh;
  margin-bottom: 2vh;
  min-height: 96vh;
  border: 5px solid;
  border-color: ${(props) => props.theme.palette.common.text};
  border-radius: ${(props) => props.theme.borderRadiusTop};
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HTitle = styled.h2`
  color: ${(props) => props.theme.palette.common.foreground};
`;

const HDescr = styled.p`
  color: ${(props) => props.theme.palette.common.foreground};
  font-style: italic;
`;

const Spacer = styled.div`
  position: relative;
  height: 0px;
  width: 100%;
  border-style: dashed;
  border-width: 1px 0 0 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-color: ${(props) => props.theme.palette.common.text};
`;

const HSpacer = styled(Spacer)`
  margin-top: 0;
`;

function App() {
  // const { hero } = useHeroContext();

  // const { hero, setName } = context;
  return (
    <Wrapper>
      <Global />
      <Header />
      <Main>
        <HSpacer />
        <HTitle>Details</HTitle>
        <HDescr>
          Who are you? Where do you come from? Most important, what shall we
          call you?
        </HDescr>
        <DetailsSection />
        <Spacer />
        <HTitle>Stats</HTitle>
        <HDescr>How good are you in things?</HDescr>
        <StatsSection />
      </Main>
      <Explainer />
    </Wrapper>
  );
}

export default App;
