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
    sections: [
      {
        label: "Card.Content",
        path: "/docs/card/content",
        description: "Card Content component",
      },
      {
        label: "Card.Image",
        path: "/docs/card/image",
        description: "Card Image component",
      },
    ],
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
    sections: [
      {
        label: "Layout.XSmallView",
        path: "/docs/layout/xsmall-view",
        description: "XSmallView component",
      },
      {
        label: "Layout.SmallView",
        path: "/docs/layout/small-view",
        description: "SmallView component",
      },
      {
        label: "Layout.MediumView",
        path: "/docs/layout/medium-view",
        description: "MediumView component",
      },
      {
        label: "Layout.LargeView",
        path: "/docs/layout/large-view",
        description: "LargeView component",
      },
      {
        label: "Layout.XLargeView",
        path: "/docs/layout/xlarge-view",
        description: "XLargeView component",
      },
    ],
  },
  {
    label: "List",
    path: "/docs/list",
    description: "List component",
    sections: [
      {
        label: "List.Item",
        path: "/docs/list/item",
        description: "List Item component",
      },
      {
        label: "List.Accordion",
        path: "/docs/list/accordion",
        description: "List Accordion component",
      },
    ],
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
    label: "Table",
    path: "/docs/table",
    description: "Table component",
    sections: [
      {
        label: "Table.Header",
        path: "/docs/table/header",
        description: "Table Header component",
      },
      {
        label: "Table.Body",
        path: "/docs/table/body",
        description: "Table Body component",
      },
      {
        label: "Table.Row",
        path: "/docs/table/row",
        description: "Table Row component",
      },
      {
        label: "Table.Title",
        path: "/docs/table/title",
        description: "Table Title component",
      },
      {
        label: "Table.Cell",
        path: "/docs/table/cell",
        description: "Table Cell component",
      },
    ],
  },
  {
    label: "TextInput",
    path: "/docs/text-input",
    description: "TextInput component",
  },
];
