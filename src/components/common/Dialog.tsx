import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as SC from "../../styles/dialog.styles";
import { SookButton } from "react-sook-style";
import { useFormContext } from "react-hook-form";

interface DialogProps {
  handleClosePopup: any;
  children: React.ReactNode;
  description?: string;
  customHeight?: string;
}

const Dialog = ({
  handleClosePopup,
  children,
  description,
  customHeight,
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
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <SC.CardPopupLayer>
        <SC.PopupBackground onClick={handleClosePopup} />
        <SC.CardPopupContainer>
          <SC.CardPopupBody customHeight={customHeight}>
            {children}
          </SC.CardPopupBody>

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
