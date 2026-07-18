"use client";
import { FileCode2 } from "lucide-react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
  fileName: string;
  code: string;
}

export default function Editor({ fileName, code }: Props) {
  return (
   <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#1e1e1e]">
      <div className="flex h-11 items-center justify-between border-b border-zinc-700 bg-[#252526] px-4">
        <div className="flex min-w-0 items-center gap-2">
          <FileCode2 size={16} className="shrink-0 text-orange-400" />
          <span className="truncate text-sm">{fileName}</span>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="ml-2 shrink-0"
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast.success("Copied to clipboard");
          }}
        >
          <Copy size={16} />
        </Button>
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        <pre className="min-w-max p-5 text-sm leading-7 text-zinc-100 whitespace-pre">
          <code>{code || "// No code generated"}</code>
        </pre>
      </div>
    </div>
  );
}
