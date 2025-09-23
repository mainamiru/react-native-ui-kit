import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface TableContextType {
  borderWidth: number;
  borderColor: string;
}

export interface TableProps {
  borderWidth?: number;
  borderColor?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const TableContext = React.createContext<TableContextType>({
  borderWidth: 1,
  borderColor: "#e6e6e6",
});

const TableBase: React.FC<TableProps> = ({
  style,
  children,
  borderWidth = 1,
  borderColor = "#e6e6e6",
}) => {
  return (
    <TableContext.Provider value={{ borderWidth, borderColor }}>
      <View
        style={[
          style,
          {
            borderColor,
            overflow: "hidden",
            borderWidth: borderWidth / 2,
          },
        ]}
      >
        {children}
      </View>
    </TableContext.Provider>
  );
};

export default TableBase;
