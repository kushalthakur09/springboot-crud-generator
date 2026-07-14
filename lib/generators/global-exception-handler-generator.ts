import { EntityFormValues } from "../form-schema";
import { GLOBAL_EXCEPTION_HANDLER_TEMPLATE } from "../templates/global-exception-handler";

export function generateGlobalExceptionHandler(
  data: EntityFormValues
): string {
  return GLOBAL_EXCEPTION_HANDLER_TEMPLATE.replaceAll(
    "{{PACKAGE_NAME}}",
    data.packageName
  );
}