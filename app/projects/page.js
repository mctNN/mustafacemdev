import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";

export const metadata = {
  title: "Projelerim | Mustafa Cem",
};

export default function Projects() {
  return (
    <div className="py-28 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projelerim"
          title="Neler inşa ettim"
          subtitle="Frontend ve backend teknolojileriyle kurguladığım proje çalışmaları. Detaylar için bir karta tıklayabilirsin."
        />
        <ProjectShowcase />
      </Container>
    </div>
  );
}
