import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { PhotoSlider } from "@/components/editorial/photo-slider";
import { galleries } from "@/content/galleries";

export const metadata: Metadata = {
  title: "Work",
  description: "Robots, field research, and environmental sensing by Ray Sha.",
};
const projects = [
  {
    number: "01",
    title: "Kirigami environmental robot",
    copy: "Laser-cut PET becomes a flexible, low-cost body for carrying sensors into confined places that can be difficult or unsafe to inspect.",
    href: "/work/kirigami",
    gallery: "kirigami",
  },
  {
    number: "02",
    title: "Pesticide field research",
    copy: "Following drone-applied fungicides through air, crops, soil, and mulch to study distribution, dissipation, persistence, and possible exposure.",
    href: "/work/pesticide-dispersion",
    gallery: "fieldwork",
  },
  {
    number: "03",
    title: "A mobile air-pollution sensor array",
    copy: "The current project: a CoreS3, SEN66, BME688, and other sensors working together for timely, geolocated measurements while moving.",
    href: "/work/sensor-array",
    gallery: "sensors",
  },
] as const;
export default function WorkPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="Work" />
      <main id="main-content" tabIndex={-1}>
        <header className="index-hero">
          <p className="eyebrow">Work / making and measuring</p>
          <h1>Out of the notebook.</h1>
          <p>The builds, field days, and measurements behind the projects.</p>
        </header>
        <section className="work-collection" aria-label="Selected projects">
          {projects.map((project) => (
            <article className="work-collection-entry" key={project.number}>
              <PhotoSlider
                label={project.title}
                photos={galleries[project.gallery]}
                variant="window"
              />
              <div>
                <p className="kicker">{project.number} / Work</p>
                <h2>
                  <a href={project.href}>{project.title}</a>
                </h2>
                <p>{project.copy}</p>
                <a className="text-link" href={project.href}>
                  Open the project
                </a>
              </div>
            </article>
          ))}
        </section>
        <footer className="site-footer">
          <p>Ray Sha</p>
          <p>More activities and everyday photographs.</p>
          <a href="/index">Browse the index</a>
        </footer>
      </main>
    </div>
  );
}
