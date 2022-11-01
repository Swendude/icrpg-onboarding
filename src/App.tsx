import styled from "styled-components";
import Header from "./components/Header";
import DetailsSection from "./components/DetailsSection";
import { createGlobalStyle } from "styled-components";
import StatsSection from "./components/StatsSection";
import Explainer from "./components/Explainer";
import HelpButton from "./components/HelpButton";
import Footer from "./components/Footer";
import HyperLinkedText from "./components/HyperLinkedText";

const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
    font-size: 1.4rem;
    }

  a {
    color: ${(props) => props.theme.palette.common.foreground};
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

const HTitleText = styled.h2`
  color: ${(props) => props.theme.palette.common.foreground};
`;

const HDescr = styled.p`
  color: ${(props) => props.theme.palette.common.foreground};
  font-style: italic;
  margin-bottom: 1rem;
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
  return (
    <>
      <Wrapper>
        <Global />
        <Header />
        <Main>
          <HSpacer />
          <HTitleText>Details</HTitleText>
          <HDescr>
            <HyperLinkedText
              text={
                "Who are you? Where do you come from? Most important, what shall we call you?"
              }
            />
          </HDescr>
          <DetailsSection />
          <Spacer />
          <HelpButton keyVal={"STATS"}>
            <HTitleText>Stats</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "What is your expertise? Are you an intelligent wizard or a legendary barbarian? You'll add the value of these STATS to the result of a D20 roll."
              }
            />
          </HDescr>
          <StatsSection />
        </Main>
      </Wrapper>
      <Explainer />
      <Footer />
    </>
  );
}

export default App;
