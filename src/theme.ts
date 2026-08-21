import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Asap, sans-serif",
    colorPrimary: "#141833",
    colorError: "#b60000",
    borderRadius: 6,
    borderRadiusLG: 8,
    controlHeight: 32,
    controlHeightLG: 40,
    colorText: "rgba(0, 0, 0, 0.88)",
    colorBorder: "rgba(0, 0, 0, 0.15)",
    colorSplit: "rgba(0, 0, 0, 0.06)",
  },
  components: {
    Button: {
      borderRadiusLG: 8,
      fontWeight: 400,
    },
    Table: {
      headerBg: "#f2f3f4",
      headerColor: "rgba(0, 0, 0, 0.88)",
      cellPaddingBlock: 16,
    },
    Tag: {
      defaultBg: "rgba(0, 0, 0, 0.02)",
      defaultColor: "rgba(0, 0, 0, 0.88)",
    },
  },
};
