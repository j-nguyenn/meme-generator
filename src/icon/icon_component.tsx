import * as React from "react";
import {
  IconComponentProps,
  IconComponentStyleProps,
} from "./icon_component.interfaces";
import { css, cx } from "emotion";
import { PRIMARY, BRIGHT } from "../constant/colors";

export const iconComponentStyle = (
  props: IconComponentStyleProps,
  isActive: boolean
) => css`
  label: icon-component;
  width: ${props.size + "px" || "18px"};
  height: ${props.size + "px" || "18px"};
  padding: 4px 8px;
  margin: 0 4px;
  background-color: ${isActive ? props.bgColor.hover : props.bgColor.default};
  color: ${isActive ? BRIGHT.BRIGHT_2 : props.color.default};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${props.bgColor ? PRIMARY.PRIMARY_4 : undefined};
    color: ${props.color ? props.color.hover : undefined};
  }
`;

export const IconComponent = (props: IconComponentProps) => {
  const { id, iconClass, styleProps, isActive } = props;

  return (
    <div
      id={id}
      className={iconComponentStyle({ ...styleProps }, isActive)}
      onClick={() => props.onClick(id)}
    >
      <i className={iconClass}></i>
    </div>
  );
};
