"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EntityNameInput from "./EntityNameInput";
import PackageNameInput from "./PackageNameInput";
import FieldTable from "./FieldTable";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { entitySchema, EntityFormValues } from "@/lib/form-schema";

import { generateEntity } from "@/lib/generators/entity-generator";

interface EntityFormProps {
  setGeneratedCode: (code: string) => void;
}

export default function EntityForm({
  setGeneratedCode,
}: EntityFormProps) {
  const form = useForm<EntityFormValues>({
    resolver: zodResolver(entitySchema),

    defaultValues: {
      entityName: "",
      packageName: "com.main.demo",
      fields: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "fields",
  });

const onSubmit = (data: EntityFormValues) => {
  setGeneratedCode(generateEntity(data));
};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entity Configuration</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <EntityNameInput control={form.control} />

          <PackageNameInput control={form.control} />

          <FieldTable
            fields={fields}
            append={append}
            remove={remove}
            control={form.control}
          />
          <Button type="submit" className="w-full">
            Generate Code
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
