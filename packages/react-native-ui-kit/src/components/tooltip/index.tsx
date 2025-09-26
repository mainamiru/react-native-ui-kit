import * as React from "react";
import {
  LayoutRectangle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
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
  const { width: screenWidth } = useWindowDimensions();
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

  const top =
    placement === "top" && anchorLayout
      ? anchorLayout.y - 40
      : anchorLayout
        ? anchorLayout.y + anchorLayout.height + 8
        : 0;

  const left =
    anchorLayout && anchorLayout.x + anchorLayout.width / 2 < screenWidth / 2
      ? anchorLayout.x
      : Math.max(8, screenWidth - 200);

  return (
    <View collapsable={false} ref={triggerRef}>
      <Pressable
        pointerEvents="box-only"
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
                maxWidth: 300,
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
    backgroundColor: "#333",
    borderRadius: 6,
    padding: 8,
    position: "absolute",
  },
  tooltipText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Tooltip;
