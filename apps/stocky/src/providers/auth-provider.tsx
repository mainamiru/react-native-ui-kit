import { employeeCollection } from "@/actions";
import { auth } from "@/firebase";
import { Employee } from "@/schema";
import {
  FirebaseAuthTypes,
  onAuthStateChanged,
} from "@react-native-firebase/auth";
import { doc, getDoc, query, where } from "@react-native-firebase/firestore";
import * as React from "react";

export type User = FirebaseAuthTypes.User;

export interface AuthContextType {
  user: User | null;
  profile: Employee | null;
  isLoading: boolean;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  profile: null,
  isLoading: false,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [profile, setProfile] = React.useState<Employee | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isLoading || !user) return;
    const docRef = doc(
      employeeCollection,
      query(where("userId", "==", user.uid))
    );
    getDoc(docRef)
      .then((doc) => {
        if (doc.data()) {
          setProfile({
            id: doc.id,
            ...(doc.data() as Employee),
          });
        }
      })
      .catch(console.error);
  }, [user, isLoading]);

  //handle auth
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
