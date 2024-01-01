import React from "react";
import { SookCard, SookFlex, SookGrid } from "react-sook-style";
import * as LinkSC from "../../styles/link.styles";
import * as SC from "../../styles/mandalart.styles";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { step3State } from "../../atoms/mandalartAtom";

const Init = () => {
  const getTotalGoal = useRecoilValue(step3State);
  const isMyGoal = Object.keys(getTotalGoal)?.length;

  return (
    <SookFlex
      gap={20}
      justify="center"
      item="center"
      customStyle={{ height: "100vh" }}
    >
      <SookGrid col="100px 1fr" gap={0} item="center">
        <SC.MandalartImg
          type={"init"}
          src="/mandalartMain.png"
          alt="mandalart-main-img"
        />
        <SookFlex customStyle={{ height: "fit-content" }} gap={10}>
          {/*<SC.MandalartImg src="/mandalartMain.png" alt="mandalart-main-img" />*/}
          <SC.MandalartSubTitle>갓생 실천의 첫 시작,</SC.MandalartSubTitle>
          <SC.GradationTitle>만다라트 계획표</SC.GradationTitle>
        </SookFlex>
      </SookGrid>
      <SookGrid
        gap={10}
        item={"center"}
        col={"420px"}
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
      </SookGrid>{" "}
      <SookFlex item="center" customStyle={{ height: "fit-content" }}>
        <LinkSC.LinkContainer>
          <Link to={"/step1"}>만다라트 작성</Link>
        </LinkSC.LinkContainer>
        <LinkSC.LinkContainer>
          <Link to={isMyGoal ? "/my-mandalart" : "/notFound"}>
            나의 만다라트
          </Link>
        </LinkSC.LinkContainer>
        <LinkSC.LinkContainer>
          <Link target={"_blank"} to={"https://next-sookdev.vercel.app/"}>
            만다라트 예시
          </Link>
        </LinkSC.LinkContainer>
      </SookFlex>
    </SookFlex>
  );
};

export default Init;
