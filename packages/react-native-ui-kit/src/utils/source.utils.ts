import { ImageSourcePropType } from "react-native";

export function isImageSource(source: any): source is ImageSourcePropType {
  return (
    typeof source === "number" ||
    (source && typeof source === "object" && "uri" in source)
  );
}
