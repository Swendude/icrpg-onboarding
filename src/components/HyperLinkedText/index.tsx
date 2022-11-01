import modalInfos, { InfoKeys } from "../../data/modalInfo";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const Link = styled.span`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

const HyperLinkedText = ({ text }: { text: string }) => {
  // TODO: exclude punctuation from hyperlinks

  const { showModal } = useAppContext();
  const punctRe = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const words = text.split(" ");
  return (
    <span>
      {words.map((word) => {
        if (Object.keys(modalInfos).includes(word.replace(punctRe, ""))) {
          const key: InfoKeys = word.replace(punctRe, "") as InfoKeys;
          return <Link onClick={() => showModal(key)}>{word}</Link>;
        } else {
          return ` ${word} `;
        }
      })}
    </span>
  );
};

export default HyperLinkedText;
