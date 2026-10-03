import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useLanguage } from './LanguageContext';
import { useReducedMotion } from './hooks';
import { readSection, sections, type Section } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Terminal } from './components/Terminal';
import { AboutSection } from './components/AboutSection';
import { GamesSection } from './components/GamesSection';
import { SoftwareSection } from './components/SoftwareSection';

const labels = { about: 'sobre', games: 'jogos', software: 'software' };

export default function App() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [section, setSection] = useState<Section>(() => readSection(new URLSearchParams(location.search).get('section')));
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Partial<Record<Section, HTMLButtonElement | null>>>({});
  useEffect(() => {
    const url = new URL(location.href);
    url.searchParams.delete('variant');
    url.searchParams.set('section', section);
    history.replaceState(null, '', url);
  }, [section]);
  useEffect(() => {
    document.body.classList.toggle('motion-ready', !reduced);
    if (reduced) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    const items = document.querySelectorAll('.tower,.igaming,.software-state,.about-layout');
    items.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
    return () => observer.disconnect();
  }, [reduced, section]);
  function navigate(next: Section, smooth = false) {
    setSection(next);
    navRef.current?.scrollIntoView({ behavior: smooth && !reduced ? 'smooth' : 'auto', block: 'start' });
  }
  function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keyIndices: Record<string, number> = { ArrowRight: (index + 1) % 3, ArrowLeft: (index + 2) % 3, Home: 0, End: 2 };
    if (!Object.hasOwn(keyIndices, event.key)) return;
    event.preventDefault();
    const next = sections[keyIndices[event.key]];
    setSection(next);
    tabRefs.current[next]?.focus();
  }
  return <div className="page">
    <Header />
    <main className="console">
      <div className="hardware" aria-hidden="true"><span className="hardware-label">mikael@portfolio: <b>~/projetos</b></span><div className="vents">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div></div>
      <div className="screen">
        <Hero explore={() => navigate('games', true)} />
        <Terminal navigate={navigate} />
        <div className="nav" ref={navRef} role="tablist" aria-label={t('Seções do portfólio')}>
          {sections.map((name, index) => <button key={name} ref={element => { tabRefs.current[name] = element; }} id={`tab-${name}`} role="tab" aria-selected={section === name} aria-controls={`panel-${name}`} tabIndex={section === name ? 0 : -1} onClick={() => setSection(name)} onKeyDown={event => tabKey(event, index)}><span>./</span>{t(labels[name])}</button>)}
        </div>
        <GamesSection section={section} />
        <SoftwareSection section={section} />
        <AboutSection section={section} />
        <footer className="footer-screen"><span className="copyright">2026 © Mikael Cavalcanti</span><a href="https://github.com/Mikael-Cavalcanti" target="_blank" rel="noopener noreferrer">GITHUB</a></footer>
      </div>
    </main>
  </div>;
}
