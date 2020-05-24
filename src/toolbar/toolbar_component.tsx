import * as React from "react";
import { ToolbarComponentProps } from "./toolbar_component.interfaces";
import { IconComponent } from "../icon/icon_component";
import { PRIMARY, BRIGHT } from "../constant/colors";
import { ColorChooserComponent } from "../color_chooser/color_chooser_component";
import { Command } from "../constant/variables";
import { toolbarComponentStyle } from "./toolbar_component_style";

export const ToolbarComponent = (props: ToolbarComponentProps) => {
  const { bold, italic, underline, align } = props;
  const iconStyle = {
    size: 18,
    color: {
      default: BRIGHT.WHITE,
      hover: BRIGHT.WHITE,
    },
    bgColor: {
      default: PRIMARY.PRIMARY_3,
      hover: PRIMARY.PRIMARY_2,
    },
  };

  function handleIconOnClick(id: string): void {
    props.onIconClick(id);
  }

  return (
    <div className={toolbarComponentStyle({})}>
      <div className="toolbar-left">
        <IconComponent
          id={Command.TEXT_BOLD}
          isActive={bold}
          iconClass="fa fa-bold"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.TEXT_ITALIC}
          isActive={italic}
          iconClass="fa fa-italic"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.TEXT_UNDERLINE}
          isActive={underline}
          iconClass="fa fa-underline"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.ALIGN_LEFT}
          isActive={align === Command.ALIGN_LEFT}
          iconClass="fa fa-align-left"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.ALIGN_RIGHT}
          isActive={align === Command.ALIGN_RIGHT}
          iconClass="fa fa-align-right"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.ALIGN_CENTER}
          isActive={align === Command.ALIGN_CENTER}
          iconClass="fa fa-align-center"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.STRIKE_THROUGH}
          isActive={false}
          iconClass="fa fa-strikethrough"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.REMOVE_FORMAT}
          isActive={false}
          iconClass="fa fa-remove-format"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <ColorChooserComponent size={22} initialValue={PRIMARY.PRIMARY_1} />
      </div>
      <div className="toolbar-right">
        <IconComponent
          id={Command.UNDO}
          isActive={false}
          iconClass="fa fa-undo"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
        <IconComponent
          id={Command.REDO}
          isActive={false}
          iconClass="fa fa-redo"
          styleProps={iconStyle}
          onClick={(id) => handleIconOnClick(id)}
        />
      </div>
    </div>
  );
};
