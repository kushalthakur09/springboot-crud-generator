import { EntityFormValues } from "../form-schema";
import { SERVICE_TEMPLATE } from "../templates/service";

export function generateService(data: EntityFormValues): string {
  return SERVICE_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", data.packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName);
}