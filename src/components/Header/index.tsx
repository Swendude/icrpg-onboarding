import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
const HeaderContainer = styled.div`
  width: 100%;
  padding: 1.2rem 2.5rem;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  display: flex;
  justify-content: space-between;
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.palette.common.text};
`;

const SavedStatus = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.8;
  align-self: flex-end;
`;

const HeroName = styled.span``;
const HeroBF = styled.span`
  font-size: 1.6rem;
`;
const HeroHeader = () => {
  const { isSaved, hero } = useHeroContext();

  return (
    <HeaderContainer>
      <HeroTitle>
        <HeroName>
          ⚔️ {hero.name.length > 0 ? hero.name : "Unnamed hero"}
        </HeroName>
        <HeroBF> the {hero.bioform ? hero.bioform.name : ""}</HeroBF>
      </HeroTitle>
      <SavedStatus>
        {isSaved ? "● Hero saved" : "○ Hero saving soon"}
      </SavedStatus>
    </HeaderContainer>
  );
};

export default HeroHeader;
