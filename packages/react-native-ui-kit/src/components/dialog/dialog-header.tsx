import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import IconButton from "../icon-button";
import { DialogContext } from "./utils";

export interface DialogHeaderProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const DialogHeader = ({ children, style }: DialogHeaderProps) => {
  return (
    <DialogContext.Consumer>
      {({ setIsOpen }) => (
        <View style={[style, { flexDirection: "row" }]}>
          <View style={{ flex: 1 }}>{children}</View>
          <IconButton
            name="close"
            style={{ elevation: 0 }}
            onPress={() => setIsOpen(false)}
            hoverStyle={() => ({
              backgroundColor: "transparent",
            })}
          />
        </View>
      )}
    </DialogContext.Consumer>
  );
};

export default DialogHeader;
