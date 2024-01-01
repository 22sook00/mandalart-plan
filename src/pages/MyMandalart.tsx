import React, { Fragment, useRef } from "react";
import { SookButton, SookCard, SookGrid } from "react-sook-style";

import { useRecoilValue } from "recoil";
import { completeState } from "../atoms/mandalartAtom";

import * as SC from "../styles/mandalart.styles";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

const MyMandalart = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const getMyGoal = useRecoilValue(completeState);
  const { subList, detailList } = getMyGoal;

  const handleSaveImage = async () => {
    if (!captureRef.current) return;

    try {
      const div = captureRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "mandalart.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <SC.MandalartCompleteContainer>
      <div className="button-wrapper">
        <SookButton size="sm" onClick={handleSaveImage}>
          이미지로 저장
        </SookButton>
      </div>
      <SC.MandalartGridContainer
        ref={captureRef}
        type="my"
        col={"repeat(3, 1fr)"}
        gap={20}
      >
        {detailList?.map((list: any, idx: number) => {
          return (
            <Fragment key={`myMandalart-${idx}`}>
              {!list ? (
                <SookGrid col={"repeat(3, 1fr)"} gap={3} key={`detail-${idx}`}>
                  {subList.map((list: any, id: number) => {
                    return (
                      <SC.MandalartCompleteCardWrapper key={`${list}-${id}`}>
                        <SookCard
                          customStyle={{
                            boxShadow: id === 4 && "0 0 10px #84c9fe",
                            border: id === 4 ? "2px solid #00a1ff" : "#fff",
                          }}
                          size="sm"
                        >
                          <p>{list}</p>
                        </SookCard>
                      </SC.MandalartCompleteCardWrapper>
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
                            boxShadow: i === 4 && "0 0 10px #8afaef",
                            border: i === 4 ? "2px solid #17b9aa" : "#a4aeef",
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
        {/*<MandalartBottom prevText={"메인"} nextText="PDF 저장" />*/}
      </SC.MandalartGridContainer>
    </SC.MandalartCompleteContainer>
  );
};

export default MyMandalart;
