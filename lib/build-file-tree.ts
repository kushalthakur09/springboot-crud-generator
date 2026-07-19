import { GeneratedFiles } from "@/types/generated-files";
import { FileNode } from "@/types/file-tree";

export function buildFileTree(files: GeneratedFiles): FileNode[] {
  const rootFiles: FileNode[] = [];

  if (files.pom?.code) {
    rootFiles.push({
      name: files.pom.name,
      key: "pom",
    });
  }

  if (files.gradle?.code) {
    rootFiles.push({
      name: files.gradle.name,
      key: "gradle",
    });
  }

  if (files.settingsGradle?.code) {
    rootFiles.push({
      name: files.settingsGradle.name,
      key: "settingsGradle",
    });
  }

  return [
    ...rootFiles,
    {
      name: "src",
      children: [
        {
          name: "main",
          children: [
            {
              name: "java",
              children: [
                {
                  name: files.application.name || "DemoApplication.java",
                  key: "application",
                },
                {
                  name: "entity",
                  children: [
                    {
                      name: files.entity.name || "Entity.java",
                      key: "entity",
                    },
                  ],
                },
                {
                  name: "dto",
                  children: [
                    {
                      name: files.dto.name || "EntityDto.java",
                      key: "dto",
                    },
                  ],
                },
                {
                  name: "mapper",
                  children: [
                    {
                      name: files.mapper.name || "EntityMapper.java",
                      key: "mapper",
                    },
                  ],
                },
                {
                  name: "repository",
                  children: [
                    {
                      name: files.repository.name || "EntityRepository.java",
                      key: "repository",
                    },
                  ],
                },
                {
                  name: "service",
                  children: [
                    {
                      name: files.service.name || "EntityService.java",
                      key: "service",
                    },
                    {
                      name: files.serviceImpl.name || "EntityServiceImpl.java",
                      key: "serviceImpl",
                    },
                  ],
                },
                {
                  name: "controller",
                  children: [
                    {
                      name: files.controller.name || "EntityController.java",
                      key: "controller",
                    },
                  ],
                },
                {
                  name: "exception",
                  children: [
                    {
                      name:
                        files.exception.name ||
                        "ResourceNotFoundException.java",
                      key: "exception",
                    },
                    {
                      name:
                        files.globalExceptionHandler.name ||
                        "GlobalExceptionHandler.java",
                      key: "globalExceptionHandler",
                    },
                  ],
                },
              ],
            },
            {
              name: "resources",
              children: [
                {
                  name:
                    files.applicationProperties.name ||
                    "application.properties",
                  key: "applicationProperties",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}