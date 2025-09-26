"use client";

import * as React from "react";
import {
  FlatList,
  FlatListProps,
  LayoutChangeEvent,
  ListRenderItemInfo,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { extractPadding } from "./utils";

type OmittedFlatListProps =
  | "renderItem"
  | "numColumns"
  | "horizontal"
  | "keyExtractor"
  | "columnWrapperStyle"
  | "contentContainerStyle";

export interface GridViewItemProps<T> extends ListRenderItemInfo<T> {
  size: number;
}

export type DefaultFlatListProps = Omit<
  FlatListProps<any>,
  OmittedFlatListProps
>;

export interface GridViewProps<T> extends DefaultFlatListProps {
  data: T[];
  spacing?: number;
  itemWidth: number;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  renderItem: (props: GridViewItemProps<T>) => React.ReactElement;
}

export function GridView<T>({
  data,
  style,
  itemWidth,
  itemStyle,
  renderItem,
  spacing = 0,
  ...restProps
}: GridViewProps<T>) {
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const { paddingHorizontal } = extractPadding(style);

  // on layout change
  const onLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    // subtract horizontal padding for calculation
    setContainerWidth(width - paddingHorizontal);
  };

  // number of columns
  const numColumns = React.useMemo(() => {
    if (containerWidth <= 0) return 1;
    return Math.floor(containerWidth / (itemWidth + spacing));
  }, [containerWidth, itemWidth, spacing]);

  // adjusted item width
  const adjustedItemWidth = React.useMemo(() => {
    if (containerWidth <= 0) return itemWidth;
    return (containerWidth - spacing * (numColumns - 1)) / numColumns;
  }, [containerWidth, numColumns, itemWidth, spacing]);

  return (
    <View style={[{ flex: 1 }]} onLayout={onLayout}>
      <FlatList
        data={data}
        {...restProps}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(_, index) => String(index)}
        contentContainerStyle={[style, { gap: spacing }]}
        columnWrapperStyle={numColumns > 1 ? { gap: spacing } : undefined}
        renderItem={({ item, index, separators }) => (
          <View style={[itemStyle, { flex: 1, maxWidth: adjustedItemWidth }]}>
            {renderItem({ item, index, separators, size: adjustedItemWidth })}
          </View>
        )}
      />
    </View>
  );
}

export default GridView;
