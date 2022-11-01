import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;
const Text = styled.p`
  text-align: center;
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
        with ❤️ and React. For use with{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hankerinferinale.wixsite.com/icrpg"
        >
          ICRPG
        </a>
        !
      </Text>
    </Wrapper>
  );
};

export default Footer;
