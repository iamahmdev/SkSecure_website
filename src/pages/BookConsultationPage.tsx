import { motion } from "framer-motion";
import { useState } from "react";
import { Shield } from "lucide-react";
import { Page, PageHero } from "@/components/Page";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";
import { consultImg } from "@/data/company";

const steps = ["Requirement review", "Initial consultation call", "Solution proposal", "Implementation planning"];

export function BookConsultationPage() {
  const [sent, setSent] = useState(false);
  return (
    <Page>
      <PageHero
        title="Book a Data Security & Management Consultation"
        sub="Get expert guidance to protect, organize and optimize your business data"
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <FadeInHeading>Request a Consultation</FadeInHeading>
            <p className="text-brand-mid mb-6">Share your requirements and our team will contact you with a tailored solution.</p>
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="p-3 border rounded-lg" />
                <input required type="email" placeholder="Email" className="p-3 border rounded-lg" />
                <input type="tel" placeholder="Phone" className="p-3 border rounded-lg" />
                <input placeholder="Company Name" className="p-3 border rounded-lg" />
                <select className="p-3 border rounded-lg bg-white">
                  <option>Healthcare</option><option>Legal</option><option>Accounting</option>
                  <option>Financial Services</option><option>Logistics</option><option>Construction</option>
                  <option>Retail/E-commerce</option><option>Education</option><option>Nonprofit</option>
                </select>
                <select className="p-3 border rounded-lg bg-white">
                  <option>Data Security</option><option>Data Management</option><option>Reporting & Analytics</option>
                  <option>Dashboards</option><option>Governance</option><option>Backup & Recovery</option>
                </select>
                <select className="p-3 border rounded-lg bg-white">
                  <option>Phone</option><option>Email</option><option>Video Call</option>
                </select>
                <input type="date" className="p-3 border rounded-lg" />
                <input type="time" className="p-3 border rounded-lg sm:col-span-2" />
              </div>
              <textarea rows={4} placeholder="Project Details" className="w-full p-3 border rounded-lg" />
              <button type="submit" className="btn-primary w-full justify-center">Submit Request</button>
              {sent && <p className="text-brand-primary font-semibold">Thank you! We'll be in touch shortly.</p>}
            </form>
          </motion.div>
          <motion.img initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            src={consultImg} alt="" className="rounded-2xl shadow-xl w-full h-[600px] object-cover sticky top-24" />
        </div>
      </SectionWrapper>

      <SectionWrapper bg="muted">
        <div className="text-center mb-12"><FadeInHeading>What Happens Next</FadeInHeading></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-brand-primary">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center mx-auto mb-3">{i + 1}</div>
              <p className="font-bold text-brand-dark">{s}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 flex gap-5 items-start">
          <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
            <Shield className="text-white" />
          </div>
          <p className="text-brand-mid leading-relaxed">Your information is handled securely and used only for consultation purposes. We follow structured data handling practices aligned with business security standards.</p>
        </div>
      </SectionWrapper>

      <CTASection title="READY TO IMPROVE YOUR DATA SYSTEMS?"
        text="Book a consultation and take the first step toward better data security and management"
        primaryTo="/contact" primaryLabel="Contact Us" />
    </Page>
  );
}
