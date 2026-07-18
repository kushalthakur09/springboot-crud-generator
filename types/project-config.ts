export interface ProjectConfig {
  projectName: string;
  artifactId: string;
  packageName: string;

  javaVersion: "17" | "21";
  buildTool: "maven" | "gradle";
  database: "postgresql" | "mysql";
  springBootVersion: string;
}