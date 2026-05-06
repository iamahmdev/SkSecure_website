import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Database, Shield, Lock, BarChart2, LayoutDashboard, FolderLock, HardDrive, TrendingUp, ArrowRight } from "lucide-react";
import { Page } from "@/components/Page";
import { HeroBanner } from "@/components/HeroBanner";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";
import { dataImg, securityImg, accessImg, reportImg, dashImg, recordsImg, backupImg, processImg, teamImg, industriesList } from "@/data/company";

const services = [
  { icon: Database, title: "Data Management", desc: "Clean, organize and maintain accurate business data" },
  { icon: Shield, title: "Data Security", desc: "Identify risks and strengthen data protection practices" },
  { icon: Lock, title: "Access Control", desc: "Manage permissions and control access to sensitive data" },
  { icon: BarChart2, title: "Reporting & Analytics", desc: "Track KPIs and generate structured business reports" },
  { icon: LayoutDashboard, title: "Dashboards", desc: "Real-time dashboards for smarter business decisions" },
  { icon: FolderLock, title: "Records Management", desc: "Secure and structured document governance" },
  { icon: HardDrive, title: "Backup & Recovery", desc: "Protect critical data with recovery planning support" },
  { icon: TrendingUp, title: "Process Improvement", desc: "Improve workflows using data-driven insights" },
];

const detailSections = [
  { img: dataImg, title: "Organized, Reliable and High-Quality Business Data", text: "Improve data accuracy, structure and usability through data cleaning, validation, organization and ongoing monitoring to support reliable business operations and reporting." },
  { img: securityImg, title: "Identify Risks and Strengthen Data Protection", text: "Assess vulnerabilities, review access controls and implement practical recommendations to reduce exposure to data security and privacy risks." },
  { img: accessImg, title: "Control Access and Protect Sensitive Information", text: "Implement structured access controls, permission systems and governance practices to reduce unauthorized access and improve data security." },
  { img: reportImg, title: "Data-Driven Decision Making", text: "Track KPIs, analyze trends and generate structured reports to improve visibility and support strategic planning across your organization." },
  { img: dashImg, title: "Faster Reporting Through Automation", text: "Build dashboards and automated reporting systems that reduce manual work and provide real-time access to business information." },
  { img: recordsImg, title: "Secure and Structured Information Management", text: "Improve document organization, classification, retention and governance practices to protect sensitive records and ensure proper information handling." },
  { img: backupImg, title: "Protect Critical Business Data", text: "Strengthen backup processes, recovery planning and data integrity monitoring to ensure continuity and availability of important information." },
  { img: processImg, title: "Improve Efficiency with Data Insights", text: "Analyze operational data to identify inefficiencies and implement improvements that enhance workflows and overall business performance." },
];

const whySK = [
  { t: "Risk-Based Approach", d: "We focus on real risks in your data systems" },
  { t: "Practical Solutions", d: "Designed for real business environments" },
  { t: "Data Security Focus", d: "Protection of sensitive information is our priority" },
  { t: "Scalable Support", d: "Solutions that grow with your business" },
  { t: "Cost-Effective", d: "Professional services without enterprise pricing" },
];

const steps = ["Consultation", "Risk Assessment", "Solution Design", "Implementation", "Ongoing Support"];

export function HomePage() {
  return (
    <Page>
      <HeroBanner />

      {/* About Intro */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
            src={teamImg} alt="About" className="rounded-2xl shadow-xl w-full h-[420px] object-cover" />
          <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <FadeInHeading>Specialized Data Security & Management Services</FadeInHeading>
            <p className="text-brand-mid mb-6 leading-relaxed">SKSecureData is a Calgary-based data services company providing professional data security, data management, reporting and information governance solutions for small and medium-sized businesses. We help organizations protect sensitive information, improve data organization, strengthen controls and support better decision-making through structured and practical systems.</p>
            <Link to="/about" className="btn-primary">Learn More</Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core services grid */}
      <SectionWrapper bg="muted">
        <div className="text-center mb-12">
          <FadeInHeading>Core Services</FadeInHeading>
          <p className="text-brand-mid">Comprehensive data solutions for modern businesses</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </SectionWrapper>

      {/* 8 detail sections */}
      {detailSections.map((d, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={d.title} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#f3faf4]"}`}>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <motion.img initial={{ x: reverse ? 60 : -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                src={d.img} alt={d.title} className={`rounded-2xl shadow-xl w-full h-[360px] object-cover ${reverse ? "md:order-2" : ""}`} />
              <motion.div initial={{ x: reverse ? -60 : 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <FadeInHeading>{d.title}</FadeInHeading>
                <p className="text-brand-mid leading-relaxed mb-6">{d.text}</p>
                <Link to="/solutions" className="btn-secondary">Learn More</Link>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Industries */}
      <SectionWrapper bg="muted">
        <div className="text-center mb-10">
          <FadeInHeading>Industries We Serve</FadeInHeading>
          <p className="text-brand-mid max-w-2xl mx-auto">We support organizations that manage sensitive operational, financial and customer data.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industriesList.map((ind, i) => (
            <motion.div key={ind.id} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <Link to="/industries" hash={ind.id}
                className="px-5 py-3 rounded-full bg-white shadow border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-sm font-semibold text-brand-dark">
                {ind.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works preview */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <FadeInHeading>How It Works</FadeInHeading>
          <p className="text-brand-mid">A structured approach ensures practical, scalable and secure data solutions.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-10">
          {steps.map((s, i) => (
            <motion.div key={s} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0">{i + 1}</div>
              <p className="font-semibold text-brand-dark text-sm">{s}</p>
              {i < steps.length - 1 && <ArrowRight className="hidden md:block text-brand-primary shrink-0" size={20} />}
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/how-it-works" className="btn-primary">See Full Process</Link>
        </div>
      </SectionWrapper>

      {/* Why SK */}
      <SectionWrapper bg="tint">
        <div className="text-center mb-12"><FadeInHeading>Why SKSecureData</FadeInHeading></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whySK.map((w, i) => (
            <motion.div key={w.t} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border-t-4 border-brand-primary">
              <h3 className="font-bold text-brand-dark mb-2">{w.t}</h3>
              <p className="text-sm text-brand-mid">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection title="READY TO SECURE AND OPTIMIZE YOUR BUSINESS DATA?"
        text="Work with SKSecureData to protect your information, improve data quality and support better decision-making"
        showExpert />
    </Page>
  );
}
