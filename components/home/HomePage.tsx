"use client";

import { useState } from "react";

import { useResizable } from "@/hooks/useResizable";

import Navbar from "@/components/layout/Navbar";
import EntityForm from "@/components/forms/EntityForm";
import CodePreview from "@/components/preview/CodePreview";

import { GeneratedFiles } from "@/types/generated-files";

export default function HomePage() {
  const generator = useResizable(500, 380, 750);

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

      <main className="h-[calc(100vh-64px)] overflow-hidden bg-[#FFF5F8] dark:bg-zinc-950">
        <div
          ref={generator.containerRef}
          className="grid h-full min-h-0"
          style={{
            gridTemplateColumns: `${generator.width}px 6px 1fr`,
          }}
        >
          {/* Generator */}
          <div className="h-full overflow-auto p-6">
            <EntityForm setGeneratedFiles={setGeneratedFiles} />
          </div>

          {/* Resize */}
          <div
            onMouseDown={generator.startResize}
            className="cursor-col-resize bg-zinc-800 hover:bg-pink-500 transition-colors"
          />

          {/* Preview */}
          <div className="h-full overflow-hidden p-6">
            <CodePreview files={generatedFiles} />
          </div>
        </div>
      </main>
    </>
  );
}