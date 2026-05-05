import { createFileRoute } from "@tanstack/react-router";
import { BookConsultationPage } from "@/pages/BookConsultationPage";
export const Route = createFileRoute("/book-consultation")({
  head: () => ({ meta: [{ title: "Book Consultation – SKSecureData" }, { name: "description", content: "Book a free consultation with our data security & management experts." }] }),
  component: BookConsultationPage,
});
