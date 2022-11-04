import styled from "styled-components";
import { useHeroContext } from "../../context/heroContext";
import { RoundedTop } from "../../styles/defaults";
const HeaderContainer = styled(RoundedTop)`
  width: 100%;
  padding: 1.2rem 2.5rem;
  border: none;
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
const HeroDescr = styled.span`
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
        <HeroDescr>
          {" "}
          {hero.bioform ? `the ${hero.bioform.name}` : ""}{" "}
          {hero.type ? hero.type.name : ""}
        </HeroDescr>
      </HeroTitle>
      <SavedStatus>
        {isSaved ? "● Hero saved" : "○ Hero saving soon"}
      </SavedStatus>
    </HeaderContainer>
  );
};

export default HeroHeader;
