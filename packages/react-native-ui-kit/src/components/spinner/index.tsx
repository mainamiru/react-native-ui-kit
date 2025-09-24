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
import TouchRipple from "../touch-ripple";

export interface SpinnerProps<T = string | number> {
  data: T[];
  itemHeight?: number;
  initialIndex?: number;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: T) => void;
  visibleItems?: number; // number of items visible at once (default: 3)
}

export const Spinner = <T extends string | number>({
  data,
  style,
  onChange,
  itemHeight = 50,
  initialIndex = 0,
  visibleItems = 3,
}: SpinnerProps<T>) => {
  const ref = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  //internal variables
  const flatData = ["empty", ...data, "empty"];
  const contentHeight = itemHeight * visibleItems;

  //handle scroll
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    scrollY.setValue(contentOffset.y);
  };

  //handle item press
  const handleItemPress = (item: T, index: number) => {
    onChange?.(item);
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View style={[{ height: contentHeight, justifyContent: "center" }, style]}>
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
        snapToInterval={itemHeight}
        initialScrollIndex={initialIndex}
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, idx) => ({
          index: idx,
          length: itemHeight,
          offset: itemHeight * idx,
        })}
        renderItem={({ item, index }) => {
          const isEmpty = item === "empty";
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
                disabled={isEmpty}
                style={[styles.item, { height: itemHeight }]}
                onPress={() => handleItemPress(item, index)}
              >
                {!isEmpty && (
                  <Text style={[styles.itemText, { fontSize: itemHeight / 2 }]}>
                    {item}
                  </Text>
                )}
              </TouchRipple>
            </Animated.View>
          );
        }}
        keyExtractor={(_, key) => key.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    left: 0,
    right: 0,
    borderTopWidth: 1,
    position: "absolute",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderBottomColor: "gray",
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
