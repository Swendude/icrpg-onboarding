import { useHeroContext } from "../../context/heroContext";

import styled from "styled-components";

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

export const FormLabel = styled.label`
  width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.palette.common.text};
  border: 1px solid;
  border-bottom: none;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-color: ${(props) => props.theme.palette.common.foreground};
`;

export const FormInputText = styled.textarea`
  border-radius: 0px;
  width: calc(100%);
  border-width: 1px;
  resize: none;
  background-color: ${(props) => props.theme.palette.common.foreground};
  color: ${(props) => props.theme.palette.common.background};
  border-radius: ${(props) => props.theme.borderRadiusBottom};
  border-color: ${(props) => props.theme.palette.common.foreground};
  outline: 0;
  padding: 1rem;
  :focus {
    box-shadow: 0px 0px 0 2px black inset;
  }
`;

const DetailSection = () => {
  const { hero, setName, setStory } = useHeroContext();
  return (
    <form>
      <FormBlock>
        <FormLabel htmlFor="name">✏️ Name</FormLabel>
        <FormInputText
          name="name"
          value={hero.name}
          onChange={(e) => setName(e.target.value)}
          rows={1}
        />
      </FormBlock>
      <FormBlock>
        <FormLabel htmlFor="story">📖 Story</FormLabel>
        <FormInputText
          name="story"
          value={hero.story}
          onChange={(e) => setStory(e.target.value)}
          rows={3}
        />
      </FormBlock>
    </form>
  );
};

export default DetailSection;
