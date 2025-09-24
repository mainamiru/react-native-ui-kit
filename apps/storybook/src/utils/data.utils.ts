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
    sections: [
      {
        label: "Installation",
        path: "/docs/installation",
        description: "Install the app",
      },
      {
        label: "Usage",
        path: "/docs/usage",
        description: "Use the app",
      },
    ],
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
  },
  {
    label: "Container",
    path: "/docs/container",
    description: "Container component",
  },
  {
    label: "FlexView",
    path: "/docs/flex-view",
    description: "FlexView component",
  },
  {
    label: "Picker",
    path: "/docs/picker",
    description: "Picker component",
  },
];
