import { z } from "zod";

export const fieldSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Field name is required"),
  type: z.string(),
  nullable: z.boolean(),
  unique: z.boolean(),
});

export const entitySchema = z.object({
  entityName: z.string().min(1, "Entity name is required"),
  packageName: z.string().min(1, "Package name is required"),
  fields: z.array(fieldSchema),
});

export type EntityFormValues = z.infer<typeof entitySchema>;