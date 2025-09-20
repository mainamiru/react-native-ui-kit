import { useTheme } from "@/hooks";
import { User } from "@/schema";
import {
  Avatar,
  Badge,
  Container,
  FlexView,
  Row,
  Text,
} from "@mainamiru/react-native-ui-kit";
import { capitalize } from "lodash";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

const DUMMY_EMPLOYEES: User[] = [
  {
    id: "u1",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    role: "admin",
    salaryType: "monthly",
    salaryAmount: 90000,
    managerId: null,
    avatar: undefined,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "u2",
    name: "Priya Gupta",
    email: "priya.gupta@example.com",
    phone: "+91 99887 66554",
    role: "staff",
    salaryType: "monthly",
    salaryAmount: 55000,
    managerId: "u1",
    avatar: undefined,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "u3",
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    phone: "+91 91234 56789",
    role: "employee",
    salaryType: "daily",
    salaryAmount: 2500,
    managerId: "u2",
    avatar: undefined,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "u4",
    name: "Neha Singh",
    email: "neha.singh@example.com",
    phone: "+91 90123 45678",
    role: "employee",
    salaryType: "hourly",
    salaryAmount: 400,
    managerId: "u2",
    avatar: undefined,
    active: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

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
  type: User["salaryType"];
  amount: User["salaryAmount"];
}) {
  if (!type || amount == null) return null;
  const unit = type === "hourly" ? "/hr" : type === "daily" ? "/day" : "/mo";
  return (
    <Text style={styles.metaText}>{`₹${amount.toLocaleString()} ${unit}`}</Text>
  );
}

const EmployeeItem = ({ item }: { item: User }) => {
  const { colors } = useTheme();
  return (
    <Row
      gap={15}
      padding={10}
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
        <Row gap={8}>
          <Text variant="titleMedium">{item.name}</Text>
          <Badge>{capitalize(item.role)}</Badge>
        </Row>
        <Text variant="bodyMedium">{item.email}</Text>
        <Text variant="bodyMedium">{item.phone}</Text>
        <Salary type={item.salaryType} amount={item.salaryAmount} />
      </FlexView>
    </Row>
  );
};

const EmployeesScreen = () => {
  return (
    <Container>
      <FlatList
        data={DUMMY_EMPLOYEES}
        keyExtractor={(it) => it.id ?? it.email}
        renderItem={({ item }) => <EmployeeItem item={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0c",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  row: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#151519",
    alignItems: "center",
  },
  inactiveRow: {
    opacity: 0.6,
  },
  separator: {
    height: 10,
  },
  avatarWrap: {
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#2a2a32",
  },
  avatarFallback: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#cbd5e1",
    fontWeight: "700",
    fontSize: 16,
  },
  info: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  name: {
    color: "#e5e7eb",
    fontWeight: "700",
    fontSize: 16,
    marginRight: 8,
  },
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#1f2937",
  },
  pillMuted: {
    backgroundColor: "#374151",
    marginLeft: 6,
  },
  pillText: {
    color: "#cbd5e1",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    flexWrap: "wrap",
    gap: 6,
  },
  metaText: {
    color: "#94a3b8",
    fontSize: 13,
  },
  dot: {
    color: "#475569",
    marginHorizontal: 4,
  },
  role_admin: {
    backgroundColor: "#1e3a8a",
  },
  role_staff: {
    backgroundColor: "#065f46",
  },
  role_employee: {
    backgroundColor: "#6b21a8",
  },
});

export default EmployeesScreen;
