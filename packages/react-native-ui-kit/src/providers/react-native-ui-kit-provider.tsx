import React from "react";
import { PortalProvider } from "../components/portal";
import { Toaster } from "../components/toaster";
import { DefaultTheme } from "../constants";
import { RNUIKitTheme } from "../types";

export interface ReactNativeUIKitProviderProps {
  children: React.ReactNode;
  theme?: RNUIKitTheme;
}

export interface ReactNativeUIKitContextType {
  theme: RNUIKitTheme;
}

export const ReactNativeUIKitContext =
  React.createContext<ReactNativeUIKitContextType>({
    theme: DefaultTheme,
  });

export function ReactNativeUIKitProvider({
  children,
  theme = DefaultTheme,
}: React.PropsWithChildren<ReactNativeUIKitProviderProps>) {
  return (
    <ReactNativeUIKitContext.Provider value={{ theme }}>
      <PortalProvider>
        <Toaster>{children}</Toaster>
      </PortalProvider>
    </ReactNativeUIKitContext.Provider>
  );
}
