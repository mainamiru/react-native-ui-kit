import { View, ViewProps } from "react-native";
import { withLayout } from "./with-layout";

// Create responsive views
export const SmallView = withLayout<ViewProps>(View, { mode: "sm" });
export const MediumView = withLayout<ViewProps>(View, { mode: "md" });
export const LargeView = withLayout<ViewProps>(View, { mode: "lg" });
export const XLargeView = withLayout<ViewProps>(View, { mode: "xlg" });
