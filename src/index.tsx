import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/globalStyle";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import NotFound from "./pages/NotFound";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <RouterProvider router={router} />
      <Global styles={globalStyles} />
    </RecoilRoot>
  </>
);
