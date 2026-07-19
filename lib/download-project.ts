import JSZip from "jszip";
import { saveAs } from "file-saver";
import { GeneratedFiles } from "@/types/generated-files";

export async function downloadProject(
  files: GeneratedFiles,
  packageName: string
) {
  const zip = new JSZip();

  const packagePath = packageName.replace(/\./g, "/");

  if (files.pom) {
  zip.file("pom.xml", files.pom.code);
}

if (files.gradle) {
  zip.file("build.gradle", files.gradle.code);
}

if (files.settingsGradle) {
  zip.file("settings.gradle", files.settingsGradle.code);
}

  zip.file(
    `src/main/java/${packagePath}/${files.application.name}`,
    files.application.code
  );

  zip.file(
    `src/main/java/${packagePath}/entity/${files.entity.name}`,
    files.entity.code
  );

  zip.file(
    `src/main/java/${packagePath}/dto/${files.dto.name}`,
    files.dto.code
  );

  zip.file(
    `src/main/java/${packagePath}/mapper/${files.mapper.name}`,
    files.mapper.code
  );

  zip.file(
    `src/main/java/${packagePath}/repository/${files.repository.name}`,
    files.repository.code
  );

  zip.file(
    `src/main/java/${packagePath}/service/${files.service.name}`,
    files.service.code
  );

  zip.file(
    `src/main/java/${packagePath}/service/impl/${files.serviceImpl.name}`,
    files.serviceImpl.code
  );

  zip.file(
    `src/main/java/${packagePath}/controller/${files.controller.name}`,
    files.controller.code
  );

  zip.file(
    `src/main/java/${packagePath}/exception/${files.exception.name}`,
    files.exception.code
  );

  zip.file(
    `src/main/java/${packagePath}/exception/${files.globalExceptionHandler.name}`,
    files.globalExceptionHandler.code
  );

  zip.file(
    "src/main/resources/application.properties",
    files.applicationProperties.code
  );

  const blob = await zip.generateAsync({
    type: "blob",
  });

  saveAs(blob, "codeforge-project.zip");
}