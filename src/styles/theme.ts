import { DefaultTheme } from "styled-components";

const makeDefaultTheme = (borderRadius: number) => ({
  borderRadius: `${borderRadius}px`,
  borderRadiusTop: `${borderRadius}px ${borderRadius}px 0 0`,
  borderRadiusBottom: `0 0 ${borderRadius}px ${borderRadius}px`,
  borderRadiusLeft: `${borderRadius}px 0 0 ${borderRadius}px`,
  palette: {
    common: {
      foreground: "#cccccc",
      background: "#1e1e1e",
      text: "#e5e5e5"
    }
  }
});

export const defaultTheme: DefaultTheme = makeDefaultTheme(7);
