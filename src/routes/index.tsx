import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "SKSecureData – Data Security & Management in Calgary" }, { name: "description", content: "Calgary-based data security, data management and reporting solutions for modern businesses." }] }),
  component: HomePage,
});
