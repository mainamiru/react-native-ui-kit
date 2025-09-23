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
    label: "Button",
    path: "/docs/button",
    description: "Button component",
  },
  {
    label: "Picker",
    path: "/docs/picker",
    description: "Picker component",
  },
];
