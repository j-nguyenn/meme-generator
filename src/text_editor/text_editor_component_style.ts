import { css } from "emotion";

export interface TextEditorComponentStyleProps {}

export const textEditorComponentStyle = (
  props: TextEditorComponentStyleProps
) => css`
  label: text-editor-component;
  padding-top: 45px;
  .text-editor-widget-toolbar {
    position: absolute;
    top: -52px;
    left: 0;
  }

  .text-editor-widget-main {
    padding-top: 4px;
    position: relative;
    min-height: 300px;
    height: 100%;
    border: 1px solid;
    border-radius: 4px;

    .text-editor-widget-main-textarea {
      width: 100%;
      height: 100%;
      &:focus {
        outline: none;
      }
    }
  }
`;
