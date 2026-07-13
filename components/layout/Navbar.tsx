import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold text-[#D6336C]">
            SpringForge
          </h1>

          <p className="text-sm text-muted-foreground">
            Generate Spring Boot CRUD modules instantly
          </p>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}