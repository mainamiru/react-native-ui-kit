import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Text from "../text";
import { TableContext } from "./table-base";

export interface TableCellProps {
  children: string | number;
  colsSpan?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const TableCell: React.FC<TableCellProps> = ({
  style,
  children,
  colsSpan = 1,
  textStyle,
}) => {
  const { borderWidth, borderColor } = React.useContext(TableContext);
  return (
    <View
      style={[
        style,
        {
          flex: colsSpan,
          borderColor: borderColor,
          justifyContent: "center",
          borderWidth: borderWidth / 2,
        },
      ]}
    >
      <Text style={[{ padding: 10 }, textStyle]}>{children}</Text>
    </View>
  );
};

export default TableCell;
