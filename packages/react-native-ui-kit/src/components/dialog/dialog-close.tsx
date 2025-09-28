import React from "react";
import {
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import TouchRipple from "../touch-ripple";
import { DialogContext } from "./utils";

export interface DialogCloseProps {
  asChild?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement<PressableProps>;
}

const DialogClose = ({ style, children, asChild }: DialogCloseProps) => {
  return (
    <DialogContext.Consumer>
      {({ setIsOpen }) => {
        const handlePress = (event: GestureResponderEvent) => {
          children.props.onPress?.(event);
          setIsOpen(false);
        };
        if (asChild) {
          return React.cloneElement(children, {
            style: style,
            onPress: handlePress,
          });
        }
        return (
          <TouchRipple style={style} onPress={handlePress}>
            {children}
          </TouchRipple>
        );
      }}
    </DialogContext.Consumer>
  );
};

export default DialogClose;
