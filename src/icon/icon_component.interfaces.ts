export interface IconComponentProps {
  id: string;
  iconClass: string;
  styleProps?: IconComponentStyleProps;
  onClick: (id: string) => void;
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
