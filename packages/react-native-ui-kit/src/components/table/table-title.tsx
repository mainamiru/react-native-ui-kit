import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Text from "../text";
import { TableContext } from "./table-base";

export interface TableTitleProps {
  colsSpan?: number;
  children: string | number;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const TableTitle = ({
  style,
  children,
  titleStyle,
  colsSpan = 1,
}: TableTitleProps) => {
  const { borderWidth, borderColor } = React.useContext(TableContext);
  return (
    <View
      style={[
        {
          flex: colsSpan,
          borderColor: borderColor,
          borderWidth: borderWidth / 2,
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Text
        variant="titleMedium"
        style={[
          {
            padding: 10,
            textAlign: "center",
          },
          titleStyle,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default TableTitle;
