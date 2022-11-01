import styled from "styled-components";
import icrpgAttribution from "../../static/for_use_with_ICRPG.png";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  gap: 1rem;
`;
const Text = styled.p`
  text-align: center;
`;

const Attribution = styled.img`
  height: 3rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        Made{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Swendude/icrpg-onboarding"
        >
          open-source
        </a>{" "}
        with ❤️ and React.
      </Text>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://hankerinferinale.wixsite.com/icrpg"
      >
        <Attribution src={icrpgAttribution} alt="For use with ICRPG" />
      </a>
    </Wrapper>
  );
};

export default Footer;
