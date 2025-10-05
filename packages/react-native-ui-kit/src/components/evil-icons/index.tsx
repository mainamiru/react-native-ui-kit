import type { ComponentProps } from "react";
import * as React from "react";
import { Platform, StyleProp, Text, TextStyle, ViewProps } from "react-native";

/**
 * Dynamically loads the appropriate EvilIcons module based on available dependencies.
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

const IconModule = loadIconModule();

/**
 * Accessibility properties for web and native platforms.
 */
export const accessibilityProps =
  Platform.OS === "web"
    ? ({
        role: "img",
        focusable: false,
      } as const)
    : ({
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
      } as const);

/**
 * Type definition for icon props.
 */
interface IconProps {
  name: ComponentProps<
    typeof import("@expo/vector-icons/EvilIcons").default
  >["name"];
  size: number;
  color?: string;
  testID?: string;
  direction?: "rtl" | "ltr";
  allowFontScaling?: boolean;
  style?: StyleProp<TextStyle>;
}

/**
 * Type definition for the resolved icon module.
 */
type IconModuleType = React.ComponentType<
  ComponentProps<typeof import("@expo/vector-icons/EvilIcons").default> & {
    color?: string;
    pointerEvents?: ViewProps["pointerEvents"];
  }
>;

/**
 * Fallback component displayed when no icon library is available.
 */
const FallbackIcon: React.FC<IconProps> = ({
  name,
  color = "#000",
  size,
  style,
  ...rest
}) => {
  // eslint-disable-next-line no-console
  console.warn(
    `Tried to use the icon '${name}' from '@mainamiru/react-native-ui-kit', but no supported icon library is installed.
Please install one of the following:
- @expo/vector-icons
- @react-native-vector-icons/evil-icons
- react-native-vector-icons`,
  );

  return (
    <Text
      {...rest}
      selectable={false}
      style={[
        {
          color,
          fontSize: size,
          backgroundColor: "transparent",
        },
        style,
      ]}
    >
      □
    </Text>
  );
};

/**
 * Unified EvilIcons export. Falls back to a placeholder if no library is found.
 */
export const EvilIcons: IconModuleType = (IconModule ||
  FallbackIcon) as IconModuleType;

export default EvilIcons;
