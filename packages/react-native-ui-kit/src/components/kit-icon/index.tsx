import {
  EvilIcons,
  EvilIconsIconName,
} from "@react-native-vector-icons/evil-icons";
import React from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";

export interface IconProps extends TextProps {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const createIcon =
  (name: EvilIconsIconName) =>
  ({ size = 20, color = "black", style, ...rest }: IconProps) => {
    return (
      <EvilIcons
        name={name}
        size={size}
        style={style}
        color={color}
        {...rest}
      />
    );
  };

export const KitIcon = {
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
  ScSoundcloud: createIcon("sc-soundcloud"),
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
  Spinner2: createIcon("spinner-2"),
  Spinner3: createIcon("spinner-3"),
  Star: createIcon("star"),
  Tag: createIcon("tag"),
  Trash: createIcon("trash"),
  Trophy: createIcon("trophy"),
  Undo: createIcon("undo"),
  Unlock: createIcon("unlock"),
  User: createIcon("user"),
};

export default KitIcon;
