import { ArrowRight, Download, Mail, Linkedin, Github, Briefcase, GraduationCap, Code, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import shiptLogo from "@/assets/shipt-logo.png";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiRedux,
  SiJest,
  SiGraphql,
  SiDocker,
  SiGooglecloud,
  SiExpo
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

// Skills data with icons
const skillsData = {
  languages: [
    { name: "JavaScript", icon: null },
    { name: "TypeScript", icon: null },
    { name: "Java", icon: null },
    { name: "C++", icon: null },
  ],
  frameworks: [
     { name: "React", icon: null },
    { name: "React Native", icon: null },
    { name: "Expo", icon: null },
    { name: "Redux", icon: null },
     { name: "React Query", icon: null },
      { name: "Osmosis", icon: null },
       { name: "Valtio", icon: null },
          { name: "Node.js", icon: null },
             { name: "Detox", icon: null },

    { name: "Jest", icon:null },
  ],
  tools:[]
};

const experiences = [
  {
    title: "Software Engineer",
    company: "Shipt",
    logo: shiptLogo,
    companyDescription: "Same-day delivery marketplace owned by Target",
    location: "Mobile / React Native",
    period: "Jan 2021 – Present",
    intro: "Part of Shipt's core mobile team focused on shopping and browsing, building features and experiments that improve basket-building for millions of members.",
    achievements: [
      "Ratings & Reviews: Implemented Ratings & Reviews across the Shipt marketplace, surfacing rating distributions and review content on product cards and product detail pages; post-launch data showed an estimated 3.2% increase in add-to-cart rate on products with visible ratings.",
      "Shopping Lists: Led the effort to turn a hackathon prototype into a production feature that lets members create and reuse shopping lists to speed up re-ordering. Closed gaps in design and backend flows, built a dedicated screen for list creation and list-based cart building, and worked with backend engineers to define the APIs needed for this experience.",
      "Usuals & Auto Add to Cart: Improved repeat ordering by enabling members to create a Usuals list from their Buy Again items and schedule it to auto–add to cart on a weekly, bi-weekly, or monthly cadence, with address selection to ensure the basket is created for the correct delivery location; this feature evolved from an experiment into a core experience after driving an estimated 5% increase in add-to-cart rate and 1.2% lift in order volume.",
      "Multi-Retailer Search: Part of the team that shipped a universal search experience where a single query returns products from all retailers available at a member’s address, making it easier to build multi-store baskets. Post-launch data showed a 2.2% increase in members placing orders from more than one store.",
      "Address Gate: Contributed to reworking the onboarding flow for Target Circle 360 members signing into Shipt via Target SSO by using ZIP codes from deep links to personalize the global home screen and let users browse immediately, reducing early-session drop-off by 6%.",
      "Multi-Retailer Category Landing Screen: Shipped a global category landing screen that centralizes top-level categories and curated collections, making it easier for members to browse instead of relying only on search; integrated navigation and CMS-driven category data, contributing to an estimated 0.3% increase in order volume from category flows",
      "Experience Refresh: Contributed to Shipt’s Experience Refresh homepage redesign, which aimed to reduce guest drop-off and improve engagement by introducing a new CMS-driven product shelf with configurable horizontal and vertical carousels that was later scaled as a full experiment.",
      "Text to Cart: Worked on the Text to Cart feature that lets members type what they need in natural language and add all suggested products to their cart with one click. The project won the Best Use of AI category.",
      "Migration & Tech Debt: Worked on multiple frontend migrations, including JavaScript to TypeScript, class components to functional components with hooks, Enzyme to React Native Testing Library, Redux to React Query to Osmosis for data fetching and state management, and Reanimated to Reanimated V2, which improved type safety, test coverage, and overall app performance and maintainability.",
      "Technologies used: TypeScript, JavaScript, React Native, React, React Query, Osmosis, Redux, Valtio, Detox, Node.js"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Shipt",
    logo: shiptLogo,
    companyDescription: "Same-day delivery marketplace owned by Target",
    location: "Web Development",
    period: "Jun 2020 – Aug 2020",
    intro: "Worked on Talent Captains, Shipt's internal recruiting web app for interview scheduling and candidate tracking.",
    achievements: [
      "Worked on Talent Captains, an in-house recruiting web application used to schedule interviews, track candidates, and coordinate interview panels.",
      "Shipped features such as interview scheduling, interviewer availability, panel planning, notes, and candidate status tracking, helping reduce manual coordination for recruiting and hiring teams.",
      "Technologies used: TypeScript, React.js, Material UI, Apollo client, Google Cloud Platform",
    ]
  }
];

const projects = [
    {
    slug: "ratings-and-reviews",
    title: "Ratings & Reviews",
    description: "Shipped Ratings & Reviews across the marketplace, surfacing star ratings, rating distribution,and review content, driving an estimated 3.2% lift in add-to-cart post-launch.",
    tech: ["React Native", "Infinite Scroll", "API Integration"],
  },
     {
    slug: "lists-and-usuals",
    title: "Shopping Lists",
    description: "Led the effort to turn a hackathon prototype into a production feature that lets members create and reuse shopping lists to speed up re-ordering. Closed gaps in design and backend flows, built a dedicated screen for list creation and list-based cart building, and worked with backend engineers to define the APIs needed for this experience..",
    tech: ["React Native", "Scheduling", "State Management"],
  },
   {
    slug: "usuals-and-auto-atc",
    title: "Usuals and Auto Add to Cart",
    description: "Improved repeat ordering by enabling members to create a Usuals list from their Buy Again items and schedule it to auto–add to cart on a weekly, bi-weekly, or monthly cadence, with address selection to ensure the basket is created for the correct delivery location; this feature evolved from an experiment into a core experience after driving an estimated 2.1% increase in add-to-cart rate and 1.3% lift in order volume.",
    tech: ["React Native", "Scheduling", "State Management"],
  },
    {
    slug: "global-search",
    title: "Multi-Retailer Search",
    description: "Part of the team that shipped a global search experience where a single query returns products from all retailers available at a member’s address, making it easier to build multi-store baskets. Post-launch data showed a 2.2% increase in members placing orders from more than one store.",
    tech: ["React Native", "Pagination", "Analytics"],
  },
   {
    slug: "address-gate",
    title: "Address gate",
    description: "Contributed to reworking the onboarding flow for Target Circle 360 members signig into Shipt via Target SSO by using ZIP codes from deep links to personalize the global home screen and let users browse immediately, reducing early-session drop-off by 6%.",
    tech: ["React Native", "Pagination", "Analytics"],
  },
   {
    slug: "global-category-landing-screen",
    title: "Multi-Retailer Category Landing Screen",
    description: "Shipped a multi-retailer category landing screen that centralizes top-level categories and curated collections, making it easier for members to browse instead of relying only on search; integrated navigation and CMS-driven category data, contributing to an estimated 0.3% increase in order volume from category flows.",
    tech: ["React Native", "Pagination", "Analytics"],
  },
  {
    slug: "experience-refresh-product-shelf-v2",
    title: "Experience Refresh Product Shelf",
    description: "Contributed to Shipt’s Experience Refresh homepage redesign to reduce guest drop-off and improve engagement by introducing a CMS-driven product shelf with horizontal scroll and configurable product card layouts, later scaled into a full experiment..",
    tech: ["React Native", "CMS", "TypeScript", "A/B Testing"],
  },
  {
    slug: "text-to-cart-ai",
    title: "Text to Cart (AI Hackathon)",
    description: "Worked on the Text to Cart feature that lets members type what they need in natural language and add all suggested products to their cart with one click. The project won the Best Use of AI category..",
    tech: ["AI/ML", "React Native", "Natural Language"],
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Troy University",
    period: "January 2018 – December 2021",
    location: "United States",
    coursework: "Data Structures & Algorithms, Object-Oriented Programming (Java), Software Engineering, Web development, Databases, Operating Systems, Computer Networking, Artificial Intelligence, Machine learning",
  }
];

const courses = [
  { name: "React Native Specialization", provider: "Coursera" },
  { name: "Advanced TypeScript Patterns", provider: "Frontend Masters" },
  { name: "System Design Fundamentals", provider: "Educative" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero / About Me Section */}
      <section id="about" className="section-spacing">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-foreground mb-6 opacity-0 animate-fade-up">
              Hello !  I'm Alien Gurung 👋
            </h1>
            <p className="body-large mb-6 opacity-0 animate-fade-up stagger-1">
            I am a Software Engineer at <span className="text-primary font-semibold">Shipt</span>  with 4+ years of experience building shopping and browsing experiences for millions of members. I work on core shopping flows in the Shipt member app, partnering with design, backend, and data teams to ship features and experiments that improve conversion, multi-store ordering, and overall member experience. I like taking vague product ideas, turning them into concrete technical plans, and iterating based on real data.</p>
            {/* <p className="body-base mb-8 opacity-0 animate-fade-up stagger-2">
              I work on core shopping flows in the Shipt member app, partnering with design, backend, and data teams to ship features and experiments that improve conversion, multi-store ordering, and overall member experience. I enjoy taking vague product ideas, turning them into concrete technical plans, and iterating based on real data.
            </p> */}
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up stagger-3">
              <a
                href="https://linkedin.com/in/aliengurung"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
               <a
                href="https://github.com/gurungalien2727"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:gurungalien21@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1dQ-yd_5gEYipO3_4GzIx4BHYFvHp_XUX/view?usp=sharing" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  See My Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-spacing bg-muted/30">
        <div className="container-main">
          <h2 className="heading-2 text-foreground mb-2 flex items-center gap-3 opacity-0 animate-fade-up">
            <Code className="h-6 w-6 text-primary" />
            Skills
          </h2>
          <p className="text-muted-foreground mb-10 opacity-0 animate-fade-up stagger-1">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-row-2 gap-8">
            {/* Languages */}
            <div className="opacity-0 animate-fade-up stagger-2">
              <h3 className="font-display font-semibold text-foreground mb-6">Languages</h3>
              <div className="grid grid-cols-4 gap-4">
                {skillsData.languages.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                    {skill.icon ? (
                      <skill.icon className="h-6 w-6 text-primary" />
                    ) : (
                      <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="opacity-0 animate-fade-up stagger-3">
              <h3 className="font-display font-semibold text-foreground mb-6">Frameworks & Libraries</h3>
              <div className="grid grid-cols-4 gap-4">
                {skillsData.frameworks.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                   {skill.icon ? (
                      <skill.icon className="h-6 w-6 text-primary" />
                    ) : (
                      <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            {/* <div className="opacity-0 animate-fade-up stagger-4">
              <h3 className="font-display font-semibold text-foreground mb-6">Tools & Other</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.tools.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                    {skill.icon ? (
                      <skill.icon className="h-6 w-6 text-primary" />
                    ) : (
                      <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section-spacing">
        <div className="container-main">
          <h2 className="heading-2 text-foreground mb-2 flex items-center gap-3 opacity-0 animate-fade-up">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h2>
          <p className="text-muted-foreground mb-10 opacity-0 animate-fade-up stagger-1">
            4+ years building mobile experiences at scale
          </p>

          <div className="space-y-10 max-w-3xl">
            {experiences.map((exp, index) => (
              <div key={index} className={`opacity-0 animate-fade-up stagger-${index + 2}`}>
                <div className="flex gap-4">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="h-14 w-14 rounded-xl object-contain bg-secondary p-2 flex-shrink-0" 
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="heading-3 text-foreground">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.companyDescription}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                        <p className="font-medium">{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <p className="body-base mb-4">{exp.intro}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing bg-muted/30">
        <div className="container-main">
          <h2 className="heading-2 text-foreground mb-2 flex items-center gap-3 opacity-0 animate-fade-up">
            <Code className="h-6 w-6 text-primary" />
            Projects
          </h2>
          <p className="text-muted-foreground mb-10 opacity-0 animate-fade-up stagger-1">
            Featured work from Shipt's React Native app
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
               to={`/work/${project.slug}`}
                className={`group p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-up stagger-${index + 2}`}
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge-tech text-xs">
                      {tech}
                    </span>
                  ))}
                </div> */}
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium  transition-opacity">
                  See Details
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Courses Section */}
      <section id="education" className="section-spacing">
        <div className="container-main">
            {/* Education */}
            <div>
              <h2 className="heading-2 text-foreground mb-2 flex items-center gap-3 opacity-0 animate-fade-up">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h2>
              <p className="text-muted-foreground mb-8 opacity-0 animate-fade-up stagger-1">
                Academic background
              </p>

              {education.map((edu, index) => (
                <div key={index} className="opacity-0 animate-fade-up stagger-2 p-6 rounded-xl bg-muted/50 border border-border">
                
                  <p className="text-primary font-medium text-lg mb-1">{edu.school}</p>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{edu.period} · {edu.location}</p>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</p>
                    <p className="text-sm text-muted-foreground">{edu.coursework}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Courses & Certifications
            <div>
              <h2 className="heading-2 text-foreground mb-2 flex items-center gap-3 opacity-0 animate-fade-up">
                <Award className="h-6 w-6 text-primary" />
                Courses & Certifications
              </h2>
              <p className="text-muted-foreground mb-8 opacity-0 animate-fade-up stagger-1">
                Continuous learning
              </p>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div 
                    key={course.name} 
                    className={`opacity-0 animate-fade-up stagger-${index + 2} p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-colors`}
                  >
                    <h3 className="font-medium text-foreground">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </div>
                ))}
              </div>
            </div> */}
  
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-muted/30">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-4 opacity-0 animate-fade-up">
              Contact Me
            </h2>
            <p className="body-large mb-8 opacity-0 animate-fade-up stagger-1">
             Want to discuss an interesting opportunity or just want to say hi? My Inbox is open for all.
            </p>

            <div className="flex flex-col items-center gap-6 opacity-0 animate-fade-up stagger-2">
              <a
                href="mailto:gurungalien21@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                gurungalien21@gmail.com
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/aliengurung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/gurungalien2727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              <Button variant="hero" size="lg" asChild className="mt-4">
                <a href="https://drive.google.com/file/d/1dQ-yd_5gEYipO3_4GzIx4BHYFvHp_XUX/view?usp=sharing" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  See My Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
