import { EntityFormValues } from "../form-schema";
import { REPOSITORY_TEMPLATE } from "../templates/repository";

export function generateRepository(data: EntityFormValues,packageName: string): string {
  return REPOSITORY_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName);
}