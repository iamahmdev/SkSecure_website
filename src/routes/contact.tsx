import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact – SKSecureData" }, { name: "description", content: "Contact SKSecureData for data security & management services in Calgary." }] }),
  component: ContactPage,
});
