import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Handshake,
  Mail,
  MapPinned,
  Menu,
  Radar,
  ShieldCheck,
  TrafficCone,
  UsersRound,
  X,
  Facebook,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react";
import "./styles.css";

const assetPath = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

const assets = {
  verfoitech: assetPath("velofitech-logo.svg"),
  logo: assetPath("datacorp-logo.png"),
  hero: assetPath("traffic-data-analytics.png"),
  serviceVideo: assetPath("traffic-data-analytics.mp4"),
  analyticsIntro: assetPath("traffic-data-analytics-intro.jpg"),
  engineering: assetPath("service-engineering.jpg"),
  roadSafety: assetPath("road-safety.jpg"),
  collection: assetPath("data-collection.jpg"),
  analytics: assetPath("data-analytics.jpg"),
  ladysmith: assetPath("ladysmith.jpg"),
  annualCounts: assetPath("annual-counts.jpg"),
  enforcement: assetPath("enforcement.jpg"),
  smarterCities: assetPath("smarter-cities.jpg"),
  qualitySurveys: assetPath("quality-surveys.jpg"),
  goldenYears: assetPath("golden-years.png"),
  expo: assetPath("expo-2024.jpg"),
  careerPartner: assetPath("career-partner.png"),
  partnerImage: assetPath("annual-counts.jpg"),
  iso9001: assetPath("iso-9001.png"),
  iso27001: assetPath("iso-27001.png"),
  gdpr: assetPath("gdpr.png"),
  cmmi: assetPath("cmmi.png"),
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers" },
  { label: "Partner", href: "#partner" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: BarChart3,
    image: assets.analytics,
    title: "Traffic Data Analytics",
    text: "AI-assisted and analyst-reviewed reporting for turning counts, queues, origin-destination studies, journey time, saturation, parking, and public transport insights.",
  },
  {
    icon: Radar,
    image: assets.collection,
    title: "Traffic Data Collection",
    text: "Video, ATC, radar, ANPR, Bluetooth, manual and field survey programmes designed for roads, junctions, stations, campuses, and city networks.",
  },
  {
    icon: CircleGauge,
    image: assets.engineering,
    title: "Engineering & Modelling",
    text: "Transport modelling, impact assessments, capacity analysis, junction modelling, GIS evaluation, and long-term forecasting for infrastructure teams.",
  },
  {
    icon: ShieldCheck,
    image: assets.roadSafety,
    title: "Road Safety Systems",
    text: "Enforcement dashboards, speed monitoring, conflict studies, command centres, and safer-road workflows for agencies and local authorities.",
  },
];

const analytics = [
  "Turning movement counts",
  "Queue length and delay studies",
  "Mid-block volume and classification",
  "NMU and pedestrian desire-line tracking",
  "Origin-destination and journey time",
  "Parking, occupancy, ATC and GIS reports",
];

const products = [
  {
    title: "TrafficLenz Analytics",
    image: assets.analyticsIntro,
    text: "A dashboard-style traffic intelligence platform for validated counts, movement summaries, and visual reporting.",
  },
  {
    title: "AI Enforcement Camera",
    image: assets.careerPartner,
    text: "Camera-based road safety solution for speed monitoring, violation review, and enforcement evidence workflows.",
  },
  {
    title: "Survey Data Portal",
    image: assets.collection,
    text: "Centralized access for survey video, field datasets, count outputs, quality checks, and downloadable reports.",
  },
  {
    title: "Smart Reporting Suite",
    image: assets.smarterCities,
    text: "Client-ready reporting tools for dashboards, maps, trend charts, executive summaries, and planning decisions.",
  },
];

const stats = [
  ["10+", "Years of traffic expertise"],
  ["1,000+", "Successful projects delivered"],
  ["250+", "Skilled analysts and engineers"],
  ["12+", "Countries supported"],
];

