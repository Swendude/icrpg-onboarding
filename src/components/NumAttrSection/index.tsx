import styled from "styled-components";
import NumAttrEditor from "../NumAttrEditor";

const Editors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

function ObjKeys<Obj extends {}>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[];
}

function NumAttrSection<KType extends string>({
  attrObj,
  setter
}: {
  attrObj: Record<KType, number>;
  setter: (k: KType, v: number) => void;
}) {
  return (
    <Editors>
      {ObjKeys(attrObj).map((k) => (
        <NumAttrEditor attr={k} value={attrObj[k]} setter={setter} />
      ))}
    </Editors>
  );
}

export default NumAttrSection;
