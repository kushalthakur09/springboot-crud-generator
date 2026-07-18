import { ProjectConfig } from "@/types/project-config";

export function generateApplication(
  entity: string,
  projectConfig: ProjectConfig
) {
  return `package ${projectConfig.packageName};

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ${entity}Application {

    public static void main(String[] args) {
        SpringApplication.run(${entity}Application.class, args);
    }
}
`;
}