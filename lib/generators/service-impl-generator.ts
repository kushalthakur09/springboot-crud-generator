import { EntityFormValues } from "../form-schema";
import { SERVICE_IMPL_TEMPLATE } from "../templates/service-impl";

export function generateServiceImpl(data: EntityFormValues,packageName: string): string {
  return SERVICE_IMPL_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName);
}