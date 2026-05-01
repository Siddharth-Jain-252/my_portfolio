import { useIsMobile } from "../hooks/useIsMobile";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

export default function ProjectsSection() {
  const sm = useIsMobile();
  const md = useIsMobile(1024);

  // Responsive grid: 1 col → 2 cols → 3 cols
  const cols = sm ? "1fr" : md ? "1fr 1fr" : "repeat(3, 1fr)";

  return (
    <section id="projects" style={{ padding: sm ? "72px 1.2rem" : "110px 2rem" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <SectionHeading num="03" label="Projects" title="What I've Built" sm={sm} />

        <div style={{ display: "grid", gridTemplateColumns: cols, gap: sm ? 14 : 22 }}>
          {projectsData.map((project, i) => (
            <ProjectCard key={project.name} project={project} idx={i} sm={sm} />
          ))}
        </div>
      </div>
    </section>
  );
}
