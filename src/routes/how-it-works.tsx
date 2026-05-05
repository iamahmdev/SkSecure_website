import { createFileRoute } from "@tanstack/react-router";
import { HowItWorksPage } from "@/pages/HowItWorksPage";
export const Route = createFileRoute("/how-it-works")({
  head: () => ({ meta: [{ title: "How It Works – SKSecureData" }, { name: "description", content: "Our 5-step structured approach to data security and management." }] }),
  component: HowItWorksPage,
});
