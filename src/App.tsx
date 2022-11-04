import styled from "styled-components";
import Header from "./components/Header";
import DetailsSection from "./components/DetailsSection";
import { createGlobalStyle } from "styled-components";
import Explainer from "./components/Explainer";
import HelpButton from "./components/HelpButton";
import Footer from "./components/Footer";
import HyperLinkedText from "./components/HyperLinkedText";
import { useHeroContext } from "./context/heroContext";
import NumAttrSection from "./components/NumAttrSection";
import { useGameContext } from "./context/gameContext";
import BioformSection from "./components/BioformSection";
import { RoundedTop } from "./styles/defaults";
const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
    font-size: 1.4rem;
    }

  a {
    color: ${(props) => props.theme.palette.common.foreground};
  }
  
  * {
    border-color: ${(props) => props.theme.palette.common.foreground};
  }
`;

const Wrapper = styled(RoundedTop)`
  max-width: 88vw;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  min-height: 96vh;
  border-width: 5px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 640px) {
    margin-top: 0;
    max-width: 100vw;
    border: none;
  }
`;

const Main = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HTitleText = styled.h2`
  color: ${(props) => props.theme.palette.common.text};
`;

const HDescr = styled.p`
  color: ${(props) => props.theme.palette.common.text};
  /* font-style: italic; */
  font-size: 1.8rem;
  margin: 2rem 0;
`;

const Spacer = styled.div`
  position: relative;
  height: 0px;
  width: 100%;
  border-style: dashed;
  border-width: 1px 0 0 0;
  margin: 4rem 0;
`;

const HSpacer = styled(Spacer)`
  margin-top: 0;
`;

function App() {
  const { hero, final, setStat, setEffort } = useHeroContext();
  const { settings } = useGameContext();
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
          <HelpButton keyVal={"BIOFORM"}>
            <HTitleText>Bioform</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "What are you? What cultural traditions do you follow, and which ones have you chosen not to adopt?"
              }
            />
          </HDescr>
          <BioformSection />
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
          <NumAttrSection
            attrObj={hero.stats}
            final={final.final.stats}
            bioform={final.bioform.stats}
            loot={final.loot.stats}
            setter={setStat}
            max={settings.maxStats}
          />
          <Spacer />
          <HelpButton keyVal={"EFFORT"}>
            <HTitleText>Effort</HTitleText>
          </HelpButton>
          <HDescr>
            <HyperLinkedText
              text={
                "Are you willing to put in the sweat? How good are you at making progress, EFFORT will determine the succes rate of your actions!"
              }
            />
          </HDescr>
          <NumAttrSection
            attrObj={hero.effort}
            final={final.final.effort}
            bioform={final.bioform.effort}
            loot={final.loot.effort}
            setter={setEffort}
            max={settings.maxEffort}
          />
        </Main>
      </Wrapper>
      <Explainer />
      <Footer />
    </>
  );
}

export default App;
