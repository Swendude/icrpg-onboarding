import styled from "styled-components";

const InfoText = styled.p`
  margin: 1.5rem;
`;

function DescriptionInfo({
  description,
  notSetMsg
}: {
  description: string | undefined;
  notSetMsg: string;
}) {
  if (description) {
    return (
      <>
        <InfoText>{description}</InfoText>
      </>
    );
  }
  return (
    <>
      <InfoText>{notSetMsg}</InfoText>
    </>
  );
}

export default DescriptionInfo;
