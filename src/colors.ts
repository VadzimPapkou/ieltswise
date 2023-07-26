type ColorValue = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const primary = (value: ColorValue) => `var(--primary-${value})`;
export const accent = (value: ColorValue) => `var(--accent-${value})`;
export const neutral = (value: ColorValue) => `var(--neutral-${value})`;
export const danger = (value: ColorValue) => `var(--danger-${value})`;
export const success = (value: ColorValue) => `var(--success-${value})`;
export const warning = (value: ColorValue) => `var(--warning-${value})`;
export const defaultText = "var(--default-text)";
export const secondaryText = "var(--secondary-text)";
