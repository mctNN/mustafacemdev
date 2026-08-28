import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutProfile } from "@/components/sections/AboutProfile";
import { AboutTimeline } from "@/components/sections/AboutTimeline";

export const metadata = {
  title: "Hakkımda | Mustafa Cem",
};

export default function About() {
  return (
    <div className="py-28 md:py-32">
      <Container>
        <SectionHeading title="Hakkımda" />
        <AboutProfile />
        <div className="mt-12">
          <AboutTimeline />
        </div>
      </Container>
    </div>
  );
}
