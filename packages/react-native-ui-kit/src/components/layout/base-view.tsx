import React from "react";
import { View, ViewProps } from "react-native";
import { LayoutContext, LayoutMode } from "./layout-base";

export interface BaseViewProps extends ViewProps {
  modes?: LayoutMode[];
}

const BaseView: React.FC<BaseViewProps> = ({
  style,
  modes,
  children,
  ...props
}) => {
  const { mode } = React.useContext(LayoutContext);

  // Only render if mode is defined and included in modes
  if (modes && (!mode || !modes.includes(mode))) return null;

  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
};

export default BaseView;
