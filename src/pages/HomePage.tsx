import Hero from '../components/Hero';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SectionTransition, { AnimatedSection } from '../components/SectionTransition';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SectionTransition variant="wave" color="bg-primary-500" />
      <AnimatedSection delay={150} direction="left">
        <Education />
      </AnimatedSection>
      <SectionTransition variant="zigzag" color="bg-primary-500" />
      <AnimatedSection delay={200} direction="right">
        <Projects />
      </AnimatedSection>
      <SectionTransition variant="geometric" color="bg-primary-500" />
      <AnimatedSection delay={250} direction="center">
        <Skills />
      </AnimatedSection>
    </>
  );
};

export default HomePage;

