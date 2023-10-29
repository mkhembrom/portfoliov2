import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./context/theme";
import { ModelContextProvider } from "./context/model";
import { Delayed, Layout } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ModelContextProvider>
        <Delayed>
          <Layout>
            <App />
          </Layout>
        </Delayed>
      </ModelContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
