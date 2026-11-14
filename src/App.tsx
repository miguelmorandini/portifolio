import { useEffect, useState } from 'react';
import { About } from './components/About';
import { ContactFooter } from './components/ContactFooter';
import { EducationAndCerts } from './components/EducationAndCerts';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Lang } from './data/portfolio';

export function App() {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="min-h-screen bg-[#050807] text-zinc-100">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <EducationAndCerts lang={lang} />
        <TechStack lang={lang} />
      </main>
      <ContactFooter lang={lang} />
    </div>
  );
}

export default App;
