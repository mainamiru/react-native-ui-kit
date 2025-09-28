import { useTheme } from "@/hooks";
import { Entypo } from "@expo/vector-icons";
import { List } from "@mainamiru/react-native-ui-kit";
import { Href, Link, router, usePathname } from "expo-router";
import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigations } from "../utils/data.utils";

export const DrawerContents = () => {
  const pathName = usePathname();
  const { height } = useWindowDimensions();
  const { theme } = useTheme();
  const activeBackground = theme.dark ? "#333d3b" : "#dfe6e4";
  return (
    <SafeAreaView style={{ height }}>
      <FlatList
        data={navigations}
        scrollEnabled={true}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => {
          const isActive = pathName === item.path;
          if (item.sections?.length) {
            return (
              <List.Accordion
                expanded={isActive}
                title={item.label}
                onPress={() => router.push(item.path as Href)}
                style={{
                  width: "100%",
                  borderWidth: 0,
                  borderRadius: 0,
                  backgroundColor: isActive ? activeBackground : "transparent",
                }}
                contentStyle={{ padding: 0 }}
                description={item.description}
              >
                {item.sections?.map((section) => (
                  <Link
                    asChild={true}
                    key={section.path}
                    href={section.path as Href}
                    style={{
                      backgroundColor:
                        section.path === pathName
                          ? activeBackground
                          : "transparent",
                    }}
                  >
                    <List.Item
                      title={section.label}
                      description={section.description}
                      right={() => (
                        <Entypo
                          size={20}
                          name="chevron-with-circle-right"
                          color={theme.dark ? "white" : "black"}
                        />
                      )}
                    />
                  </Link>
                ))}
              </List.Accordion>
            );
          }
          return (
            <Link
              asChild={true}
              href={item.path as Href}
              style={{
                backgroundColor: isActive ? activeBackground : "transparent",
              }}
            >
              <List.Item
                title={item.label}
                description={item.description}
                right={() => (
                  <Entypo
                    size={20}
                    name="chevron-with-circle-right"
                    color={theme.dark ? "white" : "black"}
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
