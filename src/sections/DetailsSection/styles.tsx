import styled from "styled-components";

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

export const FormLabel = styled.label`
  font-size: 1.8rem;
  width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.palette.common.text};
  border: 1px solid;
  border-bottom: none;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  border-color: ${(props) => props.theme.palette.common.foreground};
`;

export const FormInputText = styled.textarea`
  border-radius: 0px;
  width: calc(100%);
  border-width: 1px;
  resize: none;
  background-color: ${(props) => props.theme.palette.common.foreground};
  color: ${(props) => props.theme.palette.common.background};
  border-radius: ${(props) => props.theme.borderRadiusBottom};
  border-color: ${(props) => props.theme.palette.common.foreground};
  outline: 0;
  padding: 1rem;
  :focus {
    box-shadow: 0px 0px 0 2px black inset;
  }
`;
