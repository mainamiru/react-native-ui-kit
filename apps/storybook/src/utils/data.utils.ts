export interface NavLink {
  label: string;
  path: string;
  description: string;
  sections?: NavLink[];
}

export const navigations: NavLink[] = [
  {
    label: "Get Started",
    path: "/docs",
    description: "Get started with the app",
  },
  {
    label: "ActivityIndicator",
    path: "/docs/activity-indicator",
    description: "ActivityIndicator component",
  },
  {
    label: "Avatar",
    path: "/docs/avatar",
    description: "Avatar component",
    sections: [
      {
        label: "Avatar.Text",
        path: "/docs/avatar/text",
        description: "Avatar.Text component",
      },
      {
        label: "Avatar.Image",
        path: "/docs/avatar/image",
        description: "Avatar.Image component",
      },
    ],
  },
  {
    label: "Badge",
    path: "/docs/badge",
    description: "Badge component",
  },
  {
    label: "BottomSheet",
    path: "/docs/bottom-sheet",
    description: "BottomSheet component",
  },
  {
    label: "Button",
    path: "/docs/button",
    description: "Button component",
  },
  {
    label: "Card",
    path: "/docs/card",
    description: "Card component",
  },
  {
    label: "Checkbox",
    path: "/docs/checkbox",
    description: "Checkbox component",
  },
  {
    label: "Code",
    path: "/docs/code",
    description: "Code component",
  },
  {
    label: "Container",
    path: "/docs/container",
    description: "Container component",
  },
  {
    label: "Divider",
    path: "/docs/divider",
    description: "Divider component",
  },
  {
    label: "FlexView",
    path: "/docs/flex-view",
    description: "FlexView component",
  },
  {
    label: "SearchBar",
    path: "/docs/searchbar",
    description: "SearchBar component",
  },
  {
    label: "Layout",
    path: "/docs/layout",
    description: "Layout component",
  },
  {
    label: "List",
    path: "/docs/list",
    description: "List component",
  },
  {
    label: "Picker",
    path: "/docs/picker",
    description: "Picker component",
  },
  {
    label: "Radio",
    path: "/docs/radio",
    description: "Radio component",
  },
  {
    label: "Text",
    path: "/docs/text",
    description: "Text component",
  },
  {
    label: "Skeleton",
    path: "/docs/skeleton",
    description: "Skeleton component",
  },
  {
    label: "SmartImage",
    path: "/docs/smart-image",
    description: "SmartImage component",
  },
  {
    label: "Spinner",
    path: "/docs/spinner",
    description: "Spinner component",
  },
  {
    label: "Sidebar",
    path: "/docs/sidebar",
    description: "Sidebar component",
  },
  {
    label: "Table",
    path: "/docs/table",
    description: "Table component",
  },
  {
    label: "TextInput",
    path: "/docs/text-input",
    description: "TextInput component",
  },
  {
    label: "Switch",
    path: "/docs/switch",
    description: "Switch component",
  },
  {
    label: "Tabs",
    path: "/docs/tabs",
    description: "Tabs component",
  },
  {
    label: "Toaster",
    path: "/docs/toaster",
    description: "Toaster component",
  },
  {
    label: "TouchRipple",
    path: "/docs/touch-ripple",
    description: "TouchRipple component",
  },
  {
    label: "Typography",
    path: "/docs/typography",
    description: "Typography component",
  },
];
