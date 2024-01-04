import React from "react";
import * as SC from "../../styles/aside.styles";

type AsideType = {
  children: React.ReactNode;
};
const Aside = ({ children }: AsideType) => {
  return <SC.AsideContianer>{children}</SC.AsideContianer>;
};

export default Aside;
