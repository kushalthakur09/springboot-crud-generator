import { GLOBAL_EXCEPTION_HANDLER_TEMPLATE } from "../templates/global-exception-handler";

export function generateGlobalExceptionHandler(packageName: string): string {
  return GLOBAL_EXCEPTION_HANDLER_TEMPLATE.replaceAll(
    "{{PACKAGE_NAME}}",
    packageName,
  );
}
