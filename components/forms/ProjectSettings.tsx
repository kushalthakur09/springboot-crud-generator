"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ProjectConfig } from "@/types/project-config";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectSettingsProps {
  projectConfig: ProjectConfig;
  setProjectConfig: React.Dispatch<React.SetStateAction<ProjectConfig>>;
}

export default function ProjectSettings({
  projectConfig,
  setProjectConfig,
}: ProjectSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Settings</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Project Name */}
        <div className="space-y-2">
          <Label>Project Name</Label>
          <Input
            placeholder="MerchantMart"
            value={projectConfig.projectName}
            onChange={(e) =>
              setProjectConfig((prev) => ({
                ...prev,
                projectName: e.target.value,
              }))
            }
          />
        </div>

        {/* Artifact Id */}
        <div className="space-y-2">
          <Label>Artifact Id</Label>
          <Input
            placeholder="merchantmart"
            value={projectConfig.artifactId}
            onChange={(e) =>
              setProjectConfig((prev) => ({
                ...prev,
                artifactId: e.target.value,
              }))
            }
          />
        </div>

        {/* Package Name */}
        <div className="space-y-2">
          <Label>Package Name</Label>
          <Input
            placeholder="com.main.demo"
            value={projectConfig.packageName}
            onChange={(e) =>
              setProjectConfig((prev) => ({
                ...prev,
                packageName: e.target.value,
              }))
            }
          />
        </div>

        {/* Java Version */}
        <div className="space-y-2">
          <Label>Java Version</Label>

          <Select
            value={projectConfig.javaVersion}
            onValueChange={(value) => {
              if (!value) return;

              setProjectConfig((prev) => ({
                ...prev,
                javaVersion: value as "17" | "21",
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="17">Java 17</SelectItem>
              <SelectItem value="21">Java 21</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Build Tool */}
        <div className="space-y-2">
          <Label>Build Tool</Label>

          <Select
            value={projectConfig.buildTool}
            onValueChange={(value) => {
              if (!value) return;

              setProjectConfig((prev) => ({
                ...prev,
                buildTool: value as "maven" | "gradle",
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="maven">Maven</SelectItem>
              <SelectItem value="gradle">Gradle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Database */}
        <div className="space-y-2">
          <Label>Database</Label>

          <Select
            value={projectConfig.database}
            onValueChange={(value) => {
              if (!value) return;

              setProjectConfig((prev) => ({
                ...prev,
                database: value as "postgresql" | "mysql",
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="postgresql">PostgreSQL</SelectItem>
              <SelectItem value="mysql">MySQL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Spring Boot Version */}
        <div className="space-y-2">
          <Label>Spring Boot Version</Label>

          <Select
            value={projectConfig.springBootVersion}
            onValueChange={(value) => {
              if (!value) return;

              setProjectConfig((prev) => ({
                ...prev,
                springBootVersion: value,
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="3.5.4">3.5.4</SelectItem>
              <SelectItem value="3.5.3">3.5.3</SelectItem>
              <SelectItem value="3.4.9">3.4.9</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}