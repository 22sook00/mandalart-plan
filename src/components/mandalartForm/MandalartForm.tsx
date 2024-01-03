import { Fragment, useEffect, useRef, useState } from "react";
import { SookGrid } from "react-sook-style";
import { MandalartData } from "../../data/initGoal";
import Input from "../common/Input";
import { INPUT_PLACEHOLDER } from "../../data/formData";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

import { FlexBox } from "../../styles/flex.styles";
import ResetIcon from "../common/icons/reset";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { mymandalartState } from "../../atoms/mandalartAtom";

import * as FormSC from "../../styles/input.styles";
import * as SC from "../../styles/mandalartForm.styles";

const MandalartForm = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const methods = useForm<any>({
    mode: "onChange",
    defaultValues: {},
  });
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = methods;
  const [mainGoal, subGoal] = useWatch({
    control,
    name: ["mainGoal", "subGoal"],
  });

  //const [mainContent, setMainContent] = useState("메인목표");
  //const [subContent, setSubContent] = useState("");
  //const [detailContent, setDetailContent] = useState();
  //const contentEditable = useRef<HTMLDivElement | null>(null);

  const setMyMandalart = useSetRecoilState(mymandalartState);
  const getMyMandalart = useRecoilValue(mymandalartState);
  const handleSubmitTotalGoal = (data: any) => {
    setMyMandalart(data);
  };

  useEffect(() => {
    if (subGoal) {
      Array.from({ length: 9 }).map((_, idx) => {
        return setValue(`detail-${idx}[4]`, subGoal[idx]);
      });
    }
  }, [setValue, subGoal]);

  useEffect(() => {
    setValue("mainGoal", getMyMandalart.mainGoal);
    setValue("subGoal", getMyMandalart.subGoal);
    Array.from({ length: 9 }).map((_, idx) => {
      return setValue(`detail-${idx}`, getMyMandalart[`detail-${idx}`]);
    });

    //setMainContent(getMyMandalart.mainGoal);
    //setSubContent(getMyMandalart.subGoal);
    //Array.from({ length: 9 }).map((_, idx) => {
    //  return setDetailContent(getMyMandalart[`detail-${idx}`]);
    //});
  }, [
    getMyMandalart,
    getMyMandalart.mainGoal,
    getMyMandalart.subGoal,
    setValue,
  ]);

  const handleSaveImage = async () => {
    if (!captureRef.current) return;

    try {
      const div = captureRef.current;
      const canvas = await html2canvas(div, { scale: 1 });
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
    <div id="mandalartForm">
      <FormProvider {...methods}>
        <FormSC.FormContainer onSubmit={handleSubmit(handleSubmitTotalGoal)}>
          <SC.MandalartFormSubmitSection>
            <SC.MandalartButtons type="reset">
              <ResetIcon />
            </SC.MandalartButtons>
            <FlexBox gap={12}>
              <SC.MandalartButtons type="submit">임시저장</SC.MandalartButtons>
              <SC.MandalartButtons onClick={handleSaveImage} type="button">
                이미지 저장
              </SC.MandalartButtons>
            </FlexBox>
          </SC.MandalartFormSubmitSection>
          <SC.MandalartCaptureSection ref={captureRef}>
            <SookGrid col={"repeat(3, 1fr)"} gap={20}>
              {Array.from({ length: 9 }).map((_, idx) => {
                return (
                  <SC.MandalartFormItem key={`sub-${idx}`}>
                    {idx === 4 ? (
                      <>
                        {MandalartData.map((list, subIdx) => {
                          return (
                            <Fragment key={`mandalartItem-${subIdx + 1}`}>
                              <SC.MandalartFormSubItem
                                isMain={list.isMain}
                                readOnly={!list.isMain && !mainGoal}
                              >
                                <Input
                                  isMain={list.isMain}
                                  maxLength={16}
                                  placeholder={
                                    list.isMain
                                      ? INPUT_PLACEHOLDER.mainGoal
                                      : `목표 ${subIdx + 1}`
                                  }
                                  value={
                                    list.isMain
                                      ? "mainGoal"
                                      : `subGoal[${subIdx}]`
                                  }
                                  required={true}
                                  readOnly={!list.isMain && !mainGoal}
                                />
                                {/*<SC.MandalartContentful
                                  isMain={list.isMain}
                                  readOnly={!list.isMain && !mainGoal}
                                  contentEditable="true"
                                  //onInput={(e) =>
                                  //  handleInput(e, list.isMain, subIdx)
                                  //}
                                  suppressContentEditableWarning
                                >
                                  {list.isMain
                                    ? mainContent
                                    : subContent[subIdx]}
                                </SC.MandalartContentful>*/}
                              </SC.MandalartFormSubItem>
                            </Fragment>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {Array.from({ length: 9 }).map((_, detailIdx) => {
                          return (
                            <SC.MandalartFormSubItem
                              readOnly={detailIdx === 4}
                              key={`detail-${detailIdx}`}
                            >
                              <Input
                                maxLength={16}
                                placeholder={
                                  detailIdx !== 4
                                    ? INPUT_PLACEHOLDER.detailGoal
                                    : "키워드"
                                }
                                value={`detail-${idx}[${detailIdx}]`}
                                readOnly={detailIdx === 4}
                              />
                            </SC.MandalartFormSubItem>
                          );
                        })}
                      </>
                    )}
                  </SC.MandalartFormItem>
                );
              })}
            </SookGrid>
          </SC.MandalartCaptureSection>
        </FormSC.FormContainer>
      </FormProvider>
    </div>
  );
};

export default MandalartForm;
