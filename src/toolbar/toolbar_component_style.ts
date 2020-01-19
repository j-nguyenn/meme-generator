import { css, cx } from "emotion";

export interface ToolbarComponentStyleProps {}

export const toolbarComponentStyle = (props: ToolbarComponentStyleProps) => css`
  label: toolbar-component;
  display: flex;
  margin-left: -4px;
  padding-bottom: 12px;
`;
