import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/pages/IndustriesPage";
export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [{ title: "Industries – SKSecureData" }, { name: "description", content: "Industry-specific data security and management for healthcare, legal, finance and more." }] }),
  component: IndustriesPage,
});
