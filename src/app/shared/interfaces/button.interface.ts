/** Visual variants for `AppButtonComponent`. */
export type AppButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

/** Size scale for `AppButtonComponent`. */
export type AppButtonSize = 'sm' | 'md' | 'lg';

/** Contract for interchangeable button implementations (LSP). */
export interface IButton {
  variant: AppButtonVariant;
  size: AppButtonSize;
  label: string;
  disabled: boolean;
}
