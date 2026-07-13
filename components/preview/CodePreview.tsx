import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CodePreviewProps {
  code: string;
}

export default function CodePreview({
  code,
}: CodePreviewProps) {
  return (
    <Card className="h-[700px]">
      <CardHeader>
        <CardTitle>Generated Code</CardTitle>
      </CardHeader>

      <CardContent className="h-full">
        {code ? (
          <pre className="h-full overflow-auto rounded-lg bg-zinc-950 p-4 text-sm text-white">
            <code>{code}</code>
          </pre>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
            <p className="text-muted-foreground">
              Generate an entity to preview the code.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}