import { ProjectConfig } from "@/types/project-config";

export function generateSettingsGradle(
  projectConfig: ProjectConfig
) {
  return `rootProject.name = '${projectConfig.artifactId}'`;
}