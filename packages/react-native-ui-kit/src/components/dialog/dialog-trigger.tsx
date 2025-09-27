import React from "react";
import { PressableProps, StyleProp, ViewStyle } from "react-native";
import TouchRipple from "../touch-ripple";
import { DialogContext } from "./utils";

export interface DialogTriggerProps {
  asChild?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement<PressableProps>;
}

const DialogTrigger = ({ style, children, asChild }: DialogTriggerProps) => {
  return (
    <DialogContext.Consumer>
      {({ setIsOpen }) => {
        const handlePress = (event: any) => {
          children.props.onPress?.(event);
          setIsOpen(true);
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

export default DialogTrigger;
