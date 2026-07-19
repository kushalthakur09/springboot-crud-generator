import { EXCEPTION_TEMPLATE } from "../templates/exception";

export function generateException(packageName: string): string {
  return EXCEPTION_TEMPLATE.replaceAll("{{PACKAGE_NAME}}", packageName);
}
