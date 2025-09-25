import * as React from "react";

import EvilIcons, { IconProps } from "../components/evil-icons";

export type Settings = {
  Icon?: ({
    name,
    color,
    size,
    direction,
    testID,
  }: IconProps) => React.ReactNode;
};

export const SettingsContext = React.createContext<Settings>({
  Icon: EvilIcons,
});
