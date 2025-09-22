import { getProfile } from "@/actions";
import { auth } from "@/firebase";
import { Profile } from "@/schema";
import {
  FirebaseAuthTypes,
  onAuthStateChanged,
} from "@react-native-firebase/auth";
import * as React from "react";

export type User = FirebaseAuthTypes.User;

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  getProfile: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  profile: null,
  isLoading: false,
  getProfile: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [profile, setProfile] = React.useState<Profile | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [fetchingUser, setFetchingUser] = React.useState<boolean>(true);

  //get user profile
  const getUserProfile = React.useCallback(() => {
    if (user) {
      getProfile(user.uid)
        .then((p) => setProfile(p))
        .catch(console.error)
        .finally(() => setIsLoading(false));
    } else {
      setProfile(null);
      setIsLoading(false);
    }
  }, [user]);

  //handle auth
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setFetchingUser(false);
    });
    return () => unsubscribe();
  }, []);

  //get user profile
  React.useEffect(() => {
    if (fetchingUser) return;
    getUserProfile();
  }, [fetchingUser, getUserProfile]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        getProfile: getUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
