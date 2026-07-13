import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EntityForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entity Configuration</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">
          Configure your entity to generate Spring Boot CRUD files.
        </p>
      </CardContent>
    </Card>
  );
}