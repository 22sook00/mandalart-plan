import { useNavigate } from "react-router-dom";
import { SookButton, SookFlex } from "react-sook-style";
import * as SC from "../styles/mandalart.styles";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <SC.MandalartNotFoundContainer>
      {" "}
      <SookFlex
        justify="center"
        item="center"
        customStyle={{ height: "100vh" }}
        gap={20}
      >
        <SC.MandalartImg src="/404.png" alt="page-not-found-img" />
        <SC.MandalartTitle>만다라트 정보가 없어요</SC.MandalartTitle>
        <div className="buttonContainer">
          <SookButton
            customStyle={{
              marginTop: "20px",
              padding: "8px 30px",
              color: "#fff",
              backgroundImage:
                "linear-gradient(90deg, #17b9aa, #00a1ff, #06b6d4)",
            }}
            onClick={() => navigate("/step1")}
          >
            만다라트 만들러 가기
          </SookButton>
        </div>
      </SookFlex>
    </SC.MandalartNotFoundContainer>
  );
};

export default NotFound;
