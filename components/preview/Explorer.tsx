"use client";

import { GeneratedFiles } from "@/types/generated-files";
import TreeNode from "./TreeNode";
import { buildFileTree } from "@/lib/build-file-tree";
import { useMemo } from "react";

interface ExplorerProps {
  files: GeneratedFiles;
  selectedFile: string;
  setSelectedFile: (file: string) => void;
}

export default function Explorer({
  files,
  selectedFile,
  setSelectedFile,
}: ExplorerProps) {
  const tree = useMemo(() => buildFileTree(files), [files]);

  return (
    <aside className="flex h-full min-h-0 flex-col border-r border-zinc-800 bg-[#181818]">
      <div className="shrink-0 border-b border-zinc-800 px-4 py-3 text-xs font-semibold tracking-wider text-zinc-400">
        EXPLORER
      </div>

      <div className="min-h-0 flex-1 overflow-y-scroll overflow-x-auto p-2">
        {tree.map((node, index) => (
          <TreeNode
            key={node.key ?? `${node.name}-${index}`}
            node={node}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        ))}
      </div>
    </aside>
  );
}
