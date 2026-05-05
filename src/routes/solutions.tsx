import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/pages/SolutionsPage";
export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [{ title: "Solutions – SKSecureData" }, { name: "description", content: "Comprehensive data security, management, reporting and governance solutions." }] }),
  component: SolutionsPage,
});
