export interface IconComponentProps {
  iconClass: string;
  styleProps?: IconComponentStyleProps;
}

export interface IconComponentStyleProps {
  size?: number;
  color?: {
    default: string;
    hover: string;
  };
  bgColor?: {
    default: string;
    hover: string;
  };
}
