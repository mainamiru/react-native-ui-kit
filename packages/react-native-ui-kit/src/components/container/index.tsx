import React from "react";
import { Modal, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import ActivityIndicator from "../activity-indicator";

export interface ContainerProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  isProcessing?: boolean;
  indicatorColor?: string;
  indicatorSize?: number;
  style?: StyleProp<ViewStyle>;
  onRequestClose?: () => void;
}

export const Container: React.FC<ContainerProps> = React.memo(
  ({
    style,
    children,
    indicatorColor,
    indicatorSize,
    onRequestClose,
    isLoading = false,
    isProcessing = false,
  }) => {
    if (isLoading) {
      return (
        <View style={{ flex: 1, position: "relative" }}>
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size={indicatorSize} color={indicatorColor} />
          </View>
        </View>
      );
    }

    return (
      <View style={[styles.container, style]}>
        {children}
        <Modal
          transparent
          animationType="none"
          visible={isProcessing}
          statusBarTranslucent={true}
          onRequestClose={onRequestClose}
        >
          <View style={styles.modalOverlay}>
            <ActivityIndicator size={indicatorSize} color="white" />
          </View>
        </Modal>
      </View>
    );
  },
);

Container.displayName = "Container";
export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  loadingWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  modalOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    justifyContent: "center",
  },
});
