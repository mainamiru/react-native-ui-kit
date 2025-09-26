import React from "react";
import { LayoutContext, LayoutMode } from "./layout-base";

export interface WithLayoutOptions {
  mode: LayoutMode;
}

/**
 * withLayout - HOC to render a component only for a specific layout mode
 *
 * @param WrappedComponent - Component to render
 * @param options.mode - LayoutMode in which to render the component
 */
export function withLayout<P>(
  WrappedComponent: React.ComponentType<P>,
  options: WithLayoutOptions,
) {
  const { mode: targetMode } = options;

  const ResponsiveComponent: React.FC<P> = (props) => {
    const { mode: currentMode } = React.useContext(LayoutContext);
    if (currentMode !== targetMode) return null;

    return <WrappedComponent {...props} />;
  };

  ResponsiveComponent.displayName = `withLayout(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ResponsiveComponent;
}
