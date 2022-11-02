import styled from "styled-components";
import NumAttrEditor from "../NumAttrEditor";
import { objKeys } from "../../utils/helpers";
const Editors = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

function NumAttrSection<KType extends string>({
  attrObj,
  setter
}: {
  attrObj: Record<KType, number>;
  setter: (k: KType, v: number) => void;
}) {
  return (
    <Editors>
      {objKeys(attrObj).map((k) => (
        <NumAttrEditor attr={k} value={attrObj[k]} setter={setter} />
      ))}
    </Editors>
  );
}

export default NumAttrSection;
