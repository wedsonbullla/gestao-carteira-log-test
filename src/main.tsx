import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pt-br";
import App from "./App";
import { theme } from "./theme";
import "./styles.css";

dayjs.extend(customParseFormat);
dayjs.locale("pt-br");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR} theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
