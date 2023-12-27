import React from "react";
import { SookButton } from "react-sook-style";
import * as SC from "../../styles/groupButton.styles";

interface GroupButtonProps {
  handleClosePopup: any;
  handleConfirmPopup?: any;
  cancelText?: string;
  confirmText?: string;
  disabled?: boolean;
}

const GroupButton = ({
  confirmText = "입력",
  cancelText = "닫기",
  handleClosePopup,
  handleConfirmPopup,
  disabled,
}: GroupButtonProps) => {
  return (
    <SC.GroupButtonContainer>
      {handleClosePopup && (
        <SookButton
          customStyle={{ width: "100px" }}
          theme="light"
          onClick={handleClosePopup}
        >
          {cancelText}
        </SookButton>
      )}
      {handleConfirmPopup && (
        <SookButton
          customStyle={{ width: "100px" }}
          onClick={handleConfirmPopup}
          disabled={disabled}
        >
          {confirmText}
        </SookButton>
      )}
    </SC.GroupButtonContainer>
  );
};

export default GroupButton;
