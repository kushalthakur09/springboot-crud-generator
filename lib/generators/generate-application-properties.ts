import { ProjectConfig } from "@/types/project-config";

export function generateApplicationProperties(
  projectConfig: ProjectConfig
) {
  const datasourceUrl =
    projectConfig.database === "postgresql"
      ? `jdbc:postgresql://localhost:5432/${projectConfig.artifactId}`
      : `jdbc:mysql://localhost:3306/${projectConfig.artifactId}`;

  const driverClassName =
    projectConfig.database === "postgresql"
      ? "org.postgresql.Driver"
      : "com.mysql.cj.jdbc.Driver";

  return `spring.application.name=${projectConfig.projectName}

spring.datasource.url=${datasourceUrl}
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=${driverClassName}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`;
}