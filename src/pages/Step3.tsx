import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SookFlex, SookGrid } from "react-sook-style";
import Form from "../components/common/Form";

import {
  step3State,
  step2State,
  step3DetailState,
} from "../atoms/mandalartAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MandalartBottom from "../components/MandalartBottom";
import { errorButtonState } from "../atoms/errorAtom";
import { useState } from "react";
import * as SC from "../styles/mandalart.styles";
import MandalartForm from "../components/step3/MandalartForm";

import Drawer from "../components/common/Drawer";

const Step3 = () => {
  const navigate = useNavigate();
  const setDetailGoal = useSetRecoilState(step3State);
  const getSubGoal = useRecoilValue(step2State);

  const goalArr = Object.entries(getSubGoal);

  const [selectSubGoal, setSelectSubGoal] = useState(goalArr[0][1] || "");
  const [isOpen, setIsOpen] = useState(false);
  const isError = useRecoilValue(errorButtonState);

  const handleSelectSubGoal = (selectItem: string) => {
    setIsOpen(true);
    setSelectSubGoal(selectItem);
  };

  //console.log("goalArr", goalArr);

  const handleSubmitTotalSubGoal = (data: any) => {
    console.log("STEP@", data);

    //리코일에 두번째 스텝 넣기
    //넣은 후 스텝T3로 이동.
    setDetailGoal({ getSubGoal, data });
    setIsOpen(false);
    navigate("/complete");
  };

  return (
    <SC.MandalartContainer>
      <Form onSubmit={handleSubmitTotalSubGoal}>
        <SookGrid col="1fr 320px" gap={30} justify="center">
          <SC.MandalartStep3ListContainer>
            <SC.MandalartTitle className="title">
              {getSubGoal.mainGoal}
            </SC.MandalartTitle>
            <SC.MandalartStep3List>
              <SookGrid col="repeat(3, 1fr)" gap={14}>
                {goalArr.map((subArr, i) => {
                  return (
                    <SookFlex
                      col={false}
                      key={`sub-goal-${i}`}
                      item="center"
                      gap={10}
                    >
                      <SC.MandalartStep3Card
                        disabled={i === 4}
                        onClick={() =>
                          i !== 4 && handleSelectSubGoal(subArr[1] as string)
                        }
                      >
                        <div className="card-item">
                          <p>{`${subArr[1]}`}</p>
                        </div>
                      </SC.MandalartStep3Card>
                    </SookFlex>
                  );
                })}
              </SookGrid>
            </SC.MandalartStep3List>
          </SC.MandalartStep3ListContainer>

          {isOpen && (
            <Drawer
              title={`${selectSubGoal}`.split(/ +/).join("")}
              handleClosePopup={() => setIsOpen(false)}
            >
              <MandalartForm
                setIsOpen={setIsOpen}
                selectSubGoal={`${selectSubGoal}`.split(/ +/).join("")}
              />
            </Drawer>
          )}
        </SookGrid>
        <MandalartBottom prevUrl="/step2" nextDisabled={isError} />
      </Form>
    </SC.MandalartContainer>
  );
};

export default Step3;
