import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Icon from "../icon";
import TouchRipple from "../touch-ripple";
import { DialogContext } from "./utils";

export interface DialogHeaderProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const DialogHeader = ({ children, style }: DialogHeaderProps) => {
  return (
    <DialogContext.Consumer>
      {({ setIsOpen }) => (
        <View style={[style, { flexDirection: "row", alignItems: "center" }]}>
          <View style={{ flex: 1 }}>{children}</View>
          <TouchRipple
            onPress={() => setIsOpen(false)}
            style={{
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Icon.Close size={20} color="#000" />
          </TouchRipple>
        </View>
      )}
    </DialogContext.Consumer>
  );
};

export default DialogHeader;
