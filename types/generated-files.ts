export interface GeneratedFile {
  name: string;
  code: string;
}

export interface GeneratedFiles {
  entity: GeneratedFile;
  dto: GeneratedFile;
  mapper: GeneratedFile;
  repository: GeneratedFile;
  service: GeneratedFile;
  serviceImpl: GeneratedFile;
  controller: GeneratedFile;
  exception: GeneratedFile;
  globalExceptionHandler: GeneratedFile;
  application: GeneratedFile;
  applicationProperties: GeneratedFile;
  pom?: GeneratedFile;
  gradle?: GeneratedFile;
  settingsGradle?: GeneratedFile;
}
