import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Router from "../../routes/commonRoutes";
import { BrowserRouter } from "react-router-dom";
import { SignProvider } from "../../context/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SignProvider>
        <Suspense fallback={"loading"}>
          <Router />
        </Suspense>
      </SignProvider>
    </BrowserRouter>
  </React.StrictMode>
);
