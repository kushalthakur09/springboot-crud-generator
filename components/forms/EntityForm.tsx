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
import { generateDto } from "@/lib/generators/dto-generator";
import { generateRepository } from "@/lib/generators/repository-generator";
import { generateService } from "@/lib/generators/service-generator";
import { generateServiceImpl } from "@/lib/generators/service-impl-generator";
import { generateMapper } from "@/lib/generators/mapper-generator";
import { generateController } from "@/lib/generators/controller-generator";
import { generateException } from "@/lib/generators/exception-generator";
import { generateGlobalExceptionHandler } from "@/lib/generators/global-exception-handler-generator";
import { generateApplication } from "@/lib/generators/generate-application";
import { generateApplicationProperties } from "@/lib/generators/generate-application-properties";
import { generatePom } from "@/lib/generators/pom-generator";
import { GeneratedFiles } from "@/types/generated-files";
import { ProjectConfig } from "@/types/project-config";

interface EntityFormProps {
  projectConfig: ProjectConfig;
  setGeneratedFiles: React.Dispatch<React.SetStateAction<GeneratedFiles>>;
}

interface EntityFormProps {
  projectConfig: ProjectConfig;
  setGeneratedFiles: React.Dispatch<React.SetStateAction<GeneratedFiles>>;
}

export default function EntityForm({
  projectConfig,
  setGeneratedFiles,
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
    setGeneratedFiles({
      entity: {
        name: `${data.entityName}.java`,
        code: generateEntity(data),
      },
      dto: {
        name: `${data.entityName}Dto.java`,
        code: generateDto(data),
      },

      mapper: {
        name: `${data.entityName}Mapper.java`,
        code: generateMapper(data),
      },

      repository: {
        name: `${data.entityName}Repository.java`,
        code: generateRepository(data),
      },

      service: {
        name: `${data.entityName}Service.java`,
        code: generateService(data),
      },

      serviceImpl: {
        name: `${data.entityName}ServiceImpl.java`,
        code: generateServiceImpl(data),
      },
      controller: {
        name: `${data.entityName}Controller.java`,
        code: generateController(data),
      },
      exception: {
        name: "ResourceNotFoundException.java",
        code: generateException(data),
      },

      globalExceptionHandler: {
        name: "GlobalExceptionHandler.java",
        code: generateGlobalExceptionHandler(data),
      },

      application: {
        name: `${data.entityName}Application.java`,
        code: generateApplication(data.entityName, projectConfig),
      },

      applicationProperties: {
        name: "application.properties",
        code: generateApplicationProperties(),
      },
      pom: {
        name: "pom.xml",
        code: generatePom(projectConfig),
      },
    });
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Entity Configuration</CardTitle>
      </CardHeader>

      <CardContent className="pb-6">
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
