import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "İletişim | Mustafa Cem",
};

export default function Contact() {
  return (
    <div className="py-28 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="İletişim"
          title="Hadi konuşalım"
          subtitle="Projeleriniz veya işbirliği fırsatları için benimle iletişime geçebilirsiniz."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
