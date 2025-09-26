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

type OmittedFlatListProps =
  | "renderItem"
  | "numColumns"
  | "horizontal"
  | "keyExtractor"
  | "columnWrapperStyle"
  | "contentContainerStyle";

export type DefaultFlatListProps = Omit<
  FlatListProps<any>,
  OmittedFlatListProps
>;

export interface GridViewProps<T> extends DefaultFlatListProps {
  data: T[];
  itemWidth: number;
  itemSpacing?: number;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  renderItem: (props: ListRenderItemInfo<T>) => React.ReactElement;
}

export function GridView<T>({
  data,
  style,
  itemWidth,
  itemStyle,
  renderItem,
  itemSpacing = 0,
  ...restProps
}: GridViewProps<T>) {
  const [containerWidth, setContainerWidth] = React.useState<number>(0);

  // on layout change
  const onLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setContainerWidth(width);
  };

  // number of columns
  const numColumns = React.useMemo(() => {
    if (containerWidth <= 0) return 1;
    return Math.floor(containerWidth / (itemWidth + itemSpacing));
  }, [containerWidth, itemWidth, itemSpacing]);

  // adjusted item width
  const adjustedItemWidth = React.useMemo(() => {
    if (containerWidth <= 0) return itemWidth;
    return (containerWidth - itemSpacing * (numColumns - 1)) / numColumns;
  }, [containerWidth, numColumns, itemWidth, itemSpacing]);

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <FlatList
        data={data}
        {...restProps}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(_, index) => String(index)}
        contentContainerStyle={[style, { gap: itemSpacing }]}
        columnWrapperStyle={numColumns > 1 ? { gap: itemSpacing } : undefined}
        renderItem={({ item, index, separators }) => (
          <View
            style={[
              itemStyle,
              {
                flex: 1,
                width: undefined,
                height: undefined,
                minWidth: undefined,
                minHeight: undefined,
                maxWidth: adjustedItemWidth - itemSpacing,
              },
            ]}
          >
            {renderItem({ item, index, separators })}
          </View>
        )}
      />
    </View>
  );
}

export default GridView;
