import React, { Fragment } from "react";
import { SookCard, SookGrid } from "react-sook-style";

import { useRecoilValue } from "recoil";
import { completeState } from "../atoms/mandalartAtom";
import MandalartBottom from "../components/MandalartBottom";

import * as SC from "../styles/mandalart.styles";

const MyMandalart = () => {
  const getMyGoal = useRecoilValue(completeState);
  const { subList, detailList } = getMyGoal;

  return (
    <SC.MandalartCompleteContainer>
      <SC.MandalartGridContainer col={"repeat(3, 1fr)"} gap={20}>
        {detailList?.map((list: any, idx: number) => {
          return (
            <>
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
                          {list}
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
                          {el}
                        </SookCard>
                      </div>
                    );
                  })}
                </SookGrid>
              )}
            </>
          );
        })}
        {/*<MandalartBottom prevText={"메인"} nextText="PDF 저장" />*/}
      </SC.MandalartGridContainer>
    </SC.MandalartCompleteContainer>
  );
};

export default MyMandalart;
