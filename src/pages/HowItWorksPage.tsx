import { motion } from "framer-motion";
import { Shield, FolderOpen, BarChart2, AlertTriangle, TrendingUp, Layers, ArrowRight } from "lucide-react";
import { Page, PageHero, ServiceBlock } from "@/components/Page";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";
import { teamImg, securityImg, dashImg, processImg, dataImg } from "@/data/company";

const steps = ["Consultation", "Assessment", "Solution Design", "Implementation", "Support"];

const stepSections = [
  { image: teamImg, title: "Understanding Your Business and Data Requirements", desc: "The process begins with a detailed consultation to understand your business operations, current data systems and key challenges related to data security, management and reporting.", bullets: ["Identify business goals and operational needs","Understand existing data systems and workflows","Discuss data-related challenges and inefficiencies","Review current reporting and analytics practices","Gather information about sensitive data handling","Define project scope and objectives","Align expectations and priorities","Establish communication process","Identify quick improvement opportunities","Build a foundation for the next steps"] },
  { image: securityImg, title: "Data Security Assessment and Information Risk Review", desc: "In this stage, we analyze your data environment to identify risks, inefficiencies and gaps in data management and security practices.", bullets: ["Evaluate data storage and handling processes","Conduct data security posture review","Identify access control gaps","Assess data accuracy and organization","Review reporting and workflow inefficiencies","Analyze risks related to sensitive data","Identify operational bottlenecks","Evaluate data governance practices","Document key findings and risk areas","Provide initial improvement insights"] },
  { image: dashImg, title: "Designing Practical Data Security and Management Solutions", desc: "Based on assessment findings, we design tailored solutions that improve data security, organization, reporting and operational efficiency.", bullets: ["Develop structured data management systems","Design access control and security frameworks","Plan reporting and dashboard solutions","Create workflow improvement strategies","Recommend governance and compliance practices","Define implementation roadmap","Align solutions with business operations","Ensure scalability and flexibility","Prioritize high-impact improvements","Prepare detailed solution recommendations"] },
  { image: processImg, title: "Implementing Data Systems and Security Improvements", desc: "We implement the designed solutions, ensuring that systems are properly configured and aligned with business workflows.", bullets: ["Set up data management systems","Implement access control structures","Develop dashboards and reporting tools","Configure automation processes","Improve data organization and workflows","Apply security recommendations","Test systems for accuracy and performance","Ensure proper documentation","Provide guidance during transition","Deliver fully functional solutions"] },
  { image: dataImg, title: "Continuous Data Support, Monitoring and Improvement", desc: "After implementation, we provide ongoing support to ensure systems remain effective, secure and aligned with business needs.", bullets: ["Monitor data systems and performance","Provide ongoing data security support","Conduct periodic risk reviews","Update reporting and dashboards","Optimize workflows and processes","Provide advisory for continuous improvement","Support scaling of systems","Ensure long-term data integrity","Assist with new requirements","Maintain operational efficiency"] },
];

const benefits = [
  { icon: Shield, t: "Improved Data Security" },
  { icon: FolderOpen, t: "Better Data Organization" },
  { icon: BarChart2, t: "Faster Reporting" },
  { icon: AlertTriangle, t: "Reduced Risk" },
  { icon: TrendingUp, t: "Enhanced Decision-Making" },
  { icon: Layers, t: "Scalable Systems" },
];

export function HowItWorksPage() {
  return (
    <Page>
      <PageHero
        title="How Our Data Security & Management Process Works"
        sub="A structured, practical approach to securing, organizing and optimizing your data"
        primary={{ label: "Book Consultation", to: "/book-consultation" }}
        secondary={{ label: "View Solutions", to: "/solutions" }}
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInHeading>A Clear and Structured Approach to Data Solutions</FadeInHeading>
          <p className="text-brand-mid leading-relaxed">SKSecureData follows a step-by-step process to understand your business, assess data risks, design practical solutions and implement systems that improve data security, organization and reporting. Our approach ensures that every solution is aligned with real business operations and delivers measurable value.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="muted">
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {steps.map((s, i) => (
            <motion.div key={s} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="flex items-center gap-3 flex-1">
              <div className="bg-white p-5 rounded-xl shadow flex-1 text-center border-t-4 border-brand-primary">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center mx-auto mb-2">{i + 1}</div>
                <p className="font-bold text-brand-dark text-sm">{s}</p>
              </div>
              {i < steps.length - 1 && <ArrowRight className="hidden md:block text-brand-primary shrink-0" />}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {stepSections.map((s, i) => <ServiceBlock key={s.title} {...s} index={i} ctaLabel="Book Consultation" />)}

      <SectionWrapper bg="tint">
        <div className="text-center mb-12"><FadeInHeading>Benefits of Our Structured Approach</FadeInHeading></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.t} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <b.icon className="text-brand-primary" size={26} />
              </div>
              <h3 className="font-bold text-brand-dark">{b.t}</h3>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection title="READY TO IMPROVE YOUR DATA SYSTEMS?"
        text="Work with SKSecureData to implement secure, structured and scalable data solutions"
        showExpert />
    </Page>
  );
}
