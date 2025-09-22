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
  const payload = validatePayload(profile);
  const data = validateProfile(payload);
  await profileCollection.add(data);
}
