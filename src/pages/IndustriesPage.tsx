import { Page, PageHero, ServiceBlock } from "@/components/Page";
import { CTASection } from "@/components/CTASection";
import { SectionWrapper, FadeInHeading } from "@/components/SectionWrapper";

const I = (n: string) => `https://images.unsplash.com/${n}?w=1200&q=80`;

const inds = [
  { id: "healthcare", image: I("photo-1576091160399-112ba8d25d1d"), title: "Data Security & Data Management for Healthcare Organizations", desc: "Healthcare organizations handle highly sensitive patient and operational data that requires strong protection, structured management and reliable access for decision-making and compliance.", bullets: ["Secure management of patient and administrative records","Data access control and permission structuring","Information organization for medical workflows","Data accuracy and record consistency support","Risk assessments for sensitive healthcare data","Reporting and operational performance tracking","Support for privacy control practices","Data handling process improvements","Reduction of data exposure risks","Improved reliability of healthcare information systems"] },
  { id: "law-firms", image: I("photo-1589829545856-d10d557cf95f"), title: "Data Protection & Information Governance for Law Firms", desc: "Law firms manage confidential client information and legal documentation that requires strong data protection, structured records management and controlled access.", bullets: ["Secure document and case file management","Access control and role-based permissions","Information classification and organization","Data security assessments for legal data","Records retention and governance support","Confidential data handling advisory","Reporting and case data organization","Risk reduction for unauthorized data access","Improved document workflow efficiency","Structured legal data management systems"] },
  { id: "accounting", image: I("photo-1554224155-6726b3ff858f"), title: "Data Management & Security Solutions for Accounting Firms", desc: "Accounting firms rely on accurate financial data and secure systems to manage sensitive financial records, reporting and compliance-related information.", bullets: ["Data accuracy and validation for financial records","Secure storage of financial and client data","Access control for sensitive accounting information","Reporting and KPI tracking support","Data integrity monitoring","Process improvements for financial workflows","Risk assessments for financial data systems","Automated reporting and dashboards","Improved financial data organization","Support for compliance-related documentation"] },
  { id: "financial-services", image: I("photo-1551288049-bebda4e38f71"), title: "Data Security & Reporting Solutions for Financial Services", desc: "Financial service providers require strong data protection, reporting accuracy and structured systems to manage sensitive client and operational information.", bullets: ["Data protection for client and transactional information","Access control and identity management support","Reporting and analytics for performance monitoring","Risk assessments for data systems","Secure handling of sensitive financial data","Data governance and documentation support","Dashboard and reporting automation","Operational data organization","Improved decision-making through analytics","Strengthened information security practices"] },
  { id: "logistics", image: I("photo-1601584115197-04ecc0da31d7"), title: "Data Management & Reporting Solutions for Logistics Businesses", desc: "Logistics and transportation businesses rely on accurate operational data, tracking systems and reporting tools to manage workflows and improve efficiency.", bullets: ["Data tracking for operations and performance","Reporting and dashboard solutions for logistics workflows","Process analysis and efficiency improvement","Data organization for operational systems","KPI tracking for logistics performance","Workflow automation support","Data integrity monitoring","Improved coordination between systems","Reduction of manual data handling","Enhanced visibility into logistics operations"] },
  { id: "construction", image: I("photo-1504307651254-35680f356dfd"), title: "Data Solutions for Construction and Project-Based Businesses", desc: "Construction companies manage project data, operational workflows and financial information that require structured organization and reporting systems.", bullets: ["Project data organization and management","Reporting systems for project performance","Workflow analysis and process improvement","Data accuracy and validation","Dashboard development for project tracking","Operational efficiency improvement","Data security for project information","Reporting automation support","Improved coordination across teams","Structured data systems for project management"] },
  { id: "retail", image: I("photo-1481437156560-3205f6a55735"), title: "Data Analytics & Reporting for Retail and E-commerce", desc: "Retail and e-commerce businesses rely on data for sales tracking, customer insights and operational decision-making.", bullets: ["Sales data analysis and reporting","Customer data management","Dashboard development for performance tracking","KPI monitoring for business growth","Data organization for operations","Automation of reporting processes","Trend analysis and forecasting","Improved customer insights","Data-driven decision-making support","Enhanced operational visibility"] },
  { id: "education", image: I("photo-1523580494863-6f3031224c94"), title: "Data Management & Governance for Educational Institutions", desc: "Educational organizations manage student, administrative and operational data that requires structured systems for organization, security and reporting.", bullets: ["Student data organization and management","Secure handling of sensitive information","Reporting and performance analysis","Data governance and documentation","Access control for institutional data","Dashboard and reporting systems","Data integrity and accuracy support","Operational efficiency improvement","Process automation support","Improved data visibility for decision-making"] },
  { id: "nonprofits", image: I("photo-1593113598332-cd288d649433"), title: "Data Management & Reporting Solutions for Nonprofits", desc: "Nonprofits require structured data systems to manage donor information, reporting and operational data while maintaining strong data protection practices.", bullets: ["Donor and operational data management","Reporting and dashboard solutions","Data organization and validation","KPI tracking and performance reporting","Secure handling of sensitive information","Workflow efficiency improvements","Data-driven decision-making support","Reporting automation","Improved transparency and accountability","Scalable systems for growing organizations"] },
];

export function IndustriesPage() {
  return (
    <Page>
      <PageHero
        title="Data Security & Data Management Solutions for Every Industry"
        sub="Protect, organize and optimize sensitive business data across multiple sectors"
        primary={{ label: "Book Consultation", to: "/book-consultation" }}
        secondary={{ label: "View Solutions", to: "/solutions" }}
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInHeading>Industry-Specific Data Security and Management Services</FadeInHeading>
          <p className="text-brand-mid leading-relaxed">SKSecureData provides tailored data security, data management and reporting solutions for organizations that manage sensitive information and require structured systems for protection, organization and decision-making. Our services are designed to address industry-specific challenges related to data risk, compliance, reporting and operational efficiency.</p>
        </div>
      </SectionWrapper>

      {inds.map((ind, i) => <ServiceBlock key={ind.id} {...ind} index={i} />)}

      <CTASection title="SOLUTIONS TAILORED TO YOUR INDUSTRY"
        text="Work with SKSecureData to implement secure, structured and scalable data systems"
        secondaryTo="/contact" secondaryLabel="Contact Us" />
    </Page>
  );
}
