import * as React from "react";
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
  text: string;
  children: React.ReactNode;
  placement?: "top" | "bottom";
  textStyle?: StyleProp<TextStyle>;
  tooltipStyle?: StyleProp<ViewStyle>;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  textStyle,
  tooltipStyle,
  placement = "top",
}) => {
  const triggerRef = React.useRef<View>(null);
  const [internalVisible, setInternalVisible] = React.useState(false);
  const [anchorLayout, setAnchorLayout] =
    React.useState<LayoutRectangle | null>(null);

  //handle visibility
  React.useEffect(() => {
    if (internalVisible && triggerRef.current) {
      triggerRef.current.measure((_x, _y, width, height, pageX, pageY) => {
        setAnchorLayout({ x: pageX, y: pageY, width, height });
      });
    }
  }, [internalVisible]);

  const handleToggle = () => {
    setInternalVisible(!internalVisible);
  };

  const screenWidth = Dimensions.get("window").width;

  const top =
    placement === "top" && anchorLayout
      ? anchorLayout.y - 40
      : anchorLayout
      ? anchorLayout.y + anchorLayout.height + 8
      : 0;

  const left =
    anchorLayout && anchorLayout.x + anchorLayout.width / 2 < screenWidth / 2
      ? anchorLayout.x
      : Math.max(8, screenWidth - 300);

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

      {internalVisible && anchorLayout && (
        <Portal>
          <View
            style={[
              styles.tooltip,
              {
                top,
                left,
                maxWidth: 200,
              },
              tooltipStyle,
            ]}
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
