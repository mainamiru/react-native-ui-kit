import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { EvilIcons } from "../evil-icons";

export type IconName = React.ComponentProps<typeof EvilIcons>["name"];
export type DefaultIconProps = Omit<
  React.ComponentProps<typeof EvilIcons>,
  "name" | "color"
>;

export interface IconProps extends DefaultIconProps {
  size: number;
  color?: string;
  testID?: string;
  direction?: "rtl" | "ltr";
  allowFontScaling?: boolean;
  style?: StyleProp<TextStyle>;
}

//create icon
const createIcon = (name: IconName): React.FC<IconProps> => {
  // eslint-disable-next-line react/display-name
  return ({ size = 24, color = "#000", ...props }) => {
    return <EvilIcons name={name} size={size} color={color} {...props} />;
  };
};

/**
 * EvilIcons full mapping (~70 icons).
 * All names are PascalCase for easier usage.
 * Example: <Icon.ChevronLeft /> instead of <EvilIcons name="chevron-left" />
 */
export const Icon = {
  Archive: createIcon("archive"),
  ArrowDown: createIcon("arrow-down"),
  ArrowLeft: createIcon("arrow-left"),
  ArrowRight: createIcon("arrow-right"),
  ArrowUp: createIcon("arrow-up"),
  Bell: createIcon("bell"),
  Calendar: createIcon("calendar"),
  Camera: createIcon("camera"),
  Cart: createIcon("cart"),
  Chart: createIcon("chart"),
  Check: createIcon("check"),
  ChevronDown: createIcon("chevron-down"),
  ChevronLeft: createIcon("chevron-left"),
  ChevronRight: createIcon("chevron-right"),
  ChevronUp: createIcon("chevron-up"),
  Clock: createIcon("clock"),
  Close: createIcon("close"),
  CloseO: createIcon("close-o"),
  Comment: createIcon("comment"),
  CreditCard: createIcon("credit-card"),
  Envelope: createIcon("envelope"),
  Exclamation: createIcon("exclamation"),
  ExternalLink: createIcon("external-link"),
  Eye: createIcon("eye"),
  Gear: createIcon("gear"),
  Heart: createIcon("heart"),
  Image: createIcon("image"),
  Like: createIcon("like"),
  Link: createIcon("link"),
  Location: createIcon("location"),
  Lock: createIcon("lock"),
  Minus: createIcon("minus"),
  Navicon: createIcon("navicon"),
  Paperclip: createIcon("paperclip"),
  Pencil: createIcon("pencil"),
  Play: createIcon("play"),
  Plus: createIcon("plus"),
  Pointer: createIcon("pointer"),
  Question: createIcon("question"),
  Redo: createIcon("redo"),
  Refresh: createIcon("refresh"),
  Retweet: createIcon("retweet"),
  ScFacebook: createIcon("sc-facebook"),
  ScGithub: createIcon("sc-github"),
  ScGooglePlus: createIcon("sc-google-plus"),
  ScInstagram: createIcon("sc-instagram"),
  ScLinkedin: createIcon("sc-linkedin"),
  ScOdnoklassniki: createIcon("sc-odnoklassniki"),
  ScPinterest: createIcon("sc-pinterest"),
  ScSkype: createIcon("sc-skype"),
  ScTelegram: createIcon("sc-telegram"),
  ScTumblr: createIcon("sc-tumblr"),
  ScTwitter: createIcon("sc-twitter"),
  ScVimeo: createIcon("sc-vimeo"),
  ScVk: createIcon("sc-vk"),
  ScYoutube: createIcon("sc-youtube"),
  Search: createIcon("search"),
  ShareApple: createIcon("share-apple"),
  ShareGoogle: createIcon("share-google"),
  Spinner: createIcon("spinner"),
  Star: createIcon("star"),
  Tag: createIcon("tag"),
  Trash: createIcon("trash"),
  Trophy: createIcon("trophy"),
  Undo: createIcon("undo"),
  Unlock: createIcon("unlock"),
  User: createIcon("user"),
} as const;

export default Icon;
