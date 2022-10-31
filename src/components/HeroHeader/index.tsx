import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem;
  padding-left: 2.5rem;
  padding-bottom: 1.2rem;
  border-radius: ${(props) => props.theme.borderRadiusTop};
`;

const HeroName = styled.h1`
  color: ${(props) => props.theme.palette.common.text};
`;

const SavedName = styled.p`
  font-style: italic;
`;
const HeroHeader = () => {
  const { isSaved, hero } = useHeroContext();

  return (
    <HeaderContainer>
      <HeroName>
        ⚔️ {hero.name.length > 0 ? hero.name : "Unnamed hero"}
      </HeroName>
      <SavedName>{`Hero saved: ${isSaved}`}</SavedName>
    </HeaderContainer>
  );
};

export default HeroHeader;
