import React from "react";
import { SookButton, SookFlex } from "react-sook-style";
import * as SC from "../../styles/link.styles";
import { Link } from "react-router-dom";

const Init = () => {
  return (
    <SookFlex
      justify="center"
      item="center"
      customStyle={{ height: "100vh" }}
      col={false}
      gap={20}
    >
      <SC.LinkContainer>
        <Link to={"/step1"}>🫧 처음생성이유</Link>
      </SC.LinkContainer>
      <SC.LinkContainer>
        <Link to={"/complete"}>🔥 이미있슈</Link>
      </SC.LinkContainer>
    </SookFlex>
  );
};

export default Init;
