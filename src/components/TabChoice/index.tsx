import { ReactElement, ReactNode } from "react";
import { JsxElement } from "typescript";

type TabsChoiceProps = {
  tabs: { [key: string]: ReactElement };
  current: string;
};
const TabChoice = ({ tabs, current }: TabsChoiceProps): ReactElement => {
  if (!tabs[current]) {
    throw Error("No tab with that key");
    return <></>;
  }
  return tabs[current];
};

export default TabChoice;
