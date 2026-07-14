"use client";

import { useState } from "react";

import { useResizable } from "@/hooks/useResizable";

import Navbar from "@/components/layout/Navbar";
import EntityForm from "@/components/forms/EntityForm";
import CodePreview from "@/components/preview/CodePreview";

import { GeneratedFiles } from "@/types/generated-files";

export default function HomePage() {
  const generator = useResizable(420, 350, 700);
  const [generatedFiles, setGeneratedFiles] = useState<GeneratedFiles>({
    entity: { name: "", code: "" },
    dto: { name: "", code: "" },
    mapper: { name: "", code: "" },
    repository: { name: "", code: "" },
    service: { name: "", code: "" },
    serviceImpl: { name: "", code: "" },
    controller: { name: "", code: "" },
    exception: { name: "", code: "" },
    globalExceptionHandler: { name: "", code: "" },
  });

  return (
    <>
      <Navbar />

      <main className="h-[calc(100vh-64px)] bg-[#FFF5F8] dark:bg-zinc-950 transition-colors duration-300">
        <div
          className="grid h-full"
          style={{
            gridTemplateColumns: `minmax(350px, ${generator.width}px) 6px minmax(650px, 1fr)`,
          }}
        >
          {/* Generator */}
          <div className="min-w-[350px] overflow-y-auto p-6">
            <EntityForm setGeneratedFiles={setGeneratedFiles} />
          </div>

          {/* Resize Handle */}
          <div
            onMouseDown={generator.startResize}
            className="cursor-col-resize bg-zinc-800 transition-colors hover:bg-pink-500"
          />

          {/* Preview */}
          <div className="min-w-[650px] overflow-hidden p-6">
            <CodePreview files={generatedFiles} />
          </div>
        </div>
      </main>
    </>
  );
}
