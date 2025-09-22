import { db } from "@/firebase";
import { Product, ProductSchema } from "@/schema";
import { validatePayload } from "@/utils";

export const productCollection = db.collection("products");

// Create a new product
export async function createProduct(product: Product): Promise<Product> {
  const payload = validatePayload(product);
  const data = ProductSchema.parse(payload);
  const result = await productCollection.add({
    ...data,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  });
  return Object.assign({ id: result.id }, data);
}

// Get all products
export async function getProducts(): Promise<Product[]> {
  const snapshot = await productCollection.orderBy("createdAt", "desc").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as any) }));
}

// Get product by id
export async function getProductById(id: string): Promise<Product> {
  const snapshot = await productCollection.doc(id).get();
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...(snapshot.data() as any),
    };
  }
  throw new Error("Product not found");
}

// Delete product by id
export async function deleteProductById(id: string): Promise<void> {
  await productCollection.doc(id).delete();
}