const roles = [
  {
    title: "Traffic Data Analyst",
    description:
      "Review, classify, validate, and report traffic survey data from video, sensor, ATC, ANPR, and field sources.",
    responsibilities: [
      "Prepare turning count, queue, journey time, parking, and classification outputs",
      "Validate AI-generated counts with human quality checks",
      "Create clear Excel, dashboard, and client-ready reports",
      "Coordinate with project teams on deadlines and data quality",
    ],
  },
  {
    title: "Transport Modelling Engineer",
    description:
      "Build evidence-led transport models and planning outputs for junctions, corridors, developments, and city networks.",
    responsibilities: [
      "Support capacity analysis, traffic impact assessments, and junction modelling",
      "Use survey data to calibrate and validate transport models",
      "Prepare forecasts for future traffic demand and network changes",
      "Translate model results into practical engineering recommendations",
    ],
  },
  {
    title: "AI Video Processing Specialist",
    description:
      "Work with traffic video, AI tools, and analytics workflows to convert raw footage into structured movement intelligence.",
    responsibilities: [
      "Set up video processing workflows for junction, mid-block, and pedestrian studies",
      "Monitor AI outputs and correct classification or tracking issues",
      "Support TrafficLenz-style dashboards and visualization workflows",
      "Improve data accuracy through review, tagging, and validation processes",
    ],
  },
  {
    title: "Field Survey Coordinator",
    description:
      "Plan and coordinate field survey operations so traffic studies are captured safely, accurately, and on schedule.",
    responsibilities: [
      "Coordinate field teams, survey equipment, permissions, and schedules",
      "Manage video, manual, ATC, radar, and ANPR survey deployments",
      "Check survey coverage, site safety, and data handover quality",
      "Communicate updates between clients, analysts, and project managers",
    ],
  },
];

const similarServices = [
  {
    title: "Engineering",
    image: assets.engineering,
    summary:
      "Transport engineering support for junctions, corridors, development sites, parking, access, and city mobility planning.",
    provides: [
      "Capacity analysis and junction modelling",
      "Traffic impact assessment for new developments",
      "Parking studies and site access evaluation",
      "Transport modelling, forecasting, and simulation",
      "Signal timing and traffic signal optimization",
      "Access strategy and internal circulation review",
      "Road network performance assessment",
      "Public transport priority and corridor planning",
      "GIS mapping and transport evidence plans",
      "Technical reporting for consultants and authorities",
    ],
  },
  {
    title: "Road Safety",
    image: assets.roadSafety,
    summary:
      "Road safety and enforcement workflows that help agencies monitor risk, reduce violations, and improve safer movement.",
    provides: [
      "Speed monitoring and enforcement support",
      "ITMS and command centre dashboard workflows",
      "Traffic conflict studies for vehicles and vulnerable users",
      "Mobile enforcement and incident reporting support",
      "Red-light and lane-violation monitoring workflows",
      "School zone, work zone, and high-risk corridor studies",
      "Before-and-after safety improvement analysis",
      "Pedestrian and cyclist safety observations",
      "Crash-risk location review and prioritization",
      "Road safety audit evidence and reporting",
    ],
  },
  {
    title: "Traffic Data Collection",
    image: assets.collection,
    summary:
      "Field and video-based collection programmes built for reliable traffic counts, surveys, and network observations.",
    provides: [
      "Video, manual, ATC, radar, ANPR, and Bluetooth surveys",
      "Turning movement counts and vehicle classification",
      "Origin-destination, queue, journey time, and parking surveys",
      "Public transport, pedestrian, cyclist, and NMU monitoring",
      "Mid-block counts and speed data collection",
      "Intersection saturation and delay surveys",
      "Parking occupancy, turnover, and duration studies",
      "Bus stop, station, and passenger movement surveys",
      "Site reconnaissance, survey planning, and field deployment",
      "Quality-checked data handover for analysis teams",
    ],
  },
  {
    title: "Traffic Data Analytics",
    image: assets.analytics,
    summary:
      "AI-assisted and human-verified analysis that turns survey footage and sensor data into decision-ready reports.",
    provides: [
      "Traffic turning counts, queue length, and delay analysis",
      "Mid-block volume, occupancy, saturation, and ATC reporting",
      "Dashboard-ready reporting through TrafficLenz workflows",
      "GIS mapping, data validation, and customized client reports",
      "Vehicle class, movement, and peak-period summaries",
      "Origin-destination and journey time analysis",
      "Parking demand, utilization, and trend reporting",
      "Pedestrian, cyclist, and NMU analytics",
      "Before-and-after comparison dashboards",
      "Executive summaries and decision-ready visual reports",
    ],
  },
];

