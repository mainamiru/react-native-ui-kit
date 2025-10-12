import { DocsViewer } from "@/components";
import { ProgressBar } from "@mainamiru/react-native-ui-kit";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

const ProgressBarDocsScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 1 ? 0 : prev + 0.1));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <DocsViewer
      title="ProgressBar"
      description="An animated progress bar with customizable colors, height, and smooth transitions."
      usage="Use ProgressBar to visually represent task or loading progress with optional animations."
      exampleCode={`import React, { useState, useEffect } from "react";
import { ProgressBar } from "@mainamiru/react-native-ui-kit";
import { View } from "react-native";

export default function Example() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : p + 0.1));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <ProgressBar progress={progress} height={12} fillColor="#22c55e" />
    </View>
  );
}`}
      props={{
        progress: {
          type: "number (0–1)",
          required: true,
          description: "Indicates the progress completion level (0 to 1).",
        },
        height: {
          type: "number",
          required: false,
          default: "10",
          description: "Specifies the height of the progress bar.",
        },
        fillColor: {
          type: "string",
          required: false,
          default: "#3b82f6",
          description: "Defines the color of the filled progress area.",
        },
        backgroundColor: {
          type: "string",
          required: false,
          default: "#e0e0e0",
          description: "Sets the background track color.",
        },
        borderRadius: {
          type: "number",
          required: false,
          default: "8",
          description: "Rounds the corners of the progress bar.",
        },
        animated: {
          type: "boolean",
          required: false,
          default: "true",
          description: "Toggles smooth animation when progress updates.",
        },
        animationDuration: {
          type: "number",
          required: false,
          default: "500",
          description: "Duration of animation (ms).",
        },
      }}
    >
      <View style={{ padding: 20 }}>
        <ProgressBar progress={progress} height={12} fillColor="#22c55e" />
      </View>
    </DocsViewer>
  );
};

export default ProgressBarDocsScreen;
