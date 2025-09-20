import { getProducts } from "@/actions";
import { useTheme } from "@/hooks";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  FlexView,
  List,
  SearchBar,
  SmartImage,
  Text,
} from "@mainamiru/react-native-ui-kit";
import { useQuery } from "@tanstack/react-query";
import { orderBy } from "firebase/firestore";
import React from "react";
import { FlatList, RefreshControl, View } from "react-native";

const ProductsScreen = () => {
  const { colors } = useTheme();
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await getProducts(orderBy("createdAt", "desc"));
    },
  });

  return (
    <Container isLoading={isLoading} style={{ backgroundColor: colors.card }}>
      <SearchBar
        iconColor="grey"
        style={{ margin: 10 }}
        placeholder="Search products"
      />
      <FlexView>
        <FlatList
          data={data}
          keyExtractor={(_, key) => String(key)}
          contentContainerStyle={{ padding: 10, gap: 15 }}
          refreshControl={
            <RefreshControl
              tintColor={colors.text}
              refreshing={isRefetching}
              onRefresh={() => refetch()}
            />
          }
          renderItem={({ item }) => (
            <List.View
              title={item.name}
              description="This is the demo products"
              right={() => (
                <MaterialIcons
                  size={24}
                  name="more-vert"
                  color={colors.text}
                  onPress={() => console.log(item)}
                />
              )}
              left={() => (
                <SmartImage
                  source={item.image}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    overflow: "hidden",
                  }}
                />
              )}
              style={{
                padding: 10,
                elevation: 2,
                borderRadius: 12,
                overflow: "hidden",
                backgroundColor: colors.card,
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text>SKU: {item.sku}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Stock: {item.stock}</Text>
              </View>
            </List.View>
          )}
        />
      </FlexView>
    </Container>
  );
};

export default ProductsScreen;
