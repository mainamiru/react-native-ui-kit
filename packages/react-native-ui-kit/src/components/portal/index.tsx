import React, { createContext, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

type PortalHostContextProps = {
  unmount: (key: string) => void;
  mount: (key: string, node: React.ReactNode) => void;
  update: (key: string, node: React.ReactNode) => void;
};

const PortalHostContext = createContext<PortalHostContextProps | null>(null);

export const PortalHost: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [portals, setPortals] = useState<Record<string, React.ReactNode>>({});

  const mount = (key: string, node: React.ReactNode) => {
    setPortals((prev) => ({ ...prev, [key]: node }));
  };

  const update = (key: string, node: React.ReactNode) => {
    setPortals((prev) => ({ ...prev, [key]: node }));
  };

  const unmount = (key: string) => {
    setPortals((prev) => {
      const newPortals = { ...prev };
      delete newPortals[key];
      return newPortals;
    });
  };

  return (
    <PortalHostContext.Provider value={{ mount, update, unmount }}>
      {children}
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        {Object.keys(portals).map((key) => (
          <React.Fragment key={key}>{portals[key]}</React.Fragment>
        ))}
      </View>
    </PortalHostContext.Provider>
  );
};

let globalPortalHost: PortalHostContextProps | null = null;

export const Portal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const key = React.useId();
  const context = useContext(PortalHostContext);

  React.useEffect(() => {
    const host = context ?? globalPortalHost;
    if (!host) return;

    host.mount(key, children);
    return () => host.unmount(key);
  }, [children, key]);

  return null;
};

// ✅ helper for outside usage
export const setPortalHost = (host: PortalHostContextProps) => {
  globalPortalHost = host;
};

// ✅ Exports
export const PortalProvider = PortalHost;
export default Portal;
