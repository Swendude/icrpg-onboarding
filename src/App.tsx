import React, { useState } from "react";
import styled from "styled-components";
import HeroHeader from "./components/HeroHeader";
import TabChoice from "./components/TabChoice";
import { useHeroContext } from "./context/heroContext";
import DetailsSection from "./sections/DetailsSection";
import { createGlobalStyle } from "styled-components";
import StatsSection from "./sections/StatsSection";

const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.common.background};
    color: ${(props) => props.theme.palette.common.text};
    }
`;

const AppWrapper = styled.div`
  max-width: 88vw;
  margin: 0 auto;
  margin-top: 2vh;
  margin-bottom: 2vh;
  min-height: 96vh;
  border: 1px solid #e5e5e5;
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

const HeaderTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  color: ${(props) => props.theme.palette.common.foreground};
`;

const HeaderDescr = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.common.foreground};
  font-style: italic;
`;

const HeaderWrapper = styled.div`
  margin-top: 2.5rem;
`;

const AppHeader = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => (
  <HeaderWrapper>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderDescr>{description}</HeaderDescr>
  </HeaderWrapper>
);

function App() {
  const { hero } = useHeroContext();

  // const { hero, setName } = context;
  return (
    <AppWrapper>
      <Global />
      <HeroHeader name={hero.name} />
      <AppBody>
        <AppHeader
          title="Details"
          description="Who are you? Where do you come from? Most important, what shall we call you?"
        />
        <DetailsSection />
        <AppHeader title="Stats" description="How good are you in things?" />
        <StatsSection />
      </AppBody>
    </AppWrapper>
  );
}

export default App;
