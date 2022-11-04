import { useHeroContext } from "../../context/heroContext";
import { RoundedTop } from "../../styles/defaults";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled(RoundedTop)`
  width: 100%;
  padding: 1rem;
  border-bottom: none;
`;

const InputText = styled.textarea`
  resize: none;
  background-color: ${(props) => props.theme.palette.common.foreground};
  color: ${(props) => props.theme.palette.common.background};
  padding: 1.5rem;
`;

const DetailSection = () => {
  const { hero, setName, setStory } = useHeroContext();
  return (
    <Wrapper>
      <Block>
        <Label as="label" htmlFor="name">
          ✏️ Name
        </Label>
        <InputText
          name="name"
          value={hero.name}
          onChange={(e) => setName(e.target.value)}
          rows={1}
        />
      </Block>
      <Block>
        <Label as="label" htmlFor="story">
          📖 Story
        </Label>
        <InputText
          name="story"
          value={hero.story}
          onChange={(e) => setStory(e.target.value)}
          rows={3}
        />
      </Block>
    </Wrapper>
  );
};

export default DetailSection;
