"use client";

import { useState } from "react";
import { useResizable } from "@/hooks/useResizable";

import { Card } from "@/components/ui/card";

import Explorer from "./Explorer";
import Editor from "./Editor";

import { GeneratedFiles } from "@/types/generated-files";

interface CodePreviewProps {
  files: GeneratedFiles;
}

export default function CodePreview({ files }: CodePreviewProps) {
  const explorer = useResizable(250, 220, 450);

  const [selectedFile, setSelectedFile] = useState("entity");

  const getCode = () => {
    switch (selectedFile) {
      case "entity":
        return files.entity.code;
      case "dto":
        return files.dto.code;
      case "mapper":
        return files.mapper.code;
      case "repository":
        return files.repository.code;
      case "service":
        return files.service.code;
      case "serviceImpl":
        return files.serviceImpl.code;
      case "controller":
        return files.controller.code;
      case "exception":
        return files.exception.code;
      case "globalExceptionHandler":
        return files.globalExceptionHandler.code;
      default:
        return "";
    }
  };

  return (
    <div
      ref={explorer.containerRef}
      className="h-full min-h-0 overflow-hidden"
    >
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
          fileName={
            files[selectedFile as keyof GeneratedFiles]?.name || "No File"
          }
          code={getCode()}
        />
      </Card>
    </div>
  );
}