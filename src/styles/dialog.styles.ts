import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "./globalStyle";
import { keyframes } from "@emotion/react";
import { FlexBox, FlexCol } from "./flex.styles";

type DialogType = {
  customStyle?: any;
  customWidth?: string;
  customHeight?: string;
  customMargin?: string;
  customPadding?: string;
};

const showModalBg = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const showModalBox = keyframes`
  from {
    opacity: 0;
    margin-top: -30px;
  }

  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const popupLayer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: ${color.defaultGray};
  animation: ${showModalBg} 0.3s;
  overflow-y: scroll;
  z-index: 100;
`;
export const PopupBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const PopupTitle = styled.h2`
  word-break: keep-all;
  color: ${color.defaultGray};
  width: 100%;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 15px;
  }
`;

// 카드팝업
export const CardPopupLayer = styled(FlexCol)`
  ${popupLayer};
  align-items: center;
  justify-content: center;
`;
export const CardPopupContainer = styled.div<DialogType>`
  position: relative;
  min-width: 300px;
  /*width: ${({ customStyle }) => (customStyle ? customStyle : "340px")};*/
  display: flex;
  flex-direction: column;
  background-color: white;
  animation: ${showModalBox} 0.3s;

  /*height: 350px;
  width: 350px;*/
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  padding: 24px 20px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  .showBorder {
    z-index: 100;
    background: #fff;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
      drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  }
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;
export const CardPopupCloseContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const CardPopupBody = styled(FlexBox)<DialogType>`
  height: ${({ customHeight }) => (customHeight ? customHeight : "100%")};
  overflow-y: auto;
  width: 100%;
  > div {
    height: 100%;
  }
`;
export const CardPopupDescription = styled.div`
  margin-top: 15px;
  text-align: center;
`;
export const CardPopupClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  > svg {
    transition: all 0.3s;
    width: 32px;
    height: 32px;

    path {
      strokewidth: 2px;
    }
  }
`;

//다이얼로그 팝업
export const DialogPopupLayer = styled(FlexCol)`
  ${popupLayer};
`;
export const DialogPopupContainer = styled.div<DialogType>`
  position: relative;
  min-width: 340px;
  max-width: 700px;
  min-height: 200px;
  max-height: 95vh;
  width: ${({ customWidth }) => (customWidth ? `${customWidth}px` : "500px")};
  display: flex;
  flex-direction: column;
  padding: 0;

  background-color: white;
  animation: ${showModalBox} 0.3s;
  box-shadow: 0 5px 5px rgb(0 0 0 / 5%), 0 10px 30px rgb(0 0 0 / 20%);
  // overflow: hidden;

  .showBorder {
    z-index: 100;
    background: #fff;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
      drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: 100vh;
  }
`;
export const DialogPopupHeaderContainer = styled.div``;
export const DialogPopupHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;

  border-bottom: 1px solid #f0f0f0;
  padding: 14px 30px;
  /* max-height: 48px; */

  .backIcon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  .xIcon {
    width: fit-content;
    cursor: pointer;
    width: 32px;
    height: 32px;
    > svg,
    path {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 768px) {
    border-bottom: unset;
    padding: 12px 24px;
    max-height: 48px;

    .backIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;

      > svg {
        width: 24px;
        height: 24px;
      }
    }
    .xIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;

      > svg,
      path {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const PopupClose = styled.div`
  cursor: pointer;
  color: ${color.lightGray};
  height: 32px;
  > svg {
    transition: all 0.3s;
    width: 32px;
    height: 32px;

    path {
      strokewidth: 2px;
      fill: ${color.lightGray};
    }
  }
  &:hover {
    color: ${color.lightestGray};
  }
`;

export const PopupBody = styled.section`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  /* margin: 30px; */

  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const PopupFooter = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 18px 30px;
  border-top: 1px solid ${color.lightestGray};

  @media (max-width: 768px) {
    padding: 12px;
  }
`;
