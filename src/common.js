export const primary = (value) => `var(--primary-${value})`;
export const accent = (value) => `var(--accent-${value})`;
export const neutral = (value) => `var(--neutral-${value})`;
export const danger = (value) => `var(--danger-${value})`;
export const success = (value) => `var(--success-${value})`;
export const warning = (value) => `var(--warning-${value})`;
export const defaultText = "var(--default-text)";
export const secondaryText = "var(--secondary-text)";

export function isEmail(string) {
  return !!string.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
}

export function isGmail(string) {
  return !!string.match("^[\\w-\\.]+@gmail.com$");
}

export const validityIconsPaths = {
  valid: "./valid.svg",
  warning: "./warning.svg",
  invalid: "./invalid.svg",
};

export const isProduction = process.env.NEXT_PUBLIC_SITE_NAME === "production";
export const tutorGmail = isProduction ? "ieltswise67@gmail.com" : "test.tutor1.ieltswise67@gmail.com";
