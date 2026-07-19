import { DTO_TEMPLATE } from "../templates/dto";
import { EntityFormValues } from "../form-schema";
import { sanitizeFieldName } from "../utils";

export function generateDto(
  data: EntityFormValues,
  packageName: string,
): string {
  const fields = data.fields
    .map((field) => {
      const annotations: string[] = [];

      if (!field.nullable) {
        if (field.type === "String") {
          annotations.push("@NotBlank");
        } else {
          annotations.push("@NotNull");
        }
      }

      if (field.name.toLowerCase().includes("email")) {
        annotations.push("@Email");
      }

      if (["Integer", "Long", "Double", "Float"].includes(field.type)) {
        annotations.push("@Positive");
      }

      return `
    ${annotations.join("\n    ")}
    private ${field.type} ${sanitizeFieldName(field.name)};`;
    })
    .join("\n\n");

  return DTO_TEMPLATE.replace("{{PACKAGE_NAME}}", packageName)
    .replace("{{ENTITY_NAME}}", data.entityName)
    .replace("{{FIELDS}}", fields);
}
