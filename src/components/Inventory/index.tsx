import styled from "styled-components";
import { Default, RoundedTop, withDefault } from "../../styles/defaults";
import startingLoot from "../../data/startingLoot";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Item } from "../../types/hero";
import AdderBlocks from "../AdderBlocks";

const Wrapper = styled(RoundedTop)``;

const Header = styled.div`
  border-bottom: 1px solid;
`;

const Status = styled.h3`
  padding: 1.5rem;
`;

const Inventory = () => {
  return (
    <Wrapper>
      <Header>
        <Status>Choose 4 items!</Status>
      </Header>
      <ItemScroller items={startingLoot} />
    </Wrapper>
  );
};

const Root = styled(ScrollArea.Root)`
  height: 40rem;
  overflow: "hidden";
`;

const Viewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
`;

const Thumb = styled(ScrollArea.Thumb)`
  ${(props) => withDefault(props)}
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.palette.common.foreground};
`;

const Scrollbar = styled(ScrollArea.Scrollbar)`
  width: 1.2rem;
`;

const ItemScroller = ({ items }: { items: Item[] }) => (
  <Root>
    <Viewport>
      <div>
        {items.map((item, i) => (
          <ItemView key={i} item={item} />
        ))}
      </div>
    </Viewport>
    <Scrollbar orientation="vertical">
      <Thumb />
    </Scrollbar>
    <ScrollArea.Corner />
  </Root>
);

const ItemBox = styled(Default)`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadiusTop};
  padding: 1.5rem;
  padding-left: 2rem;
`;
const ItemHeader = styled.h3`
  padding-bottom: 0.5rem;
`;
const ItemDescr = styled.p``;

const PickButton = styled.button`
  ${(props) => withDefault(props)}
  font-family: inherit;
  cursor: pointer;
  padding: 2rem;
  margin-top: 2rem;
  width: 8rem;
  align-self: center;
`;

const ItemCat = styled.span`
  font-size: 1rem;
  padding-left: 2rem;
`;

const ItemAdders = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: dashed 1px;
`;
const ItemView = ({ item }: { item: Item }) => {
  return (
    <ItemBox>
      <ItemHeader>
        {item.name}
        <ItemCat>{item.category}</ItemCat>
      </ItemHeader>
      {/* <PickButton>pick</PickButton> */}
      <ItemDescr>{item.description}</ItemDescr>
      {item.adder ? (
        <ItemAdders>
          <AdderBlocks adder={item.adder} />
        </ItemAdders>
      ) : (
        <></>
      )}
    </ItemBox>
  );
};

export default Inventory;
