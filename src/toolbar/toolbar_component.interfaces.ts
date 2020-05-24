import { Command } from "../constant/variables";

export interface ToolbarComponentProps {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  align: Command;
  onIconClick: (id: string) => void;
}
