import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About – SKSecureData" }, { name: "description", content: "Calgary data security & management experts helping modern businesses." }] }),
  component: AboutPage,
});
