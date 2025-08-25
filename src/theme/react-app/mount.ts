import { createRoot, Root } from "react-dom/client";
import React from "react";

// Components registry: map friendly names to components
import Header from "../components/modules/Header/Header";
import Hero from "../components/modules/Hero/Hero";
import StatsSection from "../components/modules/StatsSection/StatsSection";

type ComponentRegistry = Record<string, React.ComponentType<any>>;

const registry: ComponentRegistry = {
  Header,
  Hero,
  StatsSection,
};

const elToRoot = new WeakMap<Element, Root>();

export function renderReactComponent(componentName: string, mountEl: Element, props: any) {
  const Component = registry[componentName];
  if (!Component) {
    // eslint-disable-next-line no-console
    console.warn(`React component not found in registry: ${componentName}`);
    return;
  }
  let root = elToRoot.get(mountEl);
  if (!root) {
    root = createRoot(mountEl as HTMLElement);
    elToRoot.set(mountEl, root);
  }
  root.render(React.createElement(Component, props));
}

export function autoMountAll() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-react-component]");
  nodes.forEach((node) => {
    const name = node.dataset.reactComponent as string;
    const propsJson = node.dataset.reactProps || "{}";
    try {
      const props = JSON.parse(propsJson);
      renderReactComponent(name, node, props);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to parse data-react-props JSON for", name, e);
    }
  });
}

// Expose to window so modules can call it if needed
declare global {
  interface Window {
    renderReactComponent?: (componentName: string, mountEl: Element, props: any) => void;
    autoMountReactComponents?: () => void;
  }
}

if (typeof window !== "undefined") {
  window.renderReactComponent = renderReactComponent;
  window.autoMountReactComponents = autoMountAll;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoMountAll);
  } else {
    autoMountAll();
  }
}


