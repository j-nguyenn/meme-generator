import * as React from "react";
import { css } from "emotion";
import { ColorProps } from "./color_chooser_component.interfaces";
import { PRIMARY } from "../constant/colors";

export const ColorChooserComponent = (props: ColorProps) => {
  const [currentColor, setColor] = React.useState(props.initialValue);
  return (
    <div
      className={colorChooserStyle({
        bgColor: currentColor,
        size: props.size,
        borderColor: PRIMARY.PRIMARY_1
      })}
    >
      <div className="color-chooser-wrapper">
        <input
          className="color-chooser-input"
          type="color"
          onChange={value => setColor(value.target.value)}
        />
      </div>
    </div>
  );
};

export interface ColorChooserProps {
  bgColor: string;
  size: number;
  borderColor: string;
}

export const colorChooserStyle = (props: ColorChooserProps) => css`
  label: color-chooser;
  border: 1px solid ${props.bgColor};
  border-radius: 4px;
  padding: 0 16px 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;

  .color-chooser-wrapper {
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: 15px;
    background-color: ${props.bgColor};
    .color-chooser-input {
      opacity: 0;
    }
  }
`;
