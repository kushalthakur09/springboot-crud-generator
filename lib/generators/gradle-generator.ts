import { ProjectConfig } from "@/types/project-config";

export function generateGradle(projectConfig: ProjectConfig) {
  const databaseDependency =
    projectConfig.database === "postgresql"
      ? `runtimeOnly 'org.postgresql:postgresql'`
      : `runtimeOnly 'com.mysql:mysql-connector-j'`;

  return `plugins {
    id 'java'
    id 'org.springframework.boot' version '${projectConfig.springBootVersion}'
    id 'io.spring.dependency-management' version '1.1.7'
}

group = '${projectConfig.packageName}'
version = '0.0.1-SNAPSHOT'

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(${projectConfig.javaVersion})
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-validation'

    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'

    ${databaseDependency}
}

tasks.named('test') {
    useJUnitPlatform()
}
`;
}