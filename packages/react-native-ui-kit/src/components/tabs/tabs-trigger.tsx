import React from "react";
import {
  Animated,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Text from "../text";
import { TabsContext } from "./tabs-base";

export interface TabsTriggerProps {
  value: string;
  children: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const TabsTrigger = ({
  value,
  style,
  children,
  labelStyle,
}: TabsTriggerProps) => {
  const {
    setValue,
    activeTabStyle,
    showActiveIndicator,
    value: contextValue,
    activeIndicatorColor,
  } = React.useContext(TabsContext);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const active = value === contextValue;

  //animate indicator
  React.useEffect(() => {
    if (active) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  return (
    <Pressable
      onPress={() => setValue(value)}
      style={[style, active && activeTabStyle]}
    >
      <View style={{ position: "relative" }}>
        <Text
          style={[
            {
              padding: 10,
              textAlign: "center",
            },
            labelStyle,
          ]}
        >
          {children}
        </Text>
        {showActiveIndicator && (
          <Animated.View
            style={{
              left: 0,
              bottom: 0,
              height: 2,
              width: "100%",
              borderRadius: 5,
              position: "absolute",
              transform: [
                {
                  scaleX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
              backgroundColor: activeIndicatorColor,
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

export default TabsTrigger;
