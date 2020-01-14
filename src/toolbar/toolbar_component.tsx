import * as React from "react";
import { css, cx } from "emotion";
import { ToolbarComponentProps } from "./toolbar_component.interfaces";
import { IconComponent } from "../icon/icon_component";
import { PRIMARY, BRIGHT } from "../constant/colors";
import { ColorChooserComponent } from "../color_chooser/color_chooser_component";
import { Command } from "../constant/variables";

export const ToolbarComponent = (props: ToolbarComponentProps) => {
  const iconStyle = {
    size: 18,
    color: {
      default: PRIMARY.PRIMARY_4,
      hover: BRIGHT.BRIGHT_2
    },
    bgColor: {
      default: PRIMARY.PRIMARY_3,
      hover: PRIMARY.PRIMARY_2
    }
  };

  function handleIconOnClick(id: string): void {
    props.onIconClick(id);
  }

  return (
    <div style={{ display: "flex" }}>
      <IconComponent
        id={Command.TEXT_BOLD}
        iconClass="fa fa-bold"
        styleProps={iconStyle}
        onClick={id => handleIconOnClick(id)}
      />
      <IconComponent
        id={Command.TEXT_ITALIC}
        iconClass="fa fa-italic"
        styleProps={iconStyle}
        onClick={id => handleIconOnClick(id)}
      />
      <IconComponent
        id={Command.TEXT_UNDERLINE}
        iconClass="fa fa-underline"
        styleProps={iconStyle}
        onClick={id => handleIconOnClick(id)}
      />
      <IconComponent
        id={Command.ALIGN_LEFT}
        iconClass="fa fa-align-left"
        styleProps={iconStyle}
        onClick={id => handleIconOnClick(id)}
      />
      <IconComponent
        id={Command.ALIGN_RIGHT}
        iconClass="fa fa-align-right"
        styleProps={iconStyle}
        onClick={id => handleIconOnClick(id)}
      />
      <IconComponent
        id={Command.ALIGN_CENTER}
        iconClass="fa fa-align-center"
        styleProps={iconStyle}
        onClick={id => handleIconOnClick(id)}
      />
      <ColorChooserComponent size={22} initialValue={PRIMARY.PRIMARY_1} />
    </div>
  );
};
