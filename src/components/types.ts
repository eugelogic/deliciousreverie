export interface IBaseColorSpec {
  primary: "#f7ebc1";
  secondary: "#331f33";
}

export interface INeutralColorSpec {
  white: "#FFFFFF";
  nearWhite: "#F8F8F8";
  light: "#EAEAEE";
  medium: "#4f4f4f";
  nearDark: "#63637E";
  dark: "#333333";
}

export interface ISemanticColorSpec {
  success: "#1EC06A";
  alert: "#FFB428";
  error: "#EE0505";
}

export interface IColorSpec {
  base: IBaseColorSpec;
  neutral: INeutralColorSpec;
  semantic: ISemanticColorSpec;
}

export interface IBreakpoint {
  small: string;
  medium: string;
  large: string;
}

export interface ISize {
  zero: string;
  single: string;
  singleplushalf: string;
  double: string;
  triple: string;
  quad: string;
  sextuple: string;
}

export interface ITextalign {
  left: string;
  center: string;
  right: string;
}

export interface IGridalign {
  start: string;
  center: string;
  end: string;
}

export interface IFlexalign {
  start: string;
  center: string;
  end: string;
}

export interface IBorderradius {
  small: string;
  medium: string;
  large: string;
}
export interface IEffects {
  transition: string;
}
