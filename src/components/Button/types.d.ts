export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'normal' | 'small';
export type ButtonNativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  link?: boolean;
  circle?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  nativeType?: ButtonNativeType;
  autofocus?: boolean;
}
export interface ButtonInstance {
  ref: HTMLButtonElement;
}
