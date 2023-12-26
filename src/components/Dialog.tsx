import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as SC from "../styles/dialog.styles";
import { SookButton } from "react-sook-style";

interface DialogProps {
  handleClosePopup: any;
  handleConfirmPopup?: any;
  children: React.ReactNode;
  description?: string;
  cancelText?: string;
  confirmText?: string;
}

const Dialog = ({
  handleClosePopup,
  handleConfirmPopup,
  children,
  description,
  cancelText = "닫기",
  confirmText = "확인",
}: DialogProps) => {
  const ref = useRef<any>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById("root");
      ref.current = dom;
    }

    // 배경 스크롤 막기
    document.body.classList.add("hidden-scroll");

    return () => {
      // 현재 떠 있는 다이얼로그가 없을 떄 배경 스크롤 막기 해제
      // #products-view 는 상품상세의 하단 고정바 이므로 제외하고 카운팅
      if (
        document.querySelectorAll("#dialog-root > div:not(#products-view)")
          .length === 0
      ) {
        document.body.classList.remove("hidden-scroll");
      }
    };
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <SC.CardPopupLayer>
        <SC.PopupBackground onClick={handleClosePopup} />
        <SC.CardPopupContainer>
          <SC.CardPopupBody>{children}</SC.CardPopupBody>
          <SC.PopupButtonWrapper>
            {handleClosePopup && (
              <SookButton theme="outline" onClick={handleClosePopup}>
                {cancelText}
              </SookButton>
            )}
            {handleConfirmPopup && (
              <SookButton onClick={handleConfirmPopup}>
                {confirmText}
              </SookButton>
            )}
          </SC.PopupButtonWrapper>
          {description && (
            <SC.CardPopupDescription>{description}</SC.CardPopupDescription>
          )}
        </SC.CardPopupContainer>
      </SC.CardPopupLayer>,
      ref.current
    );
  }

  return null;
};
export default Dialog;
