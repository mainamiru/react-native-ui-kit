import React, { useRef, useState } from "react";
import {
  Button,
  Dimensions,
  LayoutRectangle,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type ContextMenuProps = {
  options: { label: string; onPress: () => void }[];
  children: React.ReactNode;
  menuWidth?: number;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  options,
  children,
  menuWidth = 150,
}) => {
  const [visible, setVisible] = useState(false);
  const [anchorLayout, setAnchorLayout] = useState<LayoutRectangle | null>(
    null,
  );
  const anchorRef = useRef<View>(null);

  const openMenu = () => {
    if (anchorRef.current) {
      anchorRef.current.measure((_x, _y, width, height, pageX, pageY) => {
        setAnchorLayout({ x: pageX, y: pageY, width, height });
        setVisible(true);
      });
    }
  };

  const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

  return (
    <View>
      <TouchableOpacity ref={anchorRef} onLongPress={openMenu}>
        {children}
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          {anchorLayout && (
            <View
              style={[
                styles.menu,
                {
                  width: menuWidth,
                  top:
                    anchorLayout.y + anchorLayout.height + 8 > screenHeight
                      ? Math.max(anchorLayout.y - options.length * 48 - 8, 0) // flip above if overflow
                      : anchorLayout.y + anchorLayout.height + 8,
                  left:
                    anchorLayout.x + menuWidth > screenWidth
                      ? screenWidth - menuWidth - 8 // keep within right edge
                      : anchorLayout.x,
                },
              ]}
            >
              {options.map((opt, idx) => (
                <Button
                  key={idx}
                  title={opt.label}
                  onPress={() => {
                    setVisible(false);
                    opt.onPress();
                  }}
                />
              ))}
            </View>
          )}
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 6,
    padding: 8,
    position: "absolute",
  },
  option: { marginVertical: 4 },
  overlay: { flex: 1 },
});

export default ContextMenu;
