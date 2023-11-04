export const colors = {
  primary: "#007AFF",
  secondary: "#5856D6",
  success: "#4CD964",
  danger: "#FF3B30",
  warning: "#FF9500",
  info: "#5AC8FA",
  light: "#E5E5EA",
  white: "#FFFFFF",
  dark: "#000000",
} as const;

export const colorTheme = {
  badge: {
    badgeText: colors.white,
    expired: colors.danger,
    soon: colors.warning,
    safe: colors.success,
  },
  button: {
    danger: colors.danger,
  },
} as const;

export const thresholds = {
  expired: 0,
  soon: 20,
} as const;
