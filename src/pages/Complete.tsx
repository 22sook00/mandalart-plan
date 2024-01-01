import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { SookButton, SookCard, SookGrid } from "react-sook-style";
import { MandalartData } from "../data/initGoal";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import MandalartBottom from "../components/MandalartBottom";
import { useNavigate } from "react-router-dom";
import { completeState, step3State } from "../atoms/mandalartAtom";
import * as SC from "../styles/mandalart.styles";

const Complete = () => {
  const navigate = useNavigate();

  const getTotalGoal = useRecoilValue(step3State);
  const setCompleteGoal = useSetRecoilState(completeState);
  //console.log("getTOtal", getTotalGoal.getSubGoal);
  const [subList, setSubList] = useState<any | undefined>(
    Object.values(getTotalGoal.getSubGoal).slice(
      0,
      Object.values(getTotalGoal.getSubGoal).length - 1
    )
  );

  const [detailList, setDetailList] = useState();
  const [updatedDetailList, setUpdatedDetailList] = useState<any>([]);

  useEffect(() => {
    const result = {} as any;

    for (const key in getTotalGoal.data) {
      // key에서 -0을 제외한 문자열 값
      const subGoalName = key.split("-")[0];

      // subList에 해당하는 요소 찾기
      const subGoal = subList.find(
        (item: string) => item.split(/ +/).join("") === subGoalName
      );

      // 찾았을 경우
      if (subGoal) {
        // 결과 객체에 subGoal이 없다면 초기화
        if (!result[subGoal]) {
          result[subGoal] = [];
        }

        // includes 배열 생성하고 detail 값을 넣어주기
        result[subGoal].push(getTotalGoal.data[key]);
      }
    }

    setDetailList(result);
  }, [getTotalGoal.data, subList]);

  useEffect(() => {
    if (detailList) {
      const updatedData = Object.fromEntries(
        Object.entries(detailList).map(([key, items]: any) => {
          return [key, [...items.slice(0, 4), key, ...items.slice(4)]];
        })
      );

      const orderedDetailList = subList.map((item: any) => ({
        [item]: updatedData[item],
      }));

      setUpdatedDetailList(
        orderedDetailList?.map((el: any[]) => Object.values(el)[0])
      );

      setCompleteGoal({
        subList,
        detailList: orderedDetailList?.map((el: any[]) => Object.values(el)[0]),
      });
    }
  }, [detailList, setCompleteGoal, subList]);

  //console.log(updatedDetailList);

  return (
    <SC.MandalartCompleteContainer>
      <SC.MandalartTitle>만다라트가 완성되었습니다 🎉</SC.MandalartTitle>
      <SC.MandalartSubTitle>
        하나씩 실천해 나가며 성장하는, 멋진 2024년을 보내요!
      </SC.MandalartSubTitle>
      <SookButton
        customStyle={{
          marginTop: "20px",
          backgroundImage:
            "linear-gradient(to right, #7cf2e4, #5cbdf6, #2dd1be)",
        }}
        size="lg"
        onClick={() => navigate("/my-mandalart")}
      >
        완성된 만다라트 보러가기
      </SookButton>
      <SC.MandalartGridContainer col={"repeat(3, 1fr)"} gap={20}>
        {updatedDetailList?.map((list: any, idx: number) => {
          //console.log(list);

          return (
            <Fragment key={`${list}-${idx}`}>
              {list === undefined ? (
                <SookGrid col={"repeat(3, 1fr)"} gap={3} key={`detail-${idx}`}>
                  {subList.map((list: any, id: number) => {
                    return (
                      <Fragment key={`${list}-${id}`}>
                        <SookCard
                          customStyle={{
                            boxShadow: id === 4 && "0 0 10px #00a1ff",
                            border: id === 4 ? "2px solid #00a1ff" : "#fff",
                          }}
                          size="sm"
                        >
                          <p>{list}</p>
                        </SookCard>
                      </Fragment>
                    );
                  })}
                </SookGrid>
              ) : (
                <SookGrid col={"repeat(3, 1fr)"} gap={3} key={idx}>
                  {list?.map((el: string, i: number) => {
                    return (
                      <div key={`${i}-${el}`}>
                        <SookCard
                          customStyle={{
                            border: i === 4 ? "2px solid #17b9aa" : "#fff",
                          }}
                          size="sm"
                        >
                          <p>{el}</p>
                        </SookCard>
                      </div>
                    );
                  })}
                </SookGrid>
              )}
            </Fragment>
          );
        })}
        <MandalartBottom nextText={"저장"} prevUrl="/step3" />
      </SC.MandalartGridContainer>
    </SC.MandalartCompleteContainer>
  );
};

export default Complete;
