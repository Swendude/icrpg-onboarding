import { useHeroContext } from "../../context/heroContext";
import { FormBlock, FormLabel, FormInputText } from "./styles";

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
