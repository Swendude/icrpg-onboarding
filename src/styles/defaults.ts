import styled from "styled-components";

export const RoundedTop = styled.div`
  ${(props) => withRoundedTop(props)}
`;

export const Default = styled.div`
  ${(props) => withDefault(props)}
`;

export const withRoundedTop = (props: any): string => {
  const result = `border-style: solid;
    border-width: 1px;
    border-radius: ${props.theme.borderRadiusTop};
    color: ${props.theme.palette.common.text};
  `;
  return result;
};

export const withDefault = (props: any): string => {
  const result = `border-style: solid;
    background-color: ${props.theme.palette.common.background};
    border-width: 1px;
    color: ${props.theme.palette.common.text};
  `;
  return result;
};
