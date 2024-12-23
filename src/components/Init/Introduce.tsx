import { SookGrid } from "react-sook-style";
import * as SC from "../../styles/mandalart.styles";
const Introduce = () => {
  return (
    <SookGrid
      gap={10}
      item={"center"}
      col={"350px"}
      customStyle={{ height: "fit-content", width: "fit-content" }}
    >
      <SC.MandalartList>
        <p>Manda+la(목적을 달성하다)와 Art(기술)의 합성어</p>
        <li>목표를 달성하는 기술을 뜻하는 만다라트는</li>
        <li>
          큰 목표를 세우고, 그 목표를 실천하기 위한 행동을 명확하고 간결하게
          보여줘요.
        </li>

        <p>더 쉬워진 실천</p>
        <li>
          구체적인 행동 계획을 작성하면서 머릿속에 있는 생각들이 정리되요.
        </li>
        <li>목표를 쪼개고 구체화 할수록 실천하기 쉬워져요,</li>
        <li>그대로 하면 되니까요!</li>
      </SC.MandalartList>
    </SookGrid>
  );
};

export default Introduce;
