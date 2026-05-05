import { motion } from "framer-motion";
import { Page, PageHero, ServiceBlock } from "@/components/Page";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";
import { dataImg, securityImg, accessImg, reportImg, dashImg, recordsImg, backupImg, processImg, teamImg, consultImg } from "@/data/company";

const services = [
  { id: "svc1", image: dataImg, title: "Data Management & Data Quality Services", desc: "SKSecureData provides data management services designed to improve the organization, accuracy and reliability of business information. These services help ensure that operational and reporting data is consistent, structured and usable across systems.", bullets: ["Data cleaning and validation to remove errors and inconsistencies","Data organization and structuring for improved usability","Data accuracy reviews to ensure reliable information","Record maintenance support for ongoing data consistency","Database and spreadsheet management assistance","Data quality monitoring and reporting","Information organization for better workflow alignment","Support for operational and reporting data systems","Reduction of manual errors and duplication","Improved decision-making through reliable data"] },
  { id: "svc2", image: securityImg, title: "Data Security Assessments & Information Risk Reviews", desc: "We help businesses identify and understand risks associated with data storage, access and handling practices. Our assessments provide practical recommendations to strengthen data protection and reduce exposure to security threats.", bullets: ["Data security posture reviews","Information risk assessments","Access control reviews","Identification of security gaps","Evaluation of data handling processes","Risk mitigation recommendations","Review of sensitive data exposure risks","Assessment of internal data controls","Identification of operational vulnerabilities","Practical and actionable improvement plans"] },
  { id: "svc3", image: accessImg, title: "Data Protection & Access Control Advisory", desc: "These services focus on strengthening how organizations control access to sensitive information and implement structured data protection practices.", bullets: ["User access control reviews","Role-based access recommendations","Data permission structure improvements","Identity and access governance support","Secure data handling advisory","Internal access risk reduction","Protection of confidential business information","Improved accountability in data access","Support for structured access policies","Practical implementation guidance"] },
  { id: "svc4", image: reportImg, title: "Business Reporting & Performance Analysis Services", desc: "We provide structured reporting and analysis services that help organizations monitor performance and make informed decisions based on reliable data insights.", bullets: ["KPI tracking and performance monitoring","Operational trend analysis","Data interpretation and insights","Management reporting systems","Forecasting support","Identification of business trends","Improved operational visibility","Support for strategic decision-making","Custom reporting structures","Data-driven performance improvement"] },
  { id: "svc5", image: dashImg, title: "Dashboard Development & Reporting Automation Support", desc: "We design dashboards and automation tools that improve reporting efficiency and reduce manual workload while providing real-time access to key business data.", bullets: ["Excel-based dashboards","Performance tracking dashboards","Automated reporting templates","Operational reporting tools","Management data summaries","Reduction of manual reporting tasks","Faster access to business information","Improved reporting accuracy","Integration with existing systems","Scalable reporting solutions"] },
  { id: "svc6", image: recordsImg, title: "Secure Records Management & Information Governance", desc: "We help businesses improve control over sensitive documents and information through structured records management and governance practices.", bullets: ["Secure digital records organization","Information classification guidance","Document access structure reviews","Records protection advisory","Information retention controls","Governance process recommendations","Improved document security","Reduced risk of data mishandling","Better control over sensitive records","Structured information lifecycle management"] },
  { id: "svc7", image: backupImg, title: "Data Backup, Recovery & Integrity Support", desc: "These services help organizations strengthen data resilience, ensuring that critical information remains available, accurate and protected in case of system failure or disruption.", bullets: ["Backup process reviews","Recovery planning support","Data integrity monitoring","Information availability assessments","Continuity planning support","Risk reduction for data loss","Improved system reliability","Protection of critical business data","Support for disaster recovery preparedness","Ongoing monitoring recommendations"] },
  { id: "svc8", image: processImg, title: "Business Process Improvement Through Data Analysis", desc: "We analyze operational data to identify inefficiencies and recommend improvements that enhance workflow performance and overall business efficiency.", bullets: ["Process analysis and workflow evaluation","Operational data reviews","Efficiency improvement recommendations","Performance monitoring support","Identification of bottlenecks","Optimization of workflows","Improved operational efficiency","Data-driven decision-making support","Reduction of operational delays","Enhanced business performance"] },
  { id: "svc9", image: teamImg, title: "Compliance & Information Governance Support", desc: "We provide support to help organizations improve privacy controls and prepare for applicable data protection and compliance-related requirements.", bullets: ["Privacy control reviews","Compliance readiness support","Information handling policy guidance","Security documentation support","Risk management recommendations","Improved governance practices","Enhanced documentation control","Support for regulatory preparedness","Strengthened internal controls","Better risk management alignment"] },
  { id: "svc10", image: consultImg, title: "Ongoing Data Security & Data Management Consulting", desc: "We offer ongoing advisory services for businesses that require continuous support in managing data security, reporting and operational data systems.", bullets: ["Ongoing data security consulting","Data management advisory support","Periodic risk assessments","Reporting and analytics support","Recurring operational advisory services","Monthly or subscription-based support","Continuous improvement recommendations","Long-term partnership approach","Scalable support based on business needs","Reliable access to expert guidance"] },
];

export function SolutionsPage() {
  return (
    <Page>
      <PageHero
        title="Data Security & Data Management Solutions for Businesses"
        sub="Practical, scalable and risk-based services to protect, organize and optimize your data"
        primary={{ label: "Book Consultation", to: "/book-consultation" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInHeading>Comprehensive Data Services Designed for Real Business Needs</FadeInHeading>
          <p className="text-brand-mid leading-relaxed">SKSecureData provides structured data security, data management and reporting solutions tailored to small and medium-sized businesses. Our services are designed to improve data quality, strengthen security controls, reduce operational risk and support better decision-making through organized and reliable information systems.</p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="muted">
        <div className="text-center mb-10"><FadeInHeading>Quick Navigation</FadeInHeading></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {services.map((s, i) => (
            <motion.a key={s.id} href={`#${s.id}`} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 shadow border border-gray-100 hover:border-brand-primary text-sm font-semibold text-brand-dark text-center">
              {s.title.split("&")[0]}
            </motion.a>
          ))}
        </div>
      </SectionWrapper>

      {services.map((s, i) => <ServiceBlock key={s.id} {...s} index={i} />)}

      <CTASection title="READY TO IMPROVE YOUR DATA SECURITY AND MANAGEMENT?"
        text="Work with SKSecureData to protect your information, improve data quality and optimize operations"
        secondaryTo="/contact" secondaryLabel="Contact Us" />
    </Page>
  );
}
