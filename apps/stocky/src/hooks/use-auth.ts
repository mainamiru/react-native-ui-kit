import { AuthContext, AuthContextType } from "@/providers";
import { useContext } from "react";

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
