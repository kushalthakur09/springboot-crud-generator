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
}
