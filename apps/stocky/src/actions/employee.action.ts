import { db } from "@/firebase";
import { Employee, validateEmployee } from "@/schema";
import { validatePayload } from "@/utils";

export const employeeCollection = db.collection("employees");

//get all employees
export async function getEmployees(): Promise<Employee[]> {
  const querySnapshot = await employeeCollection.get();
  const employees = querySnapshot.docs.map((doc: any) => {
    return validateEmployee({ id: doc.id, ...doc.data() });
  });
  return employees;
}

//create an employee
export async function createEmployee(employee: Employee): Promise<void> {
  const payload = validatePayload(employee);
  const data = validateEmployee(payload);
  await employeeCollection.add({
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}
