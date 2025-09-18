import { Card, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const Installation = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text variant="titleMedium">Installation</Text>
      <Card>
        <Card.Image
          alt="Photo"
          source="https://images.pexels.com/photos/31258133/pexels-photo-31258133.jpeg"
        />
        <Card.Content>
          <Card.Title>Hello World</Card.Title>
          <Card.Description>This is the card description</Card.Description>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Installation;
