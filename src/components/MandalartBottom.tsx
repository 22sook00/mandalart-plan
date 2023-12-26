import React from "react";
import { SookButton, SookFlex, SookGrid } from "react-sook-style";
import * as SC from "../styles/mandalart.styles";
import Progress from "./Progress";

const MandalartBottom = () => {
  return (
    <SC.MandalartBottom>
      <SookGrid col="1fr 200px" item="center">
        <Progress />
        <SookFlex col={false} justify="flex-end">
          <SookButton theme="light" onClick={() => console.log("reset")}>
            리셋
          </SookButton>
          <SookButton
            theme="success"
            //customStyle={{ background: "#1dcd9b" }}
            onClick={() => console.log("prev")}
          >
            이전
          </SookButton>
          <SookButton theme="success" onClick={() => console.log("next")}>
            다음
          </SookButton>
        </SookFlex>
      </SookGrid>
    </SC.MandalartBottom>
  );
};

export default MandalartBottom;
