export interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export interface ThemeColor {
  card: string;
  text: string;
  border: string;
  surface: string;
  primary: string;
  secondary: string;
  background: string;
  placeholder: string;
}

export interface RNUIKitTheme {
  isDark?: boolean;
  colors: ThemeColor;
}
