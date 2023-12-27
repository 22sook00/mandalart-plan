import { useState } from "react";
import { SookButton, SookFlex } from "react-sook-style";
import GroupButton from "./components/common/GroupButton";
import Mandalart from "./components/Mandalart";
import { Link } from "react-router-dom";
import Init from "./components/Init/Init";

function App() {
  return (
    <SookFlex
      justify="center"
      item="center"
      customStyle={{ padding: "0 40px" }}
    >
      {/*<Mandalart />*/}
      <Init />
    </SookFlex>
  );
}

export default App;
