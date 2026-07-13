import Navbar from "@/components/layout/Navbar";
import EntityForm from "@/components/forms/EntityForm";
import CodePreview from "@/components/forms/CodePreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-64px)] bg-[#FFF5F8] dark:bg-zinc-950 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-2">
          <EntityForm />
          <CodePreview />
        </div>
      </main>
    </>
  );
}