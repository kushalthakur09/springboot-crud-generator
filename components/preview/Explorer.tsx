"use client";

import { ChevronDown, FolderOpen, FileCode2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { GeneratedFiles } from "@/types/generated-files";

interface ExplorerProps {
  files: GeneratedFiles;
  selectedFile: string;
  setSelectedFile: (file: string) => void;
}

const explorer = (files: GeneratedFiles) => [
  {
    folder: "entity",
    files: [{ key: "entity", label: files.entity.name || "Entity.java" }],
  },
  {
    folder: "dto",
    files: [{ key: "dto", label: files.dto.name || "DTO.java" }],
  },
  {
    folder: "mapper",
    files: [{ key: "mapper", label: files.mapper.name || "Mapper.java" }],
  },
  {
    folder: "repository",
    files: [
      {
        key: "repository",
        label: files.repository.name || "Repository.java",
      },
    ],
  },
  {
    folder: "service",
    files: [
      {
        key: "service",
        label: files.service.name || "Service.java",
      },
      {
        key: "serviceImpl",
        label: files.serviceImpl.name || "ServiceImpl.java",
      },
    ],
  },
  {
    folder: "controller",
    files: [
      {
        key: "controller",
        label: files.controller.name || "Controller.java",
      },
    ],
  },
  {
    folder: "exception",
    files: [
      {
        key: "exception",
        label:
          files.exception.name || "ResourceNotFoundException.java",
      },
      {
        key: "globalExceptionHandler",
        label:
          files.globalExceptionHandler.name ||
          "GlobalExceptionHandler.java",
      },
    ],
  },
];

export default function Explorer({
  files,
  selectedFile,
  setSelectedFile,
}: ExplorerProps) {
  return (
    <aside className="flex h-full min-h-0 flex-col border-r border-zinc-800 bg-[#181818]">

      <div className="shrink-0 border-b border-zinc-800 px-4 py-3 text-xs font-semibold tracking-wider text-zinc-400">
        EXPLORER
      </div>

      <div className="min-h-0 flex-1 overflow-y-scroll overflow-x-auto p-2">
        {explorer(files).map((section) => (
          <div key={section.folder} className="mb-3">

            <div className="flex items-center gap-1 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              <ChevronDown size={14} />
              <FolderOpen size={14} />
              <span>{section.folder}</span>
            </div>

            {section.files.map((file) => (
              <button
                key={file.key}
                onClick={() => setSelectedFile(file.key)}
                className={cn(
                  "ml-5 flex w-[calc(100%-20px)] items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-zinc-800",
                  selectedFile === file.key &&
                    "bg-zinc-800 text-pink-400"
                )}
              >
                <FileCode2
                  size={14}
                  className="shrink-0 text-orange-400"
                />

                <span className="truncate">
                  {file.label}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

    </aside>
  );
}