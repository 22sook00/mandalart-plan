import { useState } from "react";
import { SookButton, SookFlex } from "react-sook-style";
import Dialog from "./components/Dialog";
import Mandalart from "./components/Mandalart";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SookFlex
      justify="center"
      item="center"
      customStyle={{ padding: "0 40px" }}
    >
      <SookButton onClick={() => setIsOpen(true)}>temp click</SookButton>
      {isOpen && (
        <Dialog handleClosePopup={() => setIsOpen(false)}>hihihi</Dialog>
      )}
      <Mandalart />
    </SookFlex>
  );
}

export default App;
