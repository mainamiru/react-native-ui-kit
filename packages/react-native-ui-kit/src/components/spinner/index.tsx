import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export interface SpinnerItemProps {
  label: string;
  value: number | string;
}
export interface SpinnerProps {
  data: SpinnerItemProps[];
  label?: string;
  itemHeight?: number;
  scrollable?: boolean;
  selectedValue?: number | string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onChange?: (value: SpinnerItemProps) => void;
  visibleItems?: number; // number of items visible at once (default: 3)
}

export const Spinner = ({
  data,
  label,
  style,
  textStyle,
  onChange,
  scrollable,
  itemHeight = 50,
  selectedValue = 0,
  visibleItems = 3,
}: SpinnerProps) => {
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
    const index = Math.round(contentOffset.y / itemHeight);
    if (flatData[index + 1]) {
      onChange?.(flatData[index + 1]);
    }
  };

  //handle item press
  const handleItemPress = (item: SpinnerItemProps, index: number) => {
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

  //initialIndex
  const initialIndex = React.useMemo(() => {
    const currentIndex = data.findIndex(({ value }) => value === selectedValue);
    if (currentIndex >= 0) return currentIndex;
    return 0;
  }, [selectedValue, data]);

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
                <Pressable
                  style={[styles.item, { height: itemHeight }]}
                  onPress={() => handleItemPress(item, index)}
                >
                  <Animated.Text
                    style={[
                      styles.itemText,
                      {
                        fontSize: 20,
                        textAlign: "center",
                      },
                      textStyle,
                    ]}
                  >
                    {item.label}
                  </Animated.Text>
                </Pressable>
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
