import styled from "styled-components";
import NumAttrEditor from "../NumAttrEditor";
import { objKeys, objValues } from "../../utils/helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Info = styled.p`
  padding-bottom: 1rem;
`;

const Editors = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

function NumAttrSection<KType extends string>({
  attrObj,
  setter,
  max
}: {
  attrObj: Record<KType, number>;
  setter: (k: KType, v: number) => void;
  max: number;
}) {
  const totalVal = objValues(attrObj).reduce((acc, cur) => acc + cur) as number;

  return (
    <Wrapper>
      <Info>
        You are allowed {max} points. Current:{totalVal}/{max}
      </Info>
      <Editors>
        {objKeys(attrObj).map((k) => (
          <NumAttrEditor
            attr={k}
            value={attrObj[k]}
            setter={setter}
            allowPlus={max > totalVal}
          />
        ))}
      </Editors>
    </Wrapper>
  );
}

export default NumAttrSection;
