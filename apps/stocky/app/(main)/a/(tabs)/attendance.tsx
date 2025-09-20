import { useTheme } from "@/hooks";
import type { Attendance, User } from "@/schema";
import {
  Badge,
  Container,
  FlexView,
  Row,
  Text,
} from "@mainamiru/react-native-ui-kit";
import { capitalize } from "lodash";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

// Dummy users to reference in attendance (for avatar/name rendering)
const USERS: Record<string, Pick<User, "name" | "avatar">> = {
  u1: { name: "Aarav Sharma", avatar: undefined },
  u2: { name: "Priya Gupta", avatar: undefined },
  u3: { name: "Rahul Verma", avatar: undefined },
  u4: { name: "Neha Singh", avatar: undefined },
};

// Dummy attendance data conforming to Attendance schema
const DUMMY_ATTENDANCE: Attendance[] = [
  {
    id: "a1",
    userId: "u2",
    date: "2025-09-18",
    checkIn: new Date("2025-09-18T09:12:00"),
    checkOut: new Date("2025-09-18T18:03:00"),
    punches: [],
    status: "present",
    approved: true,
    approvedBy: "u1",
    totalHours: 8.8,
    notes: "On time",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a2",
    userId: "u3",
    date: "2025-09-18",
    checkIn: new Date("2025-09-18T10:05:00"),
    checkOut: new Date("2025-09-18T17:30:00"),
    punches: [],
    status: "present",
    approved: false,
    approvedBy: null,
    totalHours: 7.4,
    notes: "Late arrival",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a3",
    userId: "u4",
    date: "2025-09-18",
    checkIn: undefined,
    checkOut: undefined,
    punches: [],
    status: "absent",
    approved: false,
    approvedBy: null,
    totalHours: 0,
    notes: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a4",
    userId: "u2",
    date: "2025-09-19",
    checkIn: new Date("2025-09-19T09:01:00"),
    checkOut: new Date("2025-09-19T18:02:00"),
    punches: [],
    status: "present",
    approved: true,
    approvedBy: "u1",
    totalHours: 8.9,
    notes: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a5",
    userId: "u3",
    date: "2025-09-19",
    checkIn: new Date("2025-09-19T09:40:00"),
    checkOut: new Date("2025-09-19T18:10:00"),
    punches: [],
    status: "pending",
    approved: false,
    approvedBy: null,
    totalHours: 7.8,
    notes: "Awaiting approval",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a6",
    userId: "u4",
    date: "2025-09-19",
    checkIn: new Date("2025-09-19T09:15:00"),
    checkOut: new Date("2025-09-19T17:45:00"),
    punches: [],
    status: "on_leave",
    approved: true,
    approvedBy: "u1",
    totalHours: 0,
    notes: "Half-day leave",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function formatTime(date?: Date) {
  if (!date) return "--:--";
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

const STATUS_COLORS: Record<Attendance["status"], string> = {
  present: "#065f46",
  absent: "#991b1b",
  on_leave: "#6b21a8",
  pending: "#92400e",
};

const AttendanceItem = ({ item }: { item: Attendance }) => {
  const user = USERS[item.userId];
  const { colors } = useTheme();
  const statusColor = STATUS_COLORS[item.status] ?? "#1f2937";
  return (
    <Row
      gap={14}
      padding={14}
      elevation={2}
      borderRadius={12}
      alignItems="center"
      backgroundColor={colors.card}
    >
      <FlexView>
        <Row gap={8} alignItems="center">
          <Text variant="titleMedium">{user?.name ?? item.userId}</Text>
          <Badge backgroundColor={statusColor}>{capitalize(item.status)}</Badge>
          {item.approved ? (
            <Badge backgroundColor="#1e3a8a">Approved</Badge>
          ) : (
            <Badge backgroundColor="#374151">Unapproved</Badge>
          )}
        </Row>
        <View>
          <Text variant="bodyMedium">Date: {item.date}</Text>
          <Text variant="bodyMedium">Check In: {formatTime(item.checkIn)}</Text>
          <Text variant="bodyMedium">
            Check Out: {formatTime(item.checkOut)}
          </Text>
          <Text variant="bodyMedium">Hours: {item.totalHours ?? 0}</Text>
        </View>
        {item.notes ? (
          <Text variant="bodySmall" style={styles.notes}>
            {item.notes}
          </Text>
        ) : null}
      </FlexView>
    </Row>
  );
};

const AttendanceScreen = () => {
  return (
    <Container>
      <FlatList
        data={DUMMY_ATTENDANCE}
        keyExtractor={(it) => it.id ?? `${it.userId}-${it.date}`}
        renderItem={({ item }) => <AttendanceItem item={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  metaRow: {
    marginTop: 6,
    flexWrap: "wrap",
    alignItems: "center",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#475569",
    marginHorizontal: 6,
  },
  notes: {
    marginTop: 6,
    color: "#94a3b8",
  },
});

export default AttendanceScreen;
