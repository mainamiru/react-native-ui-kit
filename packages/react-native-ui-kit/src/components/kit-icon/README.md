# KitIcon

`KitIcon` is the branded **icon component** of `@mainamiru/react-native-ui-kit`.  
It provides a clean, typed wrapper around **EvilIcons**, exposing every icon directly as `KitIcon.IconName`.

---

## ✨ Features

- ✅ Simple API: `<KitIcon.ChevronDown size={24} color="red" />`
- ✅ All **70+ EvilIcons** available out of the box
- ✅ TypeScript support for props
- ✅ Branded namespace (`KitIcon`) for consistency across your design system
- ✅ Easy to extend with more icons in the future

---

## 🎨 Icon Reference

All `KitIcon` icons (EvilIcons set):

| Name         | Name         | Name         | Name            |
| ------------ | ------------ | ------------ | --------------- |
| Archive      | ArrowDown    | ArrowLeft    | ArrowRight      |
| ArrowUp      | Bell         | Calendar     | Camera          |
| Cart         | Chart        | Check        | ChevronDown     |
| ChevronLeft  | ChevronRight | ChevronUp    | Clock           |
| Close        | CloseO       | Comment      | CreditCard      |
| Envelope     | Exclamation  | ExternalLink | Eye             |
| Gear         | Heart        | Image        | Like            |
| Link         | Location     | Lock         | Minus           |
| Navicon      | Paperclip    | Pencil       | Play            |
| Plus         | Pointer      | Question     | Redo            |
| Refresh      | Retweet      | ScFacebook   | ScGithub        |
| ScGooglePlus | ScInstagram  | ScLinkedin   | ScOdnoklassniki |
| ScPinterest  | ScSkype      | ScTelegram   | ScTumblr        |
| ScTwitter    | ScVimeo      | ScVk         | ScYoutube       |
| Search       | ShareApple   | ShareGoogle  | Spinner         |
| Spinner2     | Spinner3     | Star         | Tag             |
| Trash        | Trophy       | Undo         | Unlock          |
| User         | UserMinus    | UserPlus     | Users           |

---

## ✅ Usage Example

```tsx
import React from "react";
import { View } from "react-native";
import { KitIcon } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16, padding: 20 }}>
      <KitIcon.ChevronDown size={24} color="red" />
      <KitIcon.Search size={28} color="green" />
      <KitIcon.User size={28} color="blue" />
      <KitIcon.Heart size={28} color="pink" />
    </View>
  );
}
```
