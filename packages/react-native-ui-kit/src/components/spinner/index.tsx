import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Divider from "../divider";
import TouchRipple from "../touch-ripple";

export interface SpinnerProps<T = string | number> {
  data: T[];
  label?: string;
  itemHeight?: number;
  scrollable?: boolean;
  initialIndex?: number;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: T) => void;
  visibleItems?: number; // number of items visible at once (default: 3)
}

export const Spinner = <T extends string | number>({
  data,
  label,
  style,
  onChange,
  scrollable,
  itemHeight = 50,
  initialIndex = 0,
  visibleItems = 3,
}: SpinnerProps<T>) => {
  const ref = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  //internal variables
  const firstItem = data[0];
  const lastItem = data[data.length - 1];
  const flatData = [lastItem, ...data, firstItem];
  const contentHeight = itemHeight * visibleItems;

  //handle scroll
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    scrollY.setValue(contentOffset.y);
  };

  //handle item press
  const handleItemPress = (item: T, index: number) => {
    onChange?.(item);
    const isFirstItem = index === 0;
    const isLastItem = index === flatData.length - 1;
    if (isLastItem) {
      ref.current?.scrollToIndex({
        index: 1,
        animated: true,
        viewOffset: itemHeight,
      });
    } else if (isFirstItem) {
      ref.current?.scrollToIndex({
        animated: true,
        index: data.length,
        viewOffset: itemHeight,
      });
    } else {
      ref.current?.scrollToIndex({
        index,
        animated: true,
        viewOffset: itemHeight,
      });
    }
  };

  return (
    <View style={style}>
      {label && (
        <Text
          numberOfLines={1}
          style={{
            padding: 10,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      )}
      <Divider margin={0} />
      <View
        style={{
            width: "100%",
            height: contentHeight,
            justifyContent: "center",
          }}
      >
        <View
          style={[
            styles.highlight,
            {
              height: itemHeight,
              top: (contentHeight - itemHeight) / 2,
            },
          ]}
        />
        <FlatList
          ref={ref}
          data={flatData}
          pagingEnabled={true}
          decelerationRate="fast"
          snapToAlignment="center"
          onScroll={handleScroll}
          scrollEnabled={scrollable}
          snapToInterval={itemHeight}
          initialScrollIndex={initialIndex}
          showsVerticalScrollIndicator={false}
          getItemLayout={(_, idx) => ({
            index: idx,
            length: itemHeight,
            offset: itemHeight * idx,
          })}
          renderItem={({ item, index }) => {
            const inputRange = [
              itemHeight * (index - 2),
              itemHeight * (index - 1),
              itemHeight * index,
              itemHeight * (index + 1),
              itemHeight * (index + 2),
            ];
            const outputRange = [0.5, 1, 0.5, 0, 0.5];
            const opacity = scrollY.interpolate({
              inputRange,
              outputRange,
              extrapolate: "clamp",
            });
            return (
              <Animated.View style={{ opacity }}>
                <TouchRipple
                  style={[styles.item, { height: itemHeight }]}
                  onPress={() => handleItemPress(item, index)}
                >
                  <Text style={[styles.itemText, { fontSize: itemHeight / 2 }]}>
                    {item}
                  </Text>
                </TouchRipple>
              </Animated.View>
            );
          }}
          keyExtractor={(_, key) => key.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
    left: 0,
    position: "absolute",
    right: 0,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontWeight: "500",
  },
});

export default Spinner;
