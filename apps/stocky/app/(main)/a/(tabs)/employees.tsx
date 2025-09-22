import { getEmployees } from "@/actions";
import { useTheme } from "@/hooks";
import { Employee } from "@/schema";
import {
  Avatar,
  Center,
  Container,
  FlexView,
  Row,
  Text,
} from "@mainamiru/react-native-ui-kit";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FlatList, RefreshControl } from "react-native";

function getInitials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last =
    parts[parts.length - 1] && parts.length > 1
      ? parts[parts.length - 1][0]
      : "";
  return (first + last).toUpperCase();
}

function Salary({
  type,
  amount,
}: {
  type: Employee["salaryType"];
  amount: Employee["salaryAmount"];
}) {
  if (!type || amount == null) return null;
  const unit = type === "hourly" ? "/hr" : type === "daily" ? "/day" : "/mo";
  return <Text>{`₹${amount.toLocaleString()}${unit}`}</Text>;
}

const EmployeeItem = ({ item }: { item: Employee }) => {
  const { colors } = useTheme();
  return (
    <Row
      gap={15}
      padding={15}
      elevation={2}
      borderRadius={10}
      alignItems="center"
      backgroundColor={colors.card}
    >
      <Avatar
        size={60}
        source={item.avatar}
        fallback={getInitials(item.name)}
      />
      <FlexView>
        <Text variant="titleMedium">{item.name}</Text>
        {item.email && <Text variant="bodyMedium">{item.email}</Text>}
        <Text variant="bodyMedium">{item.phone}</Text>
        <Salary type={item.salaryType} amount={item.salaryAmount} />
      </FlexView>
    </Row>
  );
};

const EmployeesScreen = () => {
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => await getEmployees(),
  });
  return (
    <Container isLoading={isLoading}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <EmployeeItem item={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }
        ListEmptyComponent={() => (
          <Center height={300} padding={10}>
            <Text>No employees found</Text>
          </Center>
        )}
      />
    </Container>
  );
};

export default EmployeesScreen;
