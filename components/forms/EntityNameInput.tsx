"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Control, Controller } from "react-hook-form";
import { EntityFormValues } from "@/lib/form-schema";

interface Props {
  control: Control<EntityFormValues>;
}

export default function EntityNameInput({ control }: Props) {
  return (
    <Controller
      name="entityName"
      control={control}
      render={({ field }) => (
        <div className="space-y-2">
          <Label>Entity Name</Label>

          <Input
            placeholder="Product"
            {...field}
          />
        </div>
      )}
    />
  );
}