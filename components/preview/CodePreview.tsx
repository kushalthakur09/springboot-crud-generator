"use client";

import { useMemo, useState } from "react";
import { useResizable } from "@/hooks/useResizable";

import { Card } from "@/components/ui/card";

import Explorer from "./Explorer";
import Editor from "./Editor";

import { GeneratedFiles } from "@/types/generated-files";

interface CodePreviewProps {
  files: GeneratedFiles;
  packageName: string;
}

export default function CodePreview({ files, packageName }: CodePreviewProps) {
  const explorer = useResizable(250, 220, 450);

  const [selectedFile, setSelectedFile] = useState("application");

  const file = useMemo(() => {
    switch (selectedFile) {
      case "entity":
        return files.entity;

      case "dto":
        return files.dto;

      case "mapper":
        return files.mapper;

      case "repository":
        return files.repository;

      case "service":
        return files.service;

      case "serviceImpl":
        return files.serviceImpl;

      case "controller":
        return files.controller;

      case "exception":
        return files.exception;

      case "globalExceptionHandler":
        return files.globalExceptionHandler;

      case "application":
        return files.application;

      case "applicationProperties":
        return files.applicationProperties;

      case "pom":
        return files.pom ?? { name: "pom.xml", code: "" };
        
      case "gradle":
        return files.gradle ?? { name: "build.gradle", code: "" };

      case "settingsGradle":
        return (
          files.settingsGradle ?? {
            name: "settings.gradle",
            code: "",
          }
        );

      default:
        return {
          name: "No File",
          code: "",
        };
    }
  }, [selectedFile, files]);

  return (
    <div ref={explorer.containerRef} className="h-full min-h-0 overflow-hidden">
      <Card
        className="grid h-full min-h-0 overflow-hidden"
        style={{
          gridTemplateColumns: `${explorer.width}px 6px 1fr`,
        }}
      >
        <Explorer
          files={files}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />

        {/* Resize Handle */}
        <div
          onMouseDown={explorer.startResize}
          className="cursor-col-resize bg-zinc-800 transition-colors hover:bg-pink-500"
        />

        <Editor
          fileName={file.name}
          code={file.code}
          files={files}
          packageName={packageName}
        />
      </Card>
    </div>
  );
}
