import React from "react";
import { SookFlex } from "react-sook-style";
import * as LinkSC from "../../styles/link.styles";
import * as SC from "../../styles/mandalart.styles";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { step3State } from "../../atoms/mandalartAtom";

const Init = () => {
  const getTotalGoal = useRecoilValue(step3State);
  const isMyGoal = Object.keys(getTotalGoal)?.length;

  return (
    <SookFlex justify="center" item="center" customStyle={{ height: "100vh" }}>
      <SC.MandalartTitle>만다르트 계획표</SC.MandalartTitle>
      <SookFlex
        col={false}
        gap={20}
        justify="center"
        customStyle={{ height: "300px" }}
      >
        <LinkSC.LinkContainer>
          <Link to={"/step1"}>🫧 만다르트 작성하기</Link>
        </LinkSC.LinkContainer>
        <LinkSC.LinkContainer>
          <Link to={isMyGoal ? "/complete" : "/notFound"}>
            내 만다르트 보러가기
          </Link>
        </LinkSC.LinkContainer>
      </SookFlex>
    </SookFlex>
  );
};

export default Init;
