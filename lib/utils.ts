import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toCamelCase(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

const JAVA_KEYWORDS = [
  "new",
  "class",
  "public",
  "private",
  "protected",
  "static",
  "void",
  "int",
  "long",
  "double",
  "float",
  "boolean",
  "return",
];

export function sanitizeFieldName(name: string): string {
  const field = toCamelCase(name);

  return JAVA_KEYWORDS.includes(field)
    ? `${field}Field`
    : field;
}