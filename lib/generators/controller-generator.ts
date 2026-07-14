import { EntityFormValues } from "../form-schema";
import { CONTROLLER_TEMPLATE } from "../templates/controller";

export function generateController(
  data: EntityFormValues
): string {
  return CONTROLLER_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", data.packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName)
    .replaceAll(
      "{{ENDPOINT}}",
      data.entityName.toLowerCase() + "s"
    );
}