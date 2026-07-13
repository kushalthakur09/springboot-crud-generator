"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { JAVA_TYPES } from "@/constants/javaTypes";

import { Control, Controller } from "react-hook-form";
import { EntityFormValues } from "@/lib/form-schema";

interface FieldRowProps {
  index: number;
  remove: (index: number) => void;
  control: Control<EntityFormValues>;
}

export default function FieldRow({ index, remove, control }: FieldRowProps) {
  return (
    <div className="grid grid-cols-12 gap-3 items-center rounded-lg border p-3">
      {/* Field Name */}
      <div className="col-span-4">
        <label className="mb-1 block text-xs font-medium text-muted-foreground">
          Field Name
        </label>
        <Controller
          control={control}
          name={`fields.${index}.name`}
          render={({ field }) => <Input placeholder="Field Name" {...field} />}
        />
      </div>

      {/* Java Type */}
      <div className="col-span-3">
        <label className="mb-1 block text-xs font-medium text-muted-foreground">
          Java Type
        </label>

        <Controller
          control={control}
          name={`fields.${index}.type`}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>

              <SelectContent>
                {JAVA_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* Nullable */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs font-medium text-muted-foreground">
          Nullable
        </label>
        <Controller
          control={control}
          name={`fields.${index}.nullable`}
          render={({ field }) => (
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      {/* Unique */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs font-medium text-muted-foreground">
          Unique
        </label>
        <Controller
          control={control}
          name={`fields.${index}.unique`}
          render={({ field }) => (
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      {/* Delete */}
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs font-medium text-muted-foreground">
          Delete
        </label>

        <Button variant="destructive" size="icon" onClick={() => remove(index)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
