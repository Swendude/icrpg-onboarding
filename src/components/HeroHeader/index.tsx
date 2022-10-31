import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem;
  padding-left: 2.5rem;
  padding-bottom: 1.2rem;
  border-radius: ${(props) => props.theme.borderRadiusTop};
`;

const HeroName = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 2rem;
  color: ${(props) => props.theme.palette.common.text};
`;
const HeroHeader = ({ name }: { name: string }) => (
  <HeaderContainer>
    <HeroName>⚔️ {name.length > 0 ? name : "Unnamed hero"}</HeroName>
  </HeaderContainer>
);

export default HeroHeader;
