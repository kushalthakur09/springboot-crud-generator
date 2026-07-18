"use client";

import { FileCode2, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { GeneratedFiles } from "@/types/generated-files";
import { downloadProject } from "@/lib/download-project";

interface Props {
  fileName: string;
  code: string;
  files: GeneratedFiles;
  packageName: string;
}

export default function Editor({
  fileName,
  code,
  files,
  packageName,
}: Props) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#1e1e1e]">
      {/* Header */}
      <div className="flex h-11 items-center justify-between border-b border-zinc-700 bg-[#252526] px-4">
        <div className="flex min-w-0 items-center gap-2">
          <FileCode2 size={16} className="shrink-0 text-orange-400" />
          <span className="truncate text-sm">{fileName}</span>
        </div>

        <div className="ml-4 flex shrink-0 items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              navigator.clipboard.writeText(code);
              toast.success("Copied to clipboard");
            }}
          >
            <Copy size={16} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => downloadProject(files, packageName)}
          >
            <Download size={16} />
          </Button>
        </div>
      </div>

      {/* Code */}
      <div className="min-h-0 flex-1 overflow-auto">
        <pre className="min-w-max whitespace-pre p-5 text-sm leading-7 text-zinc-100">
          <code>{code || "// No code generated"}</code>
        </pre>
      </div>
    </div>
  );
}