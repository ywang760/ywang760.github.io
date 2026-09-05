import Hero from "@/components/Hero";
import Section from "@/components/Section";
import News from "@/components/News";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="news" index="01" title="News">
        <News />
      </Section>
      <Section id="publications" index="02" title="Publications">
        <Publications />
      </Section>
    </>
  );
}
