import styled from "styled-components";

export const RoundedTop = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  color: ${(props) => props.theme.palette.common.text};
`;
