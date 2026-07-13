import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CodePreview() {
  return (
    <Card className="h-[700px]">
      <CardHeader>
        <CardTitle>Generated Code</CardTitle>
      </CardHeader>

      <CardContent className="h-full">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">
            Your generated Spring Boot code will appear here.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}