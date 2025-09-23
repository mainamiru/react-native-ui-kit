import { MaterialCommunityIcons } from "@expo/vector-icons";
import { List } from "@mainamiru/react-native-ui-kit";
import { Href, Link, usePathname } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigations } from "../utils/data.utils";

export const DrawerContents = () => {
  const pathName = usePathname();
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <FlatList
        data={navigations}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => {
          const isActive = pathName === item.path;
          return (
            <Link
              asChild={true}
              href={item.path as Href}
              style={{
                padding: 10,
                backgroundColor: isActive ? "#f5f5f5" : "transparent",
              }}
            >
              <List.Item
                title={item.label}
                style={{ width: "100%" }}
                description={item.description}
                right={() => (
                  <MaterialCommunityIcons
                    size={20}
                    color="darkblue"
                    name="chevron-right-circle-outline"
                  />
                )}
              />
            </Link>
          );
        }}
      />
    </SafeAreaView>
  );
};
