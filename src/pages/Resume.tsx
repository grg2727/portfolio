import { Link } from "react-router-dom";
import { Download, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import shiptLogo from "@/assets/shipt-logo.png";

const resumeData = {
  name: "Alien Gurung",
  title: "Software Engineer (Mobile)",
  email: "gurungalien21@gmail.com",
  linkedin: "linkedin.com/in/aliengurung",
  github: "github.com/aliengurung",
  location: "United States",
  summary: "Software engineer at Shipt specializing in React Native, with 4+ years of experience building large-scale shopping and browsing experiences that help millions of users build better baskets.",
  experience: [
    {
      title: "Software Engineer",
      company: "Shipt",
      logo: shiptLogo,
      period: "Jan 2021 – Present",
      location: "Mobile / React Native",
      highlights: [
        "Ratings & Reviews: Implemented R&R surfaces, achieving 3.2% increase in add-to-cart rate on products with visible ratings",
        "Shopping Lists & Usuals: Led hackathon-to-production feature driving 5% add-to-cart lift and 1.2% order volume increase",
        "Global Search: Shipped universal search experience contributing to 2.2% increase in multi-store orders",
        "Experience Refresh: Built CMS-driven product shelf with configurable horizontal/vertical carousels",
        "Address Gate: Contributed to Target Circle 360 onboarding, reducing early-session drop-off by 6%",
        "Text to Cart (AI): Built AI-powered natural language shopping feature, won Best Use of AI at company hackathon",
        "Tech Migrations: JS→TS, class→functional components, Enzyme→RNTL, Redux→React Query→Osmosis"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Shipt",
      logo: shiptLogo,
      period: "Jun 2021 – Aug 2021",
      location: "Web Development",
      highlights: [
        "Built interview scheduling features in React + TypeScript with Material UI and GraphQL/Apollo Client",
        "Shipped interviewer availability, panel planning, and candidate tracking features to GCP"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University",
      period: "2017 – 2021"
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "Java", "C++"],
    frameworks: ["React Native", "React", "Expo", "React Query", "Redux", "Reanimated", "Jest", "Detox"],
    tools: ["A/B Testing", "Analytics", "Feature Flags", "GraphQL", "Apollo", "GCP"]
  }
};

const Resume = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-main">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 opacity-0 animate-fade-up">
            <h1 className="heading-1 text-foreground mb-4 md:mb-0">Resume</h1>
            <Button variant="hero" asChild>
              <a href="/resume_II.pdf" download>
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* Resume Card */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-10 shadow-card opacity-0 animate-fade-up stagger-1">
            {/* Resume Header */}
            <div className="border-b border-border pb-6 mb-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{resumeData.name}</h2>
              <p className="text-lg text-primary font-medium mt-1">{resumeData.title}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  {resumeData.email}
                </a>
                <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href={`https://${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {resumeData.location}
                </span>
              </div>
              <p className="mt-4 body-base">{resumeData.summary}</p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4 uppercase tracking-wider text-sm">Experience</h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={exp.logo} alt={exp.company} className="h-10 w-10 rounded-lg object-contain bg-secondary p-1.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                        <div>
                          <h4 className="font-display font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-primary text-sm font-medium">{exp.company} · {exp.location}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4 uppercase tracking-wider text-sm">Education</h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary text-sm font-medium">{edu.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-4 uppercase tracking-wider text-sm">Skills</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Languages</p>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.skills.languages.map((skill) => (
                      <span key={skill} className="badge-tech text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Frameworks</p>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.skills.frameworks.map((skill) => (
                      <span key={skill} className="badge-tech text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Tools & Practices</p>
                  <div className="flex flex-wrap gap-1.5">
                    {resumeData.skills.tools.map((skill) => (
                      <span key={skill} className="badge-tech text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center opacity-0 animate-fade-up stagger-2">
            <p className="text-muted-foreground mb-4">Want to see detailed case studies of my work?</p>
            <Button variant="outline" asChild>
              <Link to="/work">View my projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
