import { db } from "@/firebase";
import { Employee, validateEmployee } from "@/schema";
import { validatePayload } from "@/utils";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@react-native-firebase/firestore";

export const employeeCollection = collection(db, "employees");

//get all employees
export async function getEmployees(): Promise<Employee[]> {
  const querySnapshot = await getDocs(
    query(
      employeeCollection,
      where("role", "==", "employee"),
      orderBy("createdAt", "desc")
    )
  );
  const employees = querySnapshot.docs.map((doc: any) => {
    return validateEmployee({ id: doc.id, ...doc.data() });
  });
  return employees;
}

//create an employee
export async function createEmployee(employee: Employee): Promise<Employee> {
  const payload = validatePayload(employee);
  const data = validateEmployee(payload);
  const docRef = await addDoc(employeeCollection, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  return validateEmployee(
    Object.assign(data, {
      id: docRef.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  );
}
