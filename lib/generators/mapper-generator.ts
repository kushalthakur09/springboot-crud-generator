import { EntityFormValues } from "../form-schema";
import { MAPPER_TEMPLATE } from "../templates/mapper";

export function generateMapper(
  data: EntityFormValues,
  packageName: string,
): string {
  return MAPPER_TEMPLATE.replaceAll("{{PACKAGE_NAME}}", packageName).replaceAll(
    "{{ENTITY_NAME}}",
    data.entityName,
  );
}
