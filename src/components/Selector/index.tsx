import * as Select from "@radix-ui/react-select";
import styled, { StyledComponent } from "styled-components";
import { withRoundedTop } from "../../styles/defaults";

const Item = styled(Select.Item)`
  font-size: 2rem;
  padding: 2rem;
  border-top: dashed 1px;
  &[data-highlighted] {
    background-color: ${(props) => props.theme.palette.common.foreground};
    color: ${(props) => props.theme.palette.common.background};
    box-shadow: none;
    border-radius: inherit;
  }
`;

const Trigger = styled(Select.Trigger)`
  ${(props) => withRoundedTop(props)};
  background-color: ${(props) => props.theme.palette.common.background};
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const Content = styled(Select.Content)`
  background-color: ${(props) => props.theme.palette.common.background};
  width: 80%;
  border-style: solid;
  border-width: 2px;
  border-radius: ${(props) => props.theme.borderRadiusTop};

  & :first-child {
    border-top: none;
  }
`;

const Selector = ({
  options,
  value,
  onChange
}: {
  options: string[];
  value: string | undefined;
  onChange: (value: string) => void;
}) => {
  return (
    <Select.Root onValueChange={onChange} value={value || ""}>
      <Trigger>
        <Select.Value placeholder="Select a bioform" />
        <Select.Icon />
      </Trigger>
      <Select.Portal>
        <Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Item value={""}>
              <Select.ItemText>Select a bioform</Select.ItemText>
            </Item>
            {options.map((child, i) => (
              <Item value={child} key={i}>
                <Select.ItemText>{child}</Select.ItemText>
              </Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Selector;
