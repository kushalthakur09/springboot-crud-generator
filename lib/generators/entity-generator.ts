import { ENTITY_TEMPLATE } from "../templates/entity";
import { EntityFormValues } from "../form-schema";

import { sanitizeFieldName } from "../utils";

export function generateEntity(data: EntityFormValues): string {
  const fields = data.fields
    .map((field) => {
      if (sanitizeFieldName(field.name).toLowerCase() === "id") {
        return `
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private ${field.type} ${sanitizeFieldName(field.name)};`;
      }

      return `
    @Column(
        nullable = ${field.nullable},
        unique = ${field.unique}
    )
    private ${field.type} ${sanitizeFieldName(field.name)};`;
    })
    .join("\n\n");

  return ENTITY_TEMPLATE.replace("{{PACKAGE_NAME}}", data.packageName)
    .replace(
      "{{TABLE_NAME}}",
      sanitizeFieldName(data.entityName).toLowerCase() + "s",
    )
    .replace("{{ENTITY_NAME}}", data.entityName)
    .replace("{{FIELDS}}", fields);
}
