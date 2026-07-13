"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import FieldRow from "./FieldRow";
import { Control, Controller } from "react-hook-form";
import { EntityFormValues } from "@/lib/form-schema";

interface FieldTableProps {
  fields: any[];
  append: any;
  remove: any;
control: Control<EntityFormValues>;
}

export default function FieldTable({
  fields,
  append,
  remove,
  control,
}: FieldTableProps) {
  return (
    <Card className="p-4 space-y-4">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold text-lg">
          Fields
        </h3>

        <Button
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              name: "",
              type: "String",
              nullable: true,
              unique: false,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Field
        </Button>

      </div>

      {fields.length === 0 ? (
        <div className="rounded-lg border border-dashed p-6 text-center text-muted-foreground">
          No fields added yet.
        </div>
      ) : (
        <div className="space-y-3">
          {fields.map((field, index) => (
            <FieldRow
                key={field.id}
                index={index}
                remove={remove}
                control={control}
            />
            ))}
        </div>
      )}

    </Card>
  );
}