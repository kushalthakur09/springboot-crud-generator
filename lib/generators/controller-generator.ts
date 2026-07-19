import { EntityFormValues } from "../form-schema";
import { CONTROLLER_TEMPLATE } from "../templates/controller";

export function generateController(
  data: EntityFormValues,
  packageName: string
): string {
  return CONTROLLER_TEMPLATE
    .replaceAll("{{PACKAGE_NAME}}", packageName)
    .replaceAll("{{ENTITY_NAME}}", data.entityName)
    .replaceAll(
      "{{ENDPOINT}}",
      data.entityName.toLowerCase() + "s"
    );
}