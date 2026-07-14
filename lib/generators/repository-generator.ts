import { EntityFormValues } from "../form-schema";
import { REPOSITORY_TEMPLATE } from "../templates/repository";

export function generateRepository(data: EntityFormValues): string {
  return REPOSITORY_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", data.packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName);
}