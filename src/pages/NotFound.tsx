import React from "react";
import { useNavigate } from "react-router-dom";
import { SookButton, SookFlex } from "react-sook-style";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <SookFlex
      justify="center"
      item="center"
      customStyle={{ height: "100vh" }}
      col={false}
      gap={20}
    >
      <SookButton
        customStyle={{
          marginTop: "20px",
          backgroundImage:
            "linear-gradient(to right, #7cf2e4, #5cbdf6, #2dd1be)",
        }}
        size="lg"
        onClick={() => navigate("/step1")}
      >
        만다르트 만들러 가기
      </SookButton>
    </SookFlex>
  );
};

export default NotFound;
