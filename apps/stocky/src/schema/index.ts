// Install: npm i zod
import { z } from "zod";

/**
 * Helper: accept Date | string | number and return JS Date
 * (works well for Firestore Timestamp.toDate() or ISO strings)
 */
const FirestoreDate = z.preprocess((arg) => {
  if (arg instanceof Date) return arg;
  if (typeof arg === "number") return new Date(arg);
  if (typeof arg === "string") {
    const d = new Date(arg);
    return isNaN(d.getTime()) ? undefined : d;
  }
  return undefined;
}, z.date());

/* -------------------------
   Enums / small types
   ------------------------- */
export const UserRoleEnum = z.union([z.literal("admin"), z.literal("staff")]);
export type UserRole = z.infer<typeof UserRoleEnum>;

export const SalaryTypeEnum = z.union([
  z.literal("hourly"),
  z.literal("daily"),
  z.literal("monthly"),
]);
export type SalaryType = z.infer<
  typeof SalaryTypeEnum
>; /* -------------------------
   User
   ------------------------- */
export const ProfileSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1).nonempty(),
  email: z.string().nonempty(),
  phone: z.string().nonempty(),
  role: UserRoleEnum,
  userId: z.string().nullable(),
  avatar: z.string().nullable(),
  address: z.string().nullable(),
  managerId: z.string().nullable(),
  active: z.boolean().default(true),
  createdAt: FirestoreDate.optional(),
  updatedAt: FirestoreDate.optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;

/* -------------------------
   Employee
   ------------------------- */
export const EmployeeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  userId: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().max(15),
  salaryType: SalaryTypeEnum,
  address: z.string().nullable(),
  salaryAmount: z.number().nonnegative(),
  managerId: z.string().nullable().optional(),
  avatar: z.string().nullable().optional(),
  active: z.boolean().default(true),
  createdAt: FirestoreDate.optional(),
  updatedAt: FirestoreDate.optional(),
});
export type Employee = z.infer<typeof EmployeeSchema>;

/* -------------------------
   Product
   ------------------------- */
export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1).nonempty(),
  sku: z.string().nullable(),
  description: z.string().nullable(),
  unit: z.string().nonempty(),
  brand: z.string().nullable(),
  image: z.string().nullable(),
  category: z.string().nullable(),
  price: z.number().nonnegative(),
  costPrice: z.number().nonnegative(),
  barcode: z.string().nullable(),
  stock: z.number().int().nonnegative().default(0),
  createdBy: z.string().nullable(),
  active: z.boolean().default(true),
  createdAt: FirestoreDate.optional(),
  updatedAt: FirestoreDate.optional(),
});
export type Product = z.infer<typeof ProductSchema>;

/* -------------------------
   StockAdjustment
   - record stock changes (inflows/outflows)
   ------------------------- */
export const StockAdjustmentSchema = z.object({
  id: z.string().optional(),
  productId: z.string(),
  changedBy: z.string().nullable(),
  delta: z.number().int(),
  reason: z.string().nullable(),
  reference: z.string().nullable(),
  resultingStock: z.number().int().nonnegative(),
  createdAt: FirestoreDate.optional(),
});
export type StockAdjustment = z.infer<typeof StockAdjustmentSchema>;

/* -------------------------
   Attendance
   - One doc per day per user; you may optionally store multiple checkins
   ------------------------- */
export const AttendanceSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  date: z.string(),
  checkIn: FirestoreDate.optional(),
  checkOut: FirestoreDate.optional(),
  punches: z.array(FirestoreDate).optional(),
  status: z
    .union([
      z.literal("present"),
      z.literal("absent"),
      z.literal("on_leave"),
      z.literal("pending"),
    ])
    .default("present"),
  approved: z.boolean().default(false),
  approvedBy: z.string().nullable(),
  totalHours: z.number().nonnegative(),
  notes: z.string().nullable(),
  createdAt: FirestoreDate.optional(),
  updatedAt: FirestoreDate.optional(),
});
export type Attendance = z.infer<typeof AttendanceSchema>;

/* -------------------------
   AttendanceRequest
   - employee requests correction/approval for a day's attendance
   ------------------------- */
export const AttendanceRequestSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  date: z.string(),
  type: z
    .union([
      z.literal("correction"),
      z.literal("manual_entry"),
      z.literal("leave"),
    ])
    .default("correction"),
  requestedCheckIn: FirestoreDate.optional(),
  requestedCheckOut: FirestoreDate.optional(),
  reason: z.string().min(1),
  status: z
    .union([z.literal("pending"), z.literal("approved"), z.literal("rejected")])
    .default("pending"),
  requestedAt: FirestoreDate.optional(),
  reviewedAt: FirestoreDate.optional(),
  reviewedBy: z.string().nullable(),
  adminComment: z.string().nullable(),
});
export type AttendanceRequest = z.infer<typeof AttendanceRequestSchema>;

/* -------------------------
   SalaryRecord
   - generated monthly (or for a period)
   ------------------------- */
export const SalaryRecordSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  period: z.string(),
  generatedAt: FirestoreDate.optional(),
  totalDaysPresent: z.number().int().nonnegative(),
  totalHours: z.number().nonnegative(),
  baseSalary: z.number().nonnegative(),
  adjustments: z.number().default(0),
  deductions: z.number().default(0),
  netPay: z.number().nonnegative(),
  paid: z.boolean().default(false),
  paidAt: FirestoreDate.optional(),
  paymentReference: z.string().nullable(),
  createdAt: FirestoreDate.optional(),
  updatedAt: FirestoreDate.optional(),
});
export type SalaryRecord = z.infer<typeof SalaryRecordSchema>;

/* -------------------------
   Useful helpers
   ------------------------- */

/**
 * Validate Firestore doc data (read) before using in app.
 * Example:
 *   const data = doc.data();
 *   const user = UserSchema.parse({ ...data, id: doc.id });
 */
export function validateEmployee(data: unknown): Employee {
  return EmployeeSchema.parse(data);
}

export function validateProduct(data: unknown) {
  return ProductSchema.parse(data);
}

export function validateAttendance(data: unknown) {
  return AttendanceSchema.parse(data);
}

export function validateAttendanceRequest(data: unknown) {
  return AttendanceRequestSchema.parse(data);
}

export function validateSalaryRecord(data: unknown) {
  return SalaryRecordSchema.parse(data);
}

export function validateStockAdjustment(data: unknown) {
  return StockAdjustmentSchema.parse(data);
}

export function validateProfile(data: unknown) {
  return ProfileSchema.parse(data);
}
