# SmartImage Component

An enhanced React Native image component with **placeholder**, **fallback source**, and a smooth **fade-in animation** when the image loads.

## Props

| Name           | Type                                                      | Required | Default | Description                                  |
| -------------- | --------------------------------------------------------- | -------- | ------- | -------------------------------------------- |
| source         | ImageSourcePropType                                       | ❌       | -       | The main image source                        |
| fallbackSource | ImageSourcePropType                                       | ❌       | -       | Image source used if the main image fails    |
| placeholder    | React.ReactNode                                           | ❌       | Spinner | Element to render while the image is loading |
| style          | StyleProp\<ImageStyle>                                    | ❌       | -       | Styles applied to the image container        |
| resizeMode     | "cover" \| "contain" \| "stretch" \| "repeat" \| "center" | ❌       | "cover" | Image resize mode                            |
| fadeDuration   | number                                                    | ❌       | 300     | Duration of fade-in animation (ms)           |

## Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { SmartImage } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SmartImage
        source={{ uri: "https://example.com/main-image.jpg" }}
        fallbackSource={{ uri: "https://via.placeholder.com/150" }}
        placeholder={<Text>Loading...</Text>}
        style={{ width: 200, height: 200, borderRadius: 12 }}
        resizeMode="cover"
        fadeDuration={500}
      />
    </View>
  );
}
```
