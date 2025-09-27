import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Button, { ButtonMode } from "../button";
import { DialogContext } from "./utils";

export interface DialogTriggerProps {
  children: string;
  mode?: ButtonMode;
  style?: StyleProp<ViewStyle>;
}

const DialogTrigger = ({
  style,
  children,
  mode = "text",
}: DialogTriggerProps) => {
  return (
    <DialogContext.Consumer>
      {({ setIsOpen }) => (
        <Button mode={mode} style={style} onPress={() => setIsOpen(true)}>
          {children}
        </Button>
      )}
    </DialogContext.Consumer>
  );
};

export default DialogTrigger;
