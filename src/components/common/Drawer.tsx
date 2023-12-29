import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as SC from "../../styles/drawer.styles";
import ChevronLeftIcon from "./icons/chevronLeft";

import { SookButton, SookFlex } from "react-sook-style";
import { useFormContext } from "react-hook-form";

interface DialogProps {
  handleClosePopup: any;
  children: React.ReactNode;
  description?: string;
  customHeight?: string;
  title?: string;
}

const Drawer = ({
  handleClosePopup,
  children,
  title,
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
      <SC.DrawerLayer>
        <SC.DrawerBackground onClick={handleClosePopup} />

        <SC.DrawerContainer>
          <SC.DrawerBody customHeight={customHeight}>
            <SookFlex
              col={false}
              gap={10}
              item={"center"}
              customStyle={{ height: "fit-content" }}
            >
              <ChevronLeftIcon onClick={handleClosePopup} />
              {title && <SC.DrawerTitle>{title}</SC.DrawerTitle>}
            </SookFlex>
            {children}
          </SC.DrawerBody>
        </SC.DrawerContainer>
      </SC.DrawerLayer>,
      ref.current
    );
  }

  return null;
};
export default Drawer;
