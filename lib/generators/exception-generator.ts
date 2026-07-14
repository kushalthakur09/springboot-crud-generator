import { EntityFormValues } from "../form-schema";
import { EXCEPTION_TEMPLATE } from "../templates/exception";

export function generateException(
  data: EntityFormValues
): string {
  return EXCEPTION_TEMPLATE.replaceAll(
    "{{PACKAGE_NAME}}",
    data.packageName
  );
}