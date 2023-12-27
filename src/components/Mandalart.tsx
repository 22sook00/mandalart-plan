import { SookGrid } from "react-sook-style";
import { MandalartData, MandalartInitType } from "../data/initGoal";
import * as SC from "../styles/mandalart.styles";
import * as FlexSC from "../styles/flex.styles";
import { Fragment, useState } from "react";
import MandalartItem, { MandalartItemDataProps } from "./MandalartItem";
import MandalartBottom from "./MandalartBottom";
import Dialog from "./common/Dialog";
import { useEffect } from "react";
import Form from "../components/common/Form";

import MandalartFormContent from "./MandalartFormContent";

const Mandalart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mainGoal, setMainGoal] = useState<string>("");
  const [MandalartData, setMandalartData] = useState<MandalartItemDataProps[]>([
    MandalartInitType,
  ]);
  const [selectGoal, setSelectGoal] = useState<string>("");

  const [step, setsTep] = useState(1);
  const handleContainerClick = (e: any) => {
    // .container를 클릭할 때만 isActive를 토글합니다.
    if (e.target.classList.contains("container")) {
      setIsActive(!isActive);
    }
  };

  //직접 열었을때.
  const handleOpenDialog = (list: any) => {
    setIsOpen(true);
    setSelectGoal(list);
  };

  const handleSubmitGoal = (data: any) => {
    console.log(data);

    setMainGoal(data && Object.values(data)[0]);
    setIsSubOpen(true);
  };

  useEffect(() => {
    //맨 처음 목표가 없으면 1단계 목표설정.
    if (!selectGoal) {
      setIsOpen(true);
    }
  }, [selectGoal]);

  return (
    <SC.MandalartContainer>
      <SC.MandalartTitle>2024 만다라트 계획표</SC.MandalartTitle>
      <FlexSC.FlexCol
        style={{ overflow: "scroll", height: "100%", paddingBottom: "150px" }}
        gap={20}
        items="center"
      >
        {/*완성된 만다라트*/}
        <SookGrid col={"repeat(3, 1fr)"} gap={12}>
          {Array.from({ length: 9 }).map((_, idx) => {
            return (
              <Fragment key={`mandalartItem-${idx + 1}`}>
                <MandalartItem
                  MandalartSubData={MandalartData.find(
                    (goal) => goal.id === idx + 1
                  )}
                  handleOpenDialog={handleOpenDialog}
                />
              </Fragment>
            );
          })}
        </SookGrid>
      </FlexSC.FlexCol>

      <MandalartBottom />

      {isOpen && (
        <Dialog handleClosePopup={() => setIsOpen(false)}>
          <Form
            //handleClosePopup={() => setIsOpen(false)}
            //value={selectGoal || "mainGoal"}
            onSubmit={handleSubmitGoal}
          >
            <SookGrid col={"repeat(3, 1fr)"} gap={12}>
              {Array.from({ length: 9 }).map((_, idx) => {
                return (
                  <Fragment key={`mandalartItem-${idx + 1}`}>
                    <MandalartFormContent
                      title={
                        idx === 4
                          ? "🍒 핵심 목표를 입력해주세요."
                          : "🍊 주요 목표를 입력해주세요."
                      }
                      selectGoal={idx === 4 ? "mainGoal" : `subGoal-${idx}`}
                    />
                  </Fragment>
                );
              })}
            </SookGrid>
          </Form>
        </Dialog>
      )}
    </SC.MandalartContainer>
  );
};

export default Mandalart;
