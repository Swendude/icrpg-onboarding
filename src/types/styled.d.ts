// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    borderRadiusTop: string;
    borderRadiusBottom: string;
    borderRadiusLeft: string;
    palette: {
      common: {
        background: string;
        text: string;
        foreground: string;
      };
    };
  }
}
