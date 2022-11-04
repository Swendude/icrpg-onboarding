import styled from "styled-components";

export const RoundedTop = styled.div`
  ${(props) => withRoundedTop(props)}
`;

export const withRoundedTop = (props: any): string => {
  const result = `border-style: solid;
    border-width: 1px;
    border-radius: ${props.theme.borderRadiusTop};
    color: ${props.theme.palette.common.text};
  `;
  return result;
};
