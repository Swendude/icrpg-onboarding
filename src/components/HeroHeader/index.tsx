import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
const HeaderContainer = styled.div`
  width: 100%;
  padding: 1.2rem 2.5rem;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  display: flex;
  justify-content: space-between;
`;

const HeroName = styled.h1`
  color: ${(props) => props.theme.palette.common.text};
`;

const SavedName = styled.p`
  font-style: italic;
  font-size: 1rem;
  opacity: 0.2;
  align-self: flex-end;
`;
const HeroHeader = () => {
  const { isSaved, hero } = useHeroContext();

  return (
    <HeaderContainer>
      <HeroName>
        ⚔️ {hero.name.length > 0 ? hero.name : "Unnamed hero"}
      </HeroName>
      <SavedName>{isSaved ? "Hero saved" : "Hero saving soon"}</SavedName>
    </HeaderContainer>
  );
};

export default HeroHeader;
