import AvatarBase from "./avatar-base";
import AvatarImage from "./avatar-image";
import AvatarText from "./avatar-text";

export const Avatar = Object.assign(AvatarBase, {
  Text: AvatarText,
  Image: AvatarImage,
});
