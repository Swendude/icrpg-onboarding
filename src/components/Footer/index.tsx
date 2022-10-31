import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Made{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Swendude/icrpg-onboarding"
        >
          open-source
        </a>{" "}
        with ❤️ and React
      </p>
    </Wrapper>
  );
};

export default Footer;
