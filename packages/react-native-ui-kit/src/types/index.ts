export interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export interface ThemeColor {
  card: string;
  text: string;
  border: string;
  primary: string;
  secondary: string;
  background: string;
}

export interface RNUIKitTheme {
  isDark?: boolean;
  colors: ThemeColor;
}
