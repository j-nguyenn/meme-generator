import * as React from "react";
import { fontSizeItems, fontFamilyItems } from "../constant/font";
import { Command, BackGroundType } from "../constant/variables";
import { TextEditorComponentProps } from "./text_editor_component.interfaces";
import { ToolbarComponent } from "../toolbar/toolbar_component";
import { textEditorComponentStyle } from "./text_editor_component_style";

// helpers
function rgbToHex(rgb: string): string {
  const splittedRGB = rgb
    .split("(")[1]
    .split(")")[0]
    .split(",");
  const hexString = splittedRGB.map(x => {
    x = parseInt(x).toString(16);
    return x.length === 1 ? `0${x}` : x;
  });
  return `#${hexString.join("")}`;
}

export const TextEditorWidgetComponent = (props: TextEditorComponentProps) => {
  const { initTextHTML, textColor, bgColor, bgImage } = props;

  const shades = { shade13: "#ffffff", shade3: "#37474f" };
  const INIT_COLOR = !!textColor ? textColor : shades.shade3;
  const INIT_FONT_FAMILY = fontFamilyItems[5];
  const INIT_FONT_SIZE = fontSizeItems[1];

  const [fontColor, setFontColor] = React.useState(INIT_COLOR);
  const [fontSize, setFontSize] = React.useState(INIT_FONT_SIZE.id);
  const [fontFamily, setFontFamily] = React.useState(INIT_FONT_FAMILY.id);

  const [backgroundImage, setBgImage] = React.useState(bgImage);
  const [backgroundColor, setBgColor] = React.useState(
    bgColor || shades.shade13
  );

  const [italic, setItalic] = React.useState(false);
  const [bold, setBold] = React.useState(false);
  const [underline, setUnderline] = React.useState(false);
  const [align, setAlign] = React.useState(Command.ALIGN_LEFT);

  const textAreaRef = React.useRef(null);

  const rangeRef = React.useRef({
    start: 0,
    end: 0,
    startNode: undefined,
    endNode: undefined
  });

  function setCaretPosition(): void {
    if ((window.getSelection() || {}).type !== "None") {
      const range: Range = window.getSelection().getRangeAt(0);
      const { startContainer, endContainer, startOffset, endOffset } = range;

      rangeRef.current = {
        end: endOffset,
        endNode: endContainer,
        start: startOffset,
        startNode: startContainer
      };
    }
  }

  function onMouseTextEditorUp(e: React.MouseEvent): void {
    setCurrentStyle(window.getSelection());
  }

  function onKeyTextEditorUp(e: React.KeyboardEvent): void {
    setCurrentStyle(window.getSelection());
  }

  function setCurrentStyle(currentSelection: Selection): void {
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = currentSelection;

    if (
      !anchorNode ||
      !focusNode ||
      anchorNode.nodeType !== 3 ||
      focusNode.nodeType !== 3
    ) {
      return;
    }
    const range: Range = document.createRange();

    range.setStart(anchorNode, anchorOffset);
    range.setEnd(focusNode, focusOffset);

    const selection: Selection = window.getSelection();

    [
      Command.TEXT_BOLD,
      Command.TEXT_ITALIC,
      Command.TEXT_UNDERLINE,
      Command.FONT_COLOR,
      Command.FONT_FAMILY,
      Command.FONT_SIZE,
      Command.ALIGN_LEFT,
      Command.ALIGN_RIGHT,
      Command.ALIGN_CENTER
    ].forEach(command => {
      const currentState: boolean = document.queryCommandState(command);
      const currentValue: string = document.queryCommandValue(command);

      switch (command) {
        case Command.TEXT_BOLD:
          setBold(currentState);
          break;
        case Command.TEXT_ITALIC:
          setItalic(currentState);
          break;
        case Command.TEXT_UNDERLINE:
          setUnderline(currentState);
          break;
        case Command.ALIGN_CENTER:
          if (currentState) {
            setAlign(Command.ALIGN_CENTER);
          }
          break;
        case Command.ALIGN_LEFT:
          if (currentState) {
            setAlign(Command.ALIGN_LEFT);
          }
          break;
        case Command.ALIGN_RIGHT:
          if (currentState) {
            setAlign(Command.ALIGN_RIGHT);
          }
          break;
        case Command.FONT_COLOR:
          const hexColor = rgbToHex(currentValue);
          hexColor && setFontColor(hexColor);
          break;
        case Command.FONT_SIZE:
          setFontSize(currentValue);
          break;
        case Command.FONT_FAMILY:
          const fontName = fontFamilyItems.find(
            item => item.label === currentValue
          );
          fontName && setFontFamily(fontName.id);
          break;
        default:
          break;
      }
    });

    if (selection.rangeCount > 0) {
      return;
    }

    selection.removeAllRanges();
    selection.addRange(range);
  }

  function restoreRange(): void {
    const range: Range = document.createRange();
    range.setStart(textAreaRef.current, 0);
    range.collapse(true);
    const nodeStack: Node[] = [textAreaRef.current];
    let node: Node,
      foundStart: boolean = false,
      stop: boolean = false;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == 3) {
        if (!foundStart && node === rangeRef.current.startNode) {
          range.setStart(rangeRef.current.startNode, rangeRef.current.start);
          foundStart = true;
        }
        if (foundStart && node === rangeRef.current.endNode) {
          range.setEnd(rangeRef.current.endNode, rangeRef.current.end);
          stop = true;
        }
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    const selection: Selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function execCommand(command: Command, value?: string): void {
    requestAnimationFrame(() => {
      restoreRange();
      document.execCommand(command, false, value);

      switch (command) {
        case Command.TEXT_ITALIC:
          setItalic(!italic);
          break;
        case Command.TEXT_BOLD:
          setBold(!bold);
          break;
        case Command.TEXT_UNDERLINE:
          setUnderline(!underline);
          break;
        case Command.ALIGN_CENTER:
          setAlign(Command.ALIGN_CENTER);
          break;
        case Command.ALIGN_LEFT:
          setAlign(Command.ALIGN_LEFT);
          break;
        case Command.ALIGN_RIGHT:
          setAlign(Command.ALIGN_RIGHT);
          break;
        case Command.FONT_COLOR:
          setFontColor(value);
          break;
        case Command.FONT_SIZE:
          setFontSize(value);
          break;
        case Command.FONT_FAMILY:
          const fontName = fontFamilyItems.find(item => item.label === value);
          fontName && setFontFamily(fontName.id);
          break;
        default:
          break;
      }
    });
  }

  function setBackgroundImage(type: BackGroundType, value: string): void {
    switch (type) {
      case BackGroundType.IMAGE:
        if (!value) {
          setBgImage("");
        }
        if (textAreaRef.current.style.backgroundColor) {
          setBgColor("");
        }
        setBgImage(value);
        break;
      case BackGroundType.COLOR:
        if (!value) {
          setBgColor("");
        }
        if (textAreaRef.current.style.backgroundImage) {
          setBgImage("");
        }
        setBgColor(value);
        break;
      default:
        break;
    }
  }

  function renderToolbar(): JSX.Element {
    return (
      <ToolbarComponent
        onIconClick={id => {
          console.log(id);
          execCommand(id as Command);
        }}
      />
    );
  }

  function renderMainframe(): JSX.Element {
    return (
      <div className="text-editor-widget-main">
        <div
          tabIndex={0}
          onMouseUp={onMouseTextEditorUp}
          onKeyUp={onKeyTextEditorUp}
          contentEditable={true}
          dangerouslySetInnerHTML={{
            __html: initTextHTML
          }}
          className="text-editor-widget-main-textarea"
          ref={textAreaRef}
          onBlur={() => {
            setCaretPosition();
          }}
          style={{
            color: INIT_COLOR,
            fontSize: INIT_FONT_SIZE.label,
            fontFamily: INIT_FONT_FAMILY.label,
            backgroundImage: `${
              backgroundImage ? `url(${backgroundImage})` : ""
            }`,
            backgroundColor
          }}
        />
      </div>
    );
  }

  return (
    <div className={textEditorComponentStyle({})}>
      {renderToolbar()}
      {renderMainframe()}
    </div>
  );
};
