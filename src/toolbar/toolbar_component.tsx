import * as React from "react";
import { css, cx } from "emotion";
import { ToolbarComponentProps } from "./toolbar_component.interfaces";
import { IconComponent } from "../icon/icon_component";

export const ToolbarComponent = (props: ToolbarComponentProps) => {
  return (
    <div style={{ display: "flex" }}>
      <IconComponent iconClass="fa fa-bold" />
      <IconComponent iconClass="fa fa-italic" />
      <IconComponent iconClass="fa fa-underline" />
      <IconComponent iconClass="fa fa-align-left" />
      <IconComponent iconClass="fa fa-align-right" />
      <IconComponent iconClass="fa fa-align-center" />
    </div>
  );
};
