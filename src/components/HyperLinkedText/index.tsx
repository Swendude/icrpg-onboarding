import modalInfos, { ModalInfo } from "../../data/modalInfo";
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

  const allKeywords = modalInfos.reduce(
    (prev: string[], cur: ModalInfo) => [...prev, ...cur.keywords],
    []
  );

  return (
    <span>
      {words.map((word, i) => {
        if (allKeywords.includes(word.replace(punctRe, ""))) {
          const key = word.replace(punctRe, "");
          return (
            <Link key={i} onClick={() => showModal(key)}>
              {word}
            </Link>
          );
        } else {
          return ` ${word} `;
        }
      })}
    </span>
  );
};

export default HyperLinkedText;