const stories = [
  ["Ladysmith - Traffic survey - Case Study", "July 14, 2024", assets.ladysmith],
  ["Annual Traffic Counts Case Study", "July 14, 2024", assets.annualCounts],
  ["Enforcement Case Study", "July 13, 2024", assets.enforcement],
];

const insights = [
  ["10 Golden years of DataCorp !!!", assets.goldenYears],
  ["Planning Smarter Cities through Accurate Data", assets.smarterCities],
  ["Need for Quality Traffic Surveys across India", assets.qualitySurveys],
  ["Traffic Infra Tech Expo 2024", assets.expo],
];

const compliance = [assets.iso9001, assets.iso27001, assets.gdpr, assets.cmmi];

const partnerPoints = [
  ["Local survey delivery", assets.collection],
  ["AI-enabled data processing", assets.analyticsIntro],
  ["Shared dashboards and reporting", assets.smarterCities],
  ["Cross-region transport expertise", assets.ladysmith],
];

const socialLinks = {
  facebook: "https://www.facebook.com/velofitech",
  twitter: "https://x.com/velofitech",
  linkedin: "https://www.linkedin.com/company/velofitech",
  location: "https://www.google.com/maps/search/?api=1&query=VelofiTech%20India",
};

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeOffering, setActiveOffering] = React.useState(similarServices[0]);
  const [activeRole, setActiveRole] = React.useState(roles[0]);

  const closeMenu = () => setMenuOpen(false);
  const selectRole = (role) => {
    setActiveRole(role);
    window.setTimeout(() => {
      document.getElementById("career-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="VelofiTech home">
          <img src={assets.verfoitech} alt="VelofiTech" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home" style={{ "--hero-image": `url(${assets.hero})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Services - Data</p>
          <h1>Traffic Data Analytics</h1>
          <p>
            Transform video, sensor, ANPR, ATC, and field survey data into precise
            insight for safer roads, smarter infrastructure, and faster transport decisions.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Start a project <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#services">
              Explore services
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Traffic analytics snapshot">
          <img src={assets.analyticsIntro} alt="Traffic data analytics" />
          <span>AI + Human Expertise</span>
          <strong>TrafficLenz</strong>
          <small>advanced analytics, real-time visualization and seamless reporting</small>
        </div>
      </section>

      <section className="section overview">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Unlocking the Power of Traffic Data</h2>
        </div>
        <div>
          <p>
            Traffic data is essential for optimizing infrastructure, reducing congestion,
            and enhancing user safety and experience. Accurate and timely insights help
            transportation systems become more efficient and responsive to evolving needs.
          </p>
          <div className="reason-list">
            <span>Informed decision-making</span>
            <span>Proactive planning</span>
            <span>Real-time responsiveness</span>
          </div>
        </div>
      </section>

      <section className="section enforcement-banner" id="road-safety-solutions">
        <div className="enforcement-copy">
          <h2>Transforming Roads for a Safer, Smarter Future.</h2>
          <p>
            Our AI-powered traffic enforcement solutions stand at the forefront of
            a safer, smarter, and more sustainable future for transportation.
          </p>
          <a href="#contact">
            Contact Us <ArrowRight size={20} />
          </a>
        </div>
        <img src={assets.careerPartner} alt="AI powered traffic enforcement cameras and speed display" />
      </section>

      <section className="section stats-band" aria-label="Company statistics">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section split" id="services">
        <div className="section-copy">
          <p className="eyebrow">Services</p>
          <h2>From raw movement data to decisions teams can trust.</h2>
          <p>
            Datacorp supports transport authorities, consultants, developers, and
            city operators with collection, analytics, modelling, and safety services
            across complex road environments.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, image, title, text }) => (
            <article className="service-card" key={title}>
              <img src={image} alt={title} />
              <div>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">
                  Request details <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="insight-band">
        <div className="insight-image">
          <img src={assets.analyticsIntro} alt="Traffic data analytics analysis workstation" />
        </div>
        <div className="insight-content">
          <p className="eyebrow">Traffic Data Analytics</p>
          <h2>Specialized reports for every movement, mode, and junction type.</h2>
          <p>
            Count, classify, validate, and visualize transport activity with a hybrid
            model that combines machine intelligence and experienced analyst review.
          </p>
          <div className="check-grid">
            {analytics.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section products" id="products">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Products</p>
            <h2>Tools for traffic intelligence, safety, and reporting.</h2>
          </div>
          <a href="#contact">Request product details <ArrowRight size={18} /></a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <a href="#contact">
                  Enquire now <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section similar">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Similar Services</p>
            <h2>Additional offerings from Datacorp</h2>
          </div>
          <a href="#services">View services <ArrowRight size={18} /></a>
        </div>
        <div className="image-card-grid">
          {similarServices.map((service) => (
            <button
              className={activeOffering.title === service.title ? "image-card active" : "image-card"}
              type="button"
              key={service.title}
              onClick={() => setActiveOffering(service)}
            >
              <img src={service.image} alt={service.title} />
              <span>services</span>
              <h3>{service.title}</h3>
            </button>
          ))}
        </div>
        <article className="offering-detail" aria-live="polite">
          <img src={activeOffering.image} alt={`${activeOffering.title} service preview`} />
          <div>
            <p className="eyebrow">Selected service</p>
            <h3>{activeOffering.title}</h3>
            <p>{activeOffering.summary}</p>
            <div className="offering-video">
              <video src={assets.serviceVideo} controls muted playsInline poster={activeOffering.image} />
            </div>
            <a className="primary-action" href="#contact">
              Enquire about {activeOffering.title} <ArrowRight size={18} />
            </a>
          </div>
        </article>
      </section>

      <section className="section stories" id="success-stories">
        <p className="eyebrow">Success Stories</p>
        <h2>Driving Impact with Real-World Results.</h2>
        <div className="story-grid">
          {stories.map(([title, date, image]) => (
            <article className="story-card" key={title}>
              <img src={image} alt={title} />
              <div>
                <span>{date}</span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section updates" id="insights">
        <p className="eyebrow">Insights & Updates</p>
        <h2>Decoding Traffic, Technology & Transformation</h2>
        <div className="updates-grid">
          {insights.map(([title, image]) => (
            <article key={title}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section company" id="company">
        <div className="company-copy">
          <p className="eyebrow">Company</p>
          <h2>Built for transport data that has to stand up in the real world.</h2>
          <p>
            We bring global delivery experience, local field operations, and a
            platform-led reporting process together so clients can plan, monitor,
            and improve transportation networks with confidence.
          </p>
        </div>
        <div className="company-grid">
          <article>
            <Building2 size={24} />
            <h3>Infrastructure partners</h3>
            <p>Supporting consultants, public agencies, developers, and operators.</p>
          </article>
          <article>
            <TrafficCone size={24} />
            <h3>TrafficLenz workflows</h3>
            <p>Centralized access to multi-source traffic data and visual dashboards.</p>
          </article>
          <article>
            <UsersRound size={24} />
            <h3>Human quality control</h3>
            <p>Experienced analysts validate outputs before they reach decision makers.</p>
          </article>
        </div>
      </section>

      <section className="section careers" id="careers" style={{ "--career-image": `url(${assets.careerPartner})` }}>
        <div>
          <p className="eyebrow">Careers</p>
          <h2>Join teams building safer, smarter mobility systems.</h2>
          <p>
            Work across survey operations, data analytics, transport engineering,
            product, AI video processing, and client delivery.
          </p>
        </div>
        <div className="role-list">
          {roles.map((role) => (
            <button
              className={activeRole.title === role.title ? "active" : ""}
              type="button"
              key={role.title}
              onClick={() => selectRole(role)}
            >
              <BriefcaseBusiness size={19} />
              <span>{role.title}</span>
              <ArrowRight size={17} />
            </button>
          ))}
        </div>
      </section>

      <section className="section career-detail" id="career-detail">
        <div>
          <p className="eyebrow">Career Details</p>
          <h2>{activeRole.title}</h2>
          <p>{activeRole.description}</p>
          <a className="primary-action" href="#contact">
            Apply / Enquire for this role <ArrowRight size={18} />
          </a>
        </div>
        <div className="career-detail-list">
          {activeRole.responsibilities.map((item) => (
            <span key={item}>
              <CheckCircle2 size={18} /> {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section partner" id="partner">
        <div className="partner-card">
          <img className="partner-image" src={assets.partnerImage} alt="Traffic analytics partnership" />
          <Handshake size={30} />
          <h2>Partner with Datacorp</h2>
          <p>
            Extend traffic data collection, analytics, road safety, and smart city
            capabilities through a trusted delivery network.
          </p>
          <a className="primary-action" href="#contact">
            Become a partner <ArrowRight size={18} />
          </a>
        </div>
        <div className="partner-points">
          {partnerPoints.map(([label, image]) => (
            <span key={label} style={{ "--point-image": `url(${image})` }}>
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Tell us about your traffic study.</h2>
          <p>
            Share your location, survey type, timelines, and reporting needs. The team
            can help shape a collection and analysis plan that fits the project.
          </p>
          <div className="contact-lines">
            <span>
              <Mail size={18} /> projects@datacorp.tech
            </span>
            <span>
              <MapPinned size={18} /> Global traffic analytics delivery
            </span>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your full name" />
          </label>
          <label>
            Work email
            <input type="email" placeholder="name@company.com" />
          </label>
          <label>
            Company / organisation
            <input type="text" placeholder="Organisation name" />
          </label>
          <label>
            Project message
            <textarea rows="5" placeholder="Traffic count, queue study, ANPR, modelling..." />
          </label>
          <button type="button">
            Send message <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <section className="section map-section" id="location">
        <div>
          <p className="eyebrow">Location</p>
          <h2>VeloFiTech across India</h2>
          <p>
            Find VeloFiTech location references and directions through Google Maps across India.
          </p>
          <a className="map-link" href={socialLinks.location} target="_blank" rel="noreferrer">
            Google Maps <MapPinned size={18} />
          </a>
        </div>
        <iframe
          title="VeloFiTech India map"
          src="https://www.google.com/maps?q=VelofiTech%20India&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <footer>
        <div className="footer-cta">
          <h2>DataCorp's AI-driven traffic solutions are designed to create safer and smarter roads.</h2>
          <p>
            Join us as we pave the way for a better tomorrow with cutting-edge technology,
            saving lives and safeguarding our roads for generations to come.
          </p>
          <a href="#contact">
            Contact Us <ArrowRight size={20} />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-columns">
            <div>
              <h3>Company</h3>
              <a href="https://www.datacorp.tech/about/">About Us</a>
              <a href="https://www.datacorp.tech/about/history/">History</a>
              <a href="https://www.datacorp.tech/about/leadership/">Leadership</a>
              <a href="https://www.datacorp.tech/about/our-team/">Our Team</a>
              <a href="https://www.datacorp.tech/about/certifications/">Certifications</a>
            </div>
            <div>
              <h3>Resources</h3>
              <a href="https://www.datacorp.tech/careers/">Careers</a>
              <a href="https://www.datacorp.tech/case-studies/">Case Studies</a>
              <a href="https://www.datacorp.tech/testimonials/">Testimonials</a>
              <a href="https://www.datacorp.tech/news-events/">News & Events</a>
              <a href="https://www.datacorp.tech/support/">Support</a>
            </div>
            <div>
              <h3>Data Information</h3>
              <a href="https://www.datacorp.tech/privacy-policy/">Privacy Policy</a>
              <a href="https://www.datacorp.tech/cookie-policy/">Cookie Policy</a>
              <a href="https://www.datacorp.tech/information-security-policy/">Information Security Policy</a>
              <a href="https://www.datacorp.tech/data-quality-policy/">Data Quality Policy</a>
              <a href="https://www.datacorp.tech/terms-and-conditions/">Terms And Conditions</a>
            </div>
          </div>

          <div className="newsletter">
            <h3>Let's keep in touch</h3>
            <p>Sign up for our email newsletter and datacorp updates.</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="button">Sign up</button>
            </form>
            <div className="socials" aria-label="Social links">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={24} /></a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={24} /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href={socialLinks.location} target="_blank" rel="noreferrer" aria-label="Location"><MapPin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <span>Copyright © 2026 Datacorp Traffic Private Limited. All Rights Reserved.</span>
            <strong className="credit-line">Developed & Designed by Chandana</strong>
          </div>
          <div className="footer-logos">
            {compliance.map((image) => (
              <img key={image} src={image} alt="Datacorp compliance certification" />
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
