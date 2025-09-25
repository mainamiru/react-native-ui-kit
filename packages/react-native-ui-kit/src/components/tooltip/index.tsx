import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  LayoutRectangle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Portal from "../portal";

export interface TooltipProps {
  children: React.ReactNode;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  tooltipStyle?: StyleProp<ViewStyle>;
  placement?: "top" | "bottom";
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  textStyle,
  tooltipStyle,
  placement = "top",
  visible,
  onVisibleChange,
}) => {
  const [internalVisible, setInternalVisible] = useState(false);
  const [anchorLayout, setAnchorLayout] = useState<LayoutRectangle | null>(
    null
  );

  const isVisible = visible !== undefined ? visible : internalVisible;
  const triggerRef = useRef<View>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      triggerRef.current.measure((_x, _y, width, height, pageX, pageY) => {
        setAnchorLayout({ x: pageX, y: pageY, width, height });
      });
    }
  }, [isVisible]);

  const handleToggle = () => {
    const newValue = !isVisible;
    if (visible === undefined) {
      setInternalVisible(newValue);
    }
    onVisibleChange?.(newValue);
  };

  const screenWidth = Dimensions.get("window").width;

  const top =
    placement === "top" && anchorLayout
      ? anchorLayout.y
      : anchorLayout
      ? anchorLayout.y + anchorLayout.height
      : 0;

  const left =
    anchorLayout && anchorLayout.x + anchorLayout.width / 2 < screenWidth / 2
      ? anchorLayout.x
      : Math.max(8, screenWidth - 200);
  console.log(left);

  return (
    <View collapsable={false} ref={triggerRef}>
      <Pressable
        onHoverIn={handleToggle}
        onPressIn={handleToggle}
        onPressOut={handleToggle}
        onHoverOut={() => setInternalVisible(false)}
      >
        {children}
      </Pressable>

      {isVisible && anchorLayout && (
        <Portal>
          <View
            style={[styles.tooltip, { top, left, maxWidth: 200 }, tooltipStyle]}
          >
            <Text style={[styles.tooltipText, textStyle]}>{text}</Text>
          </View>
        </Portal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    position: "absolute",
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 6,
  },
  tooltipText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Tooltip;
