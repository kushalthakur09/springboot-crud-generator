"use client";

import { ChevronDown, ChevronRight, FileCode2, FolderOpen } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FileNode } from "@/types/file-tree";

interface Props {
  node: FileNode;
  level?: number;
  selectedFile: string;
  setSelectedFile: (file: string) => void;
}

export default function TreeNode({
  node,
  level = 0,
  selectedFile,
  setSelectedFile,
}: Props) {
  const [open, setOpen] = useState(true);

  const isFolder = !!node.children?.length;

  if (isFolder) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-1 rounded px-2 py-1 text-left text-sm hover:bg-zinc-800"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <FolderOpen size={14} className="text-yellow-400" />
          <span>{node.name}</span>
        </button>

        {open &&
          node.children!.map((child, index) => (
            <TreeNode
              key={child.key ?? `${child.name}-${index}`}
              node={child}
              level={level + 1}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => node.key && setSelectedFile(node.key)}
      className={cn(
        "flex w-full items-center gap-2 rounded py-1.5 text-left text-sm hover:bg-zinc-800",
        selectedFile === node.key && "bg-zinc-800 text-pink-400",
      )}
      style={{ paddingLeft: `${level * 16 + 28}px` }}
    >
      <FileCode2 size={14} className="text-orange-400 shrink-0" />
      <span className="truncate">{node.name}</span>
    </button>
  );
}
