import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Page, PageHero } from "@/components/Page";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";
import { contactImg, company } from "@/data/company";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Page>
      <PageHero
        title="Contact SKSecureData – Data Security & Management Experts"
        sub="Get in touch for data security, data management and reporting solutions"
        primary={{ label: "Book Consultation", to: "/book-consultation" }}
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <FadeInHeading>Send Us a Message</FadeInHeading>
            <p className="text-brand-mid mb-6">Reach out for inquiries, support or service-related questions.</p>
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <input required placeholder="Full Name" className="w-full p-3 border rounded-lg" />
              <input required type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
              <input placeholder="Company Name" className="w-full p-3 border rounded-lg" />
              <select className="w-full p-3 border rounded-lg bg-white">
                <option>General Inquiry</option><option>Data Security Services</option><option>Data Management</option>
                <option>Reporting & Analytics</option><option>Compliance & Governance</option>
              </select>
              <textarea required rows={5} placeholder="Message" className="w-full p-3 border rounded-lg" />
              <button type="submit" className="btn-primary w-full justify-center">Submit Message</button>
              {sent && <p className="text-brand-primary font-semibold">Thank you! We'll respond within one business day.</p>}
            </form>
          </motion.div>
          <motion.img initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            src={contactImg} alt="" className="rounded-2xl shadow-xl w-full h-[600px] object-cover sticky top-24" />
        </div>
      </SectionWrapper>

      <SectionWrapper bg="muted">
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {[
            { Icon: Phone, label: company.phone, href: `tel:${company.phoneTel}` },
            { Icon: Mail, label: company.email, href: `mailto:${company.email}` },
            { Icon: MapPin, label: company.city, href: "#" },
          ].map((c, i) => (
            <motion.a key={i} href={c.href} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <c.Icon className="text-brand-primary" />
              </div>
              <p className="font-semibold text-brand-dark">{c.label}</p>
            </motion.a>
          ))}
        </div>
        <p className="text-center text-brand-mid">Our team typically responds within one business day.</p>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInHeading>Speak with Data Security & Management Experts</FadeInHeading>
          <p className="text-brand-mid leading-relaxed">Whether you need help with data security, reporting, dashboards or data organization, our team provides practical solutions tailored to your business needs.</p>
        </div>
      </SectionWrapper>

      <CTASection title="NEED A CUSTOM DATA SOLUTION?"
        text="Talk to our team and get expert guidance tailored to your business"
        showExpert />
    </Page>
  );
}
