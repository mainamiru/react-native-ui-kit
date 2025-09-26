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
import Container from "../container";

type OmittedFlatListProps =
  | "renderItem"
  | "numColumns"
  | "horizontal"
  | "keyExtractor"
  | "columnWrapperStyle"
  | "contentContainerStyle";

export type DefaultFlatListProps<T> = Omit<
  FlatListProps<T>,
  OmittedFlatListProps
>;

export interface GridViewItemProps<T> extends ListRenderItemInfo<T> {
  /**
   * The width of the item.
   */
  width: number;
}

export interface GridViewProps<T> extends DefaultFlatListProps<T> {
  data: T[];
  itemWidth: number;
  itemSpacing?: number;
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
    const spacing = itemSpacing * (numColumns - 1);
    return (containerWidth - spacing) / numColumns - itemSpacing;
  }, [containerWidth, numColumns, itemWidth, itemSpacing]);

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <Container isLoading={containerWidth <= 0}>
        <FlatList
          data={data}
          {...restProps}
          key={numColumns}
          numColumns={numColumns}
          keyExtractor={(_, index) => String(index)}
          contentContainerStyle={[style, { gap: itemSpacing }]}
          columnWrapperStyle={numColumns > 1 ? { gap: itemSpacing } : undefined}
          renderItem={({ item, index, separators }) => {
            const itemWidth = adjustedItemWidth;
            return (
              <View
                style={[
                  itemStyle,
                  {
                    flex: 1,
                    width: undefined,
                    height: undefined,
                    minWidth: undefined,
                    minHeight: undefined,
                    maxWidth: itemWidth,
                  },
                ]}
              >
                {renderItem({ item, index, separators, width: itemWidth })}
              </View>
            );
          }}
        />
      </Container>
    </View>
  );
}

export default GridView;
