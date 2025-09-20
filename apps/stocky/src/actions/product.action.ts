import { auth, db } from "@/firebase";
import { Product, ProductSchema } from "@/schema";
import {
  QueryConstraint,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

export const productCollection = collection(db, "products");

export async function createProduct(product: Product): Promise<Product> {
  const data = ProductSchema.parse(product);
  const currentUser = auth.currentUser;
  const result = await addDoc(productCollection, {
    name: data.name.trim(),
    stock: data.stock,
    price: data.price,
    active: data.active,
    image: data.image?.trim() || null,
    costPrice: data.costPrice,
    sku: data.sku?.trim() || null,
    unit: data.unit.trim() || null,
    barcode: data.barcode?.trim() || null,
    category: data.category?.trim() || null,
    description: data.description?.trim() || null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: currentUser?.uid || null,
  });
  return Object.assign({ id: result.id }, data);
}

// Get all products
export async function getProducts(...queryConstraint: QueryConstraint[]) {
  const products: Product[] = [];
  const snapshot = await getDocs(query(productCollection, ...queryConstraint));
  if (snapshot.docs) {
    snapshot.forEach((doc) => {
      if (doc.exists()) {
        products.push({ id: doc.id, ...(doc.data() as any) });
      }
    });
  }

  return products;
}

// Get product by id
export async function getProductById(id: string): Promise<Product> {
  const docRef = doc(productCollection, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...(docSnap.data() as any),
    };
  }
  throw new Error("Product not found");
}

// Delete product by id
export async function deleteProductById(id: string): Promise<void> {
  const docRef = doc(productCollection, id);
  await deleteDoc(docRef);
}
