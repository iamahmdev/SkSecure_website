import { motion } from "framer-motion";
import { Page, PageHero } from "@/components/Page";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";
import { teamImg, dataImg } from "@/data/company";

const expertise = ["Data Security", "Data Management", "Reporting & Analytics", "Information Governance", "Access Control", "Data Quality", "Dashboard Development", "Process Improvement"];
const works = ["Healthcare", "Legal", "Accounting", "Financial Services", "Logistics", "Construction", "Retail", "Education", "Nonprofits"];
const why = [
  { t: "Practical Solutions", d: "Designed for real business environments" },
  { t: "Risk-Based Approach", d: "Focus on reducing data-related risks" },
  { t: "Data-Focused Strategy", d: "Structured systems for better data management" },
  { t: "Scalable Support", d: "Flexible solutions that grow with your business" },
];
const approach = [
  "Assess current data systems and identify gaps",
  "Analyze risks related to data security and handling",
  "Design structured and scalable solutions",
  "Implement practical data management and reporting systems",
  "Provide ongoing advisory and support",
];

export function AboutPage() {
  return (
    <Page>
      <PageHero
        title="Data Security & Data Management Experts for Modern Businesses"
        sub="Helping organizations protect, organize and optimize their business data"
        primary={{ label: "Book Consultation", to: "/book-consultation" }}
        secondary={{ label: "View Solutions", to: "/solutions" }}
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            src={teamImg} alt="" className="rounded-2xl shadow-xl w-full h-[420px] object-cover" />
          <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <FadeInHeading>Who We Are</FadeInHeading>
            <p className="text-brand-mid mb-4 leading-relaxed">SKSecureData is a professional data security and data management services provider focused on helping businesses protect sensitive information, improve data organization and build structured systems that support efficient operations and decision-making.</p>
            <p className="text-brand-mid leading-relaxed">We work with organizations that rely on data for daily operations and require practical solutions to manage, secure and optimize their information systems.</p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="muted">
        <div className="max-w-4xl mx-auto">
          <FadeInHeading>What We Do</FadeInHeading>
          <p className="text-brand-mid mb-4 leading-relaxed">SKSecureData operates as a data services and information protection company providing data security consulting, data management support, reporting solutions and information governance advisory services.</p>
          <p className="text-brand-mid leading-relaxed">Our focus is on delivering structured, risk-based and scalable solutions that help organizations reduce data-related risks, improve operational visibility and strengthen internal controls.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <FadeInHeading>Our Approach to Data Security and Management</FadeInHeading>
        <p className="text-brand-mid leading-relaxed mb-8 max-w-4xl">Our approach is built around understanding real business operations and designing solutions that align with how organizations manage data in practice. We focus on practical implementation, structured systems and measurable improvements.</p>
        <div className="space-y-3 max-w-4xl">
          {approach.map((a, i) => (
            <motion.div key={a} initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow border-l-4 border-brand-primary">
              <span className="w-9 h-9 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <p className="text-brand-dark font-medium">{a}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="tint">
        <FadeInHeading>Core Areas of Expertise</FadeInHeading>
        <p className="text-brand-mid mb-8">Our expertise covers key areas required to manage and protect business data effectively.</p>
        <div className="flex flex-wrap gap-3">
          {expertise.map((e, i) => (
            <motion.span key={e} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="px-5 py-2 bg-white rounded-full shadow font-semibold text-brand-dark border border-gray-100">{e}</motion.span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12"><FadeInHeading>Why Businesses Choose SKSecureData</FadeInHeading></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map((w, i) => (
            <motion.div key={w.t} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-primary">
              <h3 className="font-bold text-brand-dark mb-2">{w.t}</h3>
              <p className="text-sm text-brand-mid">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="muted">
        <FadeInHeading>Who We Work With</FadeInHeading>
        <p className="text-brand-mid mb-6 max-w-4xl">We support small and medium-sized businesses and organizations that manage sensitive operational, financial, employee or customer data and require structured systems for security, organization and reporting.</p>
        <div className="flex flex-wrap gap-3">
          {works.map(w => <span key={w} className="px-4 py-2 bg-white rounded-full shadow text-sm font-semibold text-brand-dark">{w}</span>)}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <FadeInHeading>Professional and Responsible Data Services</FadeInHeading>
            <p className="text-brand-mid mb-4 leading-relaxed">SKSecureData provides advisory and support services related to data security, data management and reporting. We operate as a professional services provider and do not function as a regulated legal, financial, engineering or cybersecurity enforcement entity.</p>
            <p className="text-brand-mid leading-relaxed">Our services are designed to support organizations in improving internal systems and processes related to data protection and management.</p>
          </motion.div>
          <motion.img initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            src={dataImg} alt="" className="rounded-2xl shadow-xl w-full h-[380px] object-cover" />
        </div>
      </SectionWrapper>

      <SectionWrapper bg="tint">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInHeading>Our Focus</FadeInHeading>
          <p className="text-brand-mid leading-relaxed">Our focus is to support businesses in building structured, secure and efficient data systems that improve operations, reduce risk and enable better decision-making through reliable and well-managed information.</p>
        </div>
      </SectionWrapper>

      <CTASection title="READY TO IMPROVE YOUR DATA SECURITY AND MANAGEMENT?"
        text="Work with SKSecureData to implement structured, secure and scalable data solutions"
        showExpert />
    </Page>
  );
}
