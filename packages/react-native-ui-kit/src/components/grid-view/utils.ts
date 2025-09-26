import { StyleProp, ViewStyle } from "react-native";

export function extractPadding(style?: StyleProp<ViewStyle>): {
  paddingVertical: number;
  paddingHorizontal: number;
} {
  let paddingVertical = 0;
  let paddingHorizontal = 0;

  const styles = Array.isArray(style) ? style : [style];

  styles.forEach((style: ViewStyle) => {
    if (!style) return;
    if (style.padding) {
      paddingVertical = Number(style.padding) * 2;
      paddingHorizontal = Number(style.padding) * 2;
    }
    if (style.paddingHorizontal) {
      paddingHorizontal = Number(style.paddingHorizontal) * 2;
    }
    if (style.paddingVertical) {
      paddingVertical = Number(style.paddingVertical) * 2;
    }
    if (style.paddingLeft || style.paddingRight) {
      paddingHorizontal =
        Number(style.paddingLeft ?? 0) + Number(style.paddingRight ?? 0);
    }
    if (style.paddingTop || style.paddingBottom) {
      paddingVertical =
        Number(style.paddingTop ?? 0) + Number(style.paddingBottom ?? 0);
    }
  });

  return { paddingHorizontal, paddingVertical };
}
