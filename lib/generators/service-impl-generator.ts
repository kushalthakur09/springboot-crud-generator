import { EntityFormValues } from "../form-schema";
import { SERVICE_IMPL_TEMPLATE } from "../templates/service-impl";

export function generateServiceImpl(data: EntityFormValues): string {
  return SERVICE_IMPL_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", data.packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName);
}