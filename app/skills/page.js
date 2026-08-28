import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsBoard } from "@/components/sections/SkillsBoard";

export const metadata = {
  title: "Yeteneklerim | Mustafa Cem",
};

export default function Skills() {
  return (
    <div className="py-28 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Yeteneklerim"
          title="Araç kutum"
          subtitle="5+ yıllık deneyimim süresince farklı teknolojiler ve araçlarla çalıştım. Sürekli kendimi geliştirmeye ve yeni teknolojiler öğrenmeye devam ediyorum."
        />
        <SkillsBoard />
      </Container>
    </div>
  );
}
