import CloseIcon from "../common/icons/CloseIcon";
import styled from "@emotion/styled";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import Input from "src/components/common/Input";
import { mobileSelectCell } from "src/atoms/mandalartAtom";
import { FlexBox } from "src/styles/flex.styles";
import * as SC from "../../styles/mandalartForm.styles";

const slideIn = `
  @keyframes slideIn {
    0% {
      transform: translateY(100%); /* 바닥 아래 */
    }
    50% {
      transform: translateY(-10px); /* 약간 튕기는 효과 */
    }
    100% {
      transform: translateY(0); /* 최종 위치 */
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
`;
const Sheet = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 20px 16px 30px;
  z-index: 50;
  transform: translateY(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-out;

  min-height: 160px;
  ${(props) => props.isOpen && slideIn};
`;

const SheetHandle = styled.div`
  width: 3rem;
  height: 0.25rem;
  background-color: #d1d5db;
  border-radius: 9999px;
  margin: 0 auto;
`;
const SheetTitle = styled.h3`
  margin: 20px 0 12px 0;
  font-weight: 600;
`;
const MandalartMobileBottomSheet = ({ isOpen, toggleSheet }) => {
  const { value, idx: detailIdx, type } = useRecoilValue(mobileSelectCell);
  const isMain = useMemo(() => detailIdx === 4, [detailIdx]);

  const mapping: Record<string, number> = useMemo(() => {
    return {
      leftTop: 1,
      top: 2,
      rightTop: 3,
      left: 4,
      right: 6,
      leftBottom: 7,
      bottom: 8,
      rightBottom: 9,
    };
  }, []);
  const idxMapping: Record<number, string> = useMemo(() => {
    return {
      "1": "첫번째",
      "2": "두번째",
      "3": "세번째",
      "4": "네번째",
      "6": "다섯번째",
      "7": "여섯번째",
      "8": "일곱번째",
      "9": "마지막",
    };
  }, []);
  const IDX = detailIdx < 5 ? detailIdx + 1 : detailIdx;

  return (
    <>
      {isOpen && <Backdrop onClick={toggleSheet} />}
      <Sheet isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <SheetHandle />
        <SheetTitle>
          {isMain
            ? `🔥 핵심 목표를 입력하세요`
            : `${idxMapping[detailIdx + 1]} 목표를 입력하세요`}
        </SheetTitle>
        <FlexBox gap={8} w={"100%"}>
          {type === "center" && value ? (
            <Input
              placeholder={isMain ? `핵심 목표` : `목표 ${IDX}`}
              value={value || ""}
              style={{ flex: 1 }}
            />
          ) : (
            <Input
              placeholder={isMain ? `목표 ${mapping[value]}` : "세부 목표"}
              value={isMain ? `${value}.mainGoal` : `${value}.subGoals[${IDX}]`}
              style={{ flex: 1 }}
            />
          )}
          <SC.MandalartButtons type="button" onClick={toggleSheet}>
            저장하기
          </SC.MandalartButtons>
        </FlexBox>
      </Sheet>
    </>
  );
};

export default MandalartMobileBottomSheet;
