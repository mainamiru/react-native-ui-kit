import * as React from "react";
import { ComponentProps } from "react";
import {
  Platform,
  Role,
  StyleProp,
  Text,
  TextStyle,
  ViewProps,
} from "react-native";

export type IconProps = {
  name: ComponentProps<typeof EvilIcons>["name"];
  color?: string;
  size: number;
  testID?: string;
  direction?: "rtl" | "ltr";
  allowFontScaling?: boolean;
  style?: StyleProp<TextStyle>;
};

type AccessibilityProps =
  | {
      role?: Role;
      focusable?: boolean;
    }
  | {
      accessibilityElementsHidden?: boolean;
      importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants";
    };

export const accessibilityProps: AccessibilityProps =
  Platform.OS === "web"
    ? {
        role: "img",
        focusable: false,
      }
    : {
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
      };

/**
 * Loads the appropriate icon module based on available dependencies
 */
const loadIconModule = () => {
  try {
    return require("@expo/vector-icons/EvilIcons").default;
  } catch {
    try {
      return require("@react-native-vector-icons/evil-icons").default;
    } catch {
      try {
        return require("react-native-vector-icons/EvilIcons").default;
      } catch {
        return null;
      }
    }
  }
};

type IconModuleType = React.ComponentType<
  React.ComponentProps<
    typeof import("@react-native-vector-icons/evil-icons").default
  > & {
    color: string;
    pointerEvents?: ViewProps["pointerEvents"];
  }
>;

const IconModule = loadIconModule();

/**
 * Fallback component displayed when no icon library is available
 */
const FallbackIcon = ({ name, color, size, ...rest }: IconProps) => {
  console.warn(
    `Tried to use the icon '${name}' in a component from '@mainamiru/react-native-ui-kit', but none of the required icon libraries are installed.`,
    `To fix this, please install one of the following:\n` +
      `- @expo/vector-icons\n` +
      `- @react-native-vector-icons/evil-icons\n` +
      `- react-native-vector-icons\n\n`
  );

  return (
    <Text
      {...rest}
      selectable={false}
      style={{
        color,
        fontSize: size,
        backgroundColor: "transparent",
      }}
    >
      □
    </Text>
  );
};

export const EvilIcons: IconModuleType = IconModule || FallbackIcon;
