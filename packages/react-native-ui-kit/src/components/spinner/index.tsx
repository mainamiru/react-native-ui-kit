import React, { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex + 1);
  const ref = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const flatData = ["empty", ...data, "empty"];
  const contentHeight = itemHeight * visibleItems;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.y / itemHeight);
    const isFirstItem = index === 0;
    const isLastItem = index === flatData.length - 1;

    if (index !== activeIndex && !isFirstItem && !isLastItem) {
      setActiveIndex(index);
      if (onChange && flatData[index] !== "empty") {
        onChange(flatData[index] as T);
      }
    }
    scrollY.setValue(contentOffset.y);
  };

  return (
    <View style={[{ height: contentHeight, justifyContent: "center" }, style]}>
      <View
        style={[
          styles.highlight,
          { height: itemHeight, top: (contentHeight - itemHeight) / 2 },
        ]}
      />
      <FlatList
        ref={ref}
        data={flatData}
        pagingEnabled
        decelerationRate="fast"
        snapToAlignment="center"
        onScroll={handleScroll}
        snapToInterval={itemHeight}
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
                disabled={item === "empty"}
                style={[styles.item, { height: itemHeight }]}
                onPress={() => {
                  setActiveIndex(index);
                  ref.current?.scrollToIndex({
                    index,
                    animated: true,
                    viewOffset: itemHeight,
                  });
                  if (onChange && item !== "empty") {
                    onChange(item as T);
                  }
                }}
              >
                {item !== "empty" && (
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
    position: "absolute",
    left: 0,
    right: 0,
    borderTopWidth: 1,
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
