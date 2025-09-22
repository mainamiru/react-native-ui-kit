import { db } from "@/firebase";
import { Profile, validateProfile } from "@/schema";
import { validatePayload } from "@/utils";
export const profileCollection = db.collection("profiles");

//get profile by userId
export async function getProfile(userId: string): Promise<Profile | null> {
  const results = await profileCollection.where("userId", "==", userId).get();
  if (results.docs && results.docs[0]) {
    const result = results.docs[0];
    return validateProfile({
      id: result.id,
      ...result.data(),
    });
  }
  return null;
}

//create use profile
export async function createProfile(profile: Profile): Promise<void> {
  const [emailResults, phoneResults] = await Promise.all([
    await profileCollection.where("email", "==", profile.email).get(),
    await profileCollection.where("phone", "==", profile.phone).get(),
  ]);
  if (emailResults.docs.length > 0 || phoneResults.docs.length > 0) {
    throw new Error("Email or phone already exists");
  }
  const payload = validatePayload(profile);
  const data = validateProfile(payload);
  await profileCollection.add({
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}
