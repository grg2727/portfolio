import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Layout>
      <article className="section-spacing">
        <div className="container-main">
          {/* Back Link */}
          {/* <div className="mb-8 opacity-0 animate-fade-up">
            <Button variant="ghost" asChild className="-ml-4">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to all work
              </Link>
            </Button>
          </div> */}

          {/* Header */}
          <header className="max-w-3xl mb-12">
            <h1 className="heading-1 text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
              {project.title}
            </h1>
            <p className="body-large opacity-0 animate-fade-up stagger-2">
              {project.overview}
            </p>
          </header>

          {/* Content */}
          <div className="max-w-3xl space-y-12">
            {/* Problem */}
            <section className="opacity-0 animate-fade-up stagger-3">
              <h2 className="heading-3 text-foreground mb-4">The Problem</h2>
              <p className="body-base">{project.problem}</p>
            </section>

            {/* Responsibilities */}
            <section className="opacity-0 animate-fade-up stagger-4">
              <h2 className="heading-3 text-foreground mb-4">My Responsibilities</h2>
              <ul className="space-y-3">
                {project.responsibilities.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="body-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Details */}
            {/* <section className="opacity-0 animate-fade-up stagger-5">
              <h2 className="heading-3 text-foreground mb-4">Technical Details</h2>
              <ul className="space-y-3">
                {project.technicalDetails.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                    <span className="body-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section> */}

            {/* Experimentation */}
            {project.experimentation && (
              <section className="opacity-0 animate-fade-up">
                <h2 className="heading-3 text-foreground mb-4">Experimentation & Rollout</h2>
                <p className="body-base">{project.experimentation}</p>
              </section>
            )}

            {/* Impact */}
            <section className="bg-muted/50 rounded-xl p-6 md:p-8 opacity-0 animate-fade-up">
              <h2 className="heading-3 text-foreground mb-4">Impact</h2>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="body-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Learnings */}
            {/* <section className="opacity-0 animate-fade-up">
              <h2 className="heading-3 text-foreground mb-4">Learnings</h2>
              <p className="body-base">{project.learnings}</p>
            </section> */}

            {/* Next Project */}
            {/* <section className="pt-12 border-t border-border opacity-0 animate-fade-up">
              <p className="text-sm text-muted-foreground mb-2">Next project</p>
              <Link
                to={`/work/${nextProject.slug}`}
                className="group inline-flex items-center gap-2 heading-3 text-foreground hover:text-primary transition-colors"
              >
                {nextProject.title}
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </section> */}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
