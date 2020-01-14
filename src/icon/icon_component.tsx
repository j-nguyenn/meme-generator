import * as React from "react";
import {
  IconComponentProps,
  IconComponentStyleProps
} from "./icon_component.interfaces";
import { css, cx } from "emotion";

export const iconComponentStyle = (props: IconComponentStyleProps) => css`
  label: icon-component;
  width: ${props.size || "18px"};
  height: ${props.size || "18px"};
  padding: 4px 8px;
  margin: 4px;
  background-color: ${props.bgColor ? props.bgColor.default : undefined};
  color: ${props.color ? props.color.default : undefined};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${props.bgColor ? props.bgColor.hover : undefined};
    color: ${props.color ? props.color.hover : undefined};
  }
`;

export const IconComponent = (props: IconComponentProps) => {
  const { id, iconClass, styleProps } = props;

  return (
    <div
      id={id}
      className={iconComponentStyle({ ...styleProps })}
      onClick={() => props.onClick(id)}
    >
      <i className={iconClass}></i>
    </div>
  );
};
