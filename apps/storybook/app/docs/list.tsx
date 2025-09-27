import { DocsViewer } from "@/components";
import { Avatar, Divider, List } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";
interface User {
  name: string;
  avatar?: string;
  bio?: string;
}

const data: User[] = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Meera",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Lily Doe",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Mark Doe",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    name: "Lucky Babu",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const ListDocsScreen = () => (
  <DocsViewer
    title="List.Accordion"
    description="A dynamic accordion that measures content height for smooth expand and collapse animations."
    usage="Use List.Accordion to reveal additional information without navigating away or cluttering the screen. Great for FAQs, settings, and grouped content."
    exampleCode={`import React from "react";
import { List } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <List.Accordion title="Click to Expand">
      <Text>This is the dynamic content of the accordion.</Text>
      <Text>Children height is measured automatically.</Text>
    </List.Accordion>
  );
}`}
    props={{
      title: {
        type: "string",
        required: true,
        description: "Title text displayed in the accordion header.",
      },
      children: {
        type: "React.ReactNode",
        required: true,
        description: "Content rendered inside the accordion when expanded.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Styles applied to the accordion container.",
      },
      titleStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom styles for the title row.",
      },
      contentStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Styles applied to the expanded content container.",
      },
    }}
  >
    {data.map((user) => (
      <View key={user.name}>
        <List.Item
          title={user.name}
          description={user.bio}
          left={() => (
            <Avatar.Image
              size={50}
              alt={user.name}
              source={{ uri: user.avatar }}
              placeholder={{
                uri: "https://randomuser.me/api/portraits/men/6.jpg",
              }}
            />
          )}
        />
        <Divider />
      </View>
    ))}
  </DocsViewer>
);

export default ListDocsScreen;
