import styled from "styled-components";
import HeroHeader from "./components/HeroHeader";
import { useHeroContext } from "./context/heroContext";
import DetailsSection from "./sections/DetailsSection";
import { createGlobalStyle } from "styled-components";
import StatsSection from "./sections/StatsSection";

const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
    font-size: 1.4rem;
    }
`;

const AppWrapper = styled.div`
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

const AppBody = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h2`
  color: ${(props) => props.theme.palette.common.foreground};
`;

const HeaderDescr = styled.p`
  color: ${(props) => props.theme.palette.common.foreground};
  font-style: italic;
`;

const AppSpacer = styled.div`
  position: relative;
  height: 0px;
  width: 100%;
  border-style: dashed;
  border-width: 1px 0 0 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-color: ${(props) => props.theme.palette.common.text};
`;

const HeaderSpacer = styled(AppSpacer)`
  margin-top: 0;
`;

function App() {
  // const { hero } = useHeroContext();

  // const { hero, setName } = context;
  return (
    <AppWrapper>
      <Global />
      <HeroHeader />

      <AppBody>
        <HeaderSpacer />
        <HeaderTitle>Details</HeaderTitle>
        <HeaderDescr>
          Who are you? Where do you come from? Most important, what shall we
          call you?
        </HeaderDescr>
        <DetailsSection />
        <AppSpacer />
        <HeaderTitle>Stats</HeaderTitle>
        <HeaderDescr>How good are you in things?</HeaderDescr>
        <StatsSection />
      </AppBody>
    </AppWrapper>
  );
}

export default App;
