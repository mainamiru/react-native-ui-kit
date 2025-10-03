# React Native UI Kit

[![npm version](https://img.shields.io/npm/v/react-native-ui-kit)](https://www.npmjs.com/package/react-native-ui-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A comprehensive, customizable, and accessible UI kit for React Native applications. Built with TypeScript and designed for performance and developer experience.

## Features

- 🎨 40+ customizable components
- 🎯 TypeScript support out of the box
- 📱 Cross-platform (iOS & Android)
- ♿ Built with accessibility in mind
- 🚀 Optimized for performance
- 🔄 Theme support
- 🎭 Support for light/dark mode
- 📝 Comprehensive documentation

## Installation

Using npm:

```bash
npm install @mainamiru/react-native-ui-kit @expo/vector-icons
```

Or using yarn:

```bash
yarn add @mainamiru/react-native-ui-kit
```

Or using bun:

```bash
bun add @mainamiru/react-native-ui-kit
```

Or using expo:

```bash
npx expo install @mainamiru/react-native-ui-kit
```

## Icon for Expo Project

```bash
npx expo install @expo/vector-icons
```

## Icon for React Native Project

```bash
npm install @react-native-vector-icons/evil-icons
```

## Getting Started

### Basic Usage

Wrap your app with the `ThemeProvider` to enable theming and access to the UI components:

```jsx
import * as React from "react";
import { AppRegistry } from "react-native";
import {
  DefaultTheme,
  ReactNativeUIKitProvider,
} from "@mainamiru/react-native-ui-kit";
import { name as appName } from "./app.json";
import App from "./src/App";

export default function Main() {
  return (
    <ReactNativeUIKitProvider theme={DefaultTheme}>
      <App />
    </ReactNativeUIKitProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```

## Components

### Basic Components

- **ActivityIndicator** - Loading indicator
- **Avatar** - User avatar with image or initials
- **Badge** - Small status indicators
- **Button** - Customizable button component
- **Card** - Container for content with optional header and footer
- **Checkbox** - Selection control
- **Divider** - Visual separator
- **Icon** - Icon component with support for custom icon sets
- **Text** - Text component with typography support
- **TextInput** - Input field with various styles

### Layout Components

- **Box** - Basic building block for layouts
- **Center** - Centers its children
- **Container** - Responsive container
- **Flex** - Flexbox container
- **Grid** - Grid layout system
- **Row** - Horizontal layout container
- **Spacer** - Adds space between components

### Navigation

- **BottomSheet** - Modal bottom sheet
- **Menu** - Dropdown menu
- **Sidebar** - Side navigation
- **Tabs** - Tab navigation

### Data Display

- **List** - Scrollable list with various styles
- **Table** - Data table with sorting and pagination
- **Tooltip** - Informative tooltip

### Feedback

- **Dialog** - Modal dialog
- **Skeleton** - Content loading placeholders
- **Spinner** - Loading indicator
- **Toaster** - Notification system

### Form Components

- **Checkbox** - Toggle input
- **Picker** - Dropdown selector
- **Radio** - Radio button group
- **SearchBar** - Search input field
- **Switch** - Toggle switch

## Customization

All components are highly customizable through props. You can also extend the default theme or create your own component variants.

## Documentation

For detailed documentation and examples, please visit our [documentation website](https://expo-react-native-ui-kit.web.app).

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this library useful, please consider giving it a ⭐️ on [GitHub](https://github.com/mainamiru/react-native-ui-kit).

## Roadmap

- [ ] Add more components
- [ ] Improve documentation
- [ ] Add more examples
- [ ] Performance optimizations
- [ ] Accessibility improvements

## Acknowledgments

- Built with ❤️ by the React Native community
- Inspired by various UI component libraries

---

💡 **Tip**: Check out our [examples directory](/apps/docs) for more usage examples.

```

```
