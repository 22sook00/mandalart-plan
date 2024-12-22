import { memo, useRef, useState } from "react";
import { SookGrid } from "react-sook-style";

import { FormProvider, useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

import { FlexBox, FlexCol } from "../../styles/flex.styles";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { mobileBottomSheet, mymandalartState } from "../../atoms/mandalartAtom";

import * as FormSC from "../../styles/input.styles";
import * as SC from "../../styles/mandalartForm.styles";
import { MandalartFormValueType } from "../../data/defaultValue";
import MandalartFormItem from "../../components/mandalartForm/MandalartFormItem";
import MandalartMobileBottomSheet from "../../components/mandalartForm/MandalartMobileBottomSheet";
import Dialog from "src/components/common/Dialog";

const MandalartForm = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const setMyMandalart = useSetRecoilState(mymandalartState);
  const getMyMandalart = useRecoilValue(mymandalartState);
  const [isOpen, setIsOpen] = useRecoilState(mobileBottomSheet);

  const methods = useForm<any>({
    mode: "onChange",
    defaultValues: getMyMandalart ?? MandalartFormValueType,
  });
  const {
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isDirty },
  } = methods;
  const [isAlert, setIsAlert] = useState(false);

  const handleSubmitTotalGoal = (data: any) => {
    setMyMandalart(data);
  };

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

  const handleResetAlert = () => {
    reset(MandalartFormValueType);
    setIsAlert(false);
  };

  return (
    <div id="mandalartForm">
      <FormProvider {...methods}>
        <FormSC.FormContainer onSubmit={handleSubmit(handleSubmitTotalGoal)}>
          <SC.MandalartFormSubmitSection>
            <SC.MandalartButtons
              theme={"light"}
              type="button"
              onClick={() => setIsAlert(true)}
            >
              리셋하기
            </SC.MandalartButtons>
            <FlexBox gap={12}>
              <SC.MandalartButtons onClick={handleSaveImage} type="button">
                이미지 내보내기
              </SC.MandalartButtons>
              <SC.MandalartButtons type="submit">저장하기</SC.MandalartButtons>
            </FlexBox>
          </SC.MandalartFormSubmitSection>

          <SC.ImageSection ref={captureRef}>
            <SC.MandalartSubTitle>
              작은 목표가 만드는 큰 변화,
            </SC.MandalartSubTitle>
            <SC.MandalartTitle>✨ My Mandalart 2025 </SC.MandalartTitle>
            <SookGrid col={"repeat(3, 1fr)"} gap={12}>
              <MandalartFormItem value={"leftTop"} />
              <MandalartFormItem value={"top"} />
              <MandalartFormItem value={"rightTop"} />
              <MandalartFormItem value={"left"} />
              <MandalartFormItem value={"center"} />
              <MandalartFormItem value={"right"} />
              <MandalartFormItem value={"leftBottom"} />
              <MandalartFormItem value={"bottom"} />
              <MandalartFormItem value={"rightBottom"} />
            </SookGrid>
          </SC.ImageSection>

          <MandalartMobileBottomSheet
            isOpen={isOpen}
            toggleSheet={() => setIsOpen((prev) => !prev)}
          />
          {isAlert && (
            <Dialog handleClosePopup={() => setIsAlert(false)}>
              <FlexCol w={"100%"} justify="space-between" items="center">
                <SC.MandalartDialogTitle>
                  {`입력한 내용을 전부\n 초기화 하시겠습니까?`}
                </SC.MandalartDialogTitle>

                <FlexBox w="100%" gap={12}>
                  <SC.MandalartButtons
                    style={{ flex: 1 }}
                    theme={"light"}
                    onClick={() => setIsAlert(false)}
                  >
                    닫기
                  </SC.MandalartButtons>
                  <SC.MandalartButtons
                    style={{ flex: 1 }}
                    type="button"
                    onClick={handleResetAlert}
                  >
                    리셋하기
                  </SC.MandalartButtons>
                </FlexBox>
              </FlexCol>
            </Dialog>
          )}
        </FormSC.FormContainer>
      </FormProvider>
    </div>
  );
};

export default memo(MandalartForm);
