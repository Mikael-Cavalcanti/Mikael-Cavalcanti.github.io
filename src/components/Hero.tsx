import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { useReducedMotion, useTypedText } from '../hooks';

export function Hero({ explore }: { explore: () => void }) {
  const { t, language } = useLanguage();
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [bootStep, setBootStep] = useState(0);
  const roles = ['Unity Developer', 'Gameplay Programmer', 'Engenheiro de Software'];
  const role = useTypedText(t(roles[roleIndex]), 55, 1, 1000);
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => { if (!document.hidden) setRoleIndex(index => (index + 1) % 3); }, 5500);
    return () => clearInterval(timer);
  }, [reduced]);
  useEffect(() => { setRoleIndex(0); }, [language]);
  useEffect(() => {
    if (reduced) return;
    const timers = [180, 500, 560, 1350].map((delay, index) => setTimeout(() => setBootStep(index + 1), delay));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);
  const fields = [['nome', 'Mikael'], ['cargo', t('Engenheiro de Software')], ['motor', 'Unity'], ['linguagem', 'C#'], ['campus', 'CIn-UFPE']];
  return <>
    <div className="screen-top"><strong>{t('$ cat perfil.txt')}</strong></div>
    <div className="boot-log" id="boot-log" aria-label={t('Inicialização do portfólio')}>
      <div style={{ visibility: reduced || bootStep >= 1 ? 'visible' : 'hidden' }}><b>[ OK ]</b> {t('Carregando perfil de Mikael...')}</div>
      <div style={{ visibility: reduced || bootStep >= 3 ? 'visible' : 'hidden' }}><b>[ OK ]</b> {t('Unity / C# / WebGL disponíveis.')}</div>
    </div>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{t('# UNITY DEVELOPER / ENGENHEIRO DE SOFTWARE')}</p>
        <h1 className="pixel">Mikael <span>Cavalcanti</span></h1>
        <p className="role-line"><span className="marker">&gt;</span><span id="animated-role">{role}</span><span className="typing-cursor" aria-hidden="true" /></p>
        <p className="intro">{t('Engenheiro de Software e desenvolvedor Unity. Desenvolvo gameplay, física e IA para NPCs, integro serviços de backend e otimizo builds e desempenho de jogos WebGL.')}</p>
        <div className="hero-actions"><a className="hero-primary" href="#panel-games" onClick={event => { event.preventDefault(); explore(); }}>{t('Explorar projetos')}</a><a href="https://www.linkedin.com/in/mikael-cavalcant1" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      </div>
      <aside className="profile-info" aria-label={t('Perfil técnico')}>
        <div className="code-title"><span aria-hidden="true">▪ ▪ ▪</span><span>mikael.hpp</span></div>
        <div className="code-body">
          <div><span><span className="key">#include</span> <span className="value">&lt;string&gt;</span></span></div>
          <div><span><span className="key">using</span> std::string;</span></div>
          <div><span><span className="key">struct</span>{' Mikael {'}</span></div>
          {fields.map(([name, value]) => <div key={name}><span>{'  '}<span className="key">string</span>{' '}{t(name)}{' = '}<span className="value">{`"${value}"`}</span>;</span></div>)}
          <div><span>{'};'}</span></div>
        </div>
        <div className="boot-line"><span>[ok]</span><span id="boot-text" style={{ color: 'var(--mint)' }}>{t(reduced || bootStep >= 4 ? 'Perfil carregado. Pronto para criar.' : bootStep >= 2 ? 'Compilando ideias...' : 'Carregando perfil...')}</span></div>
      </aside>
    </section>
  </>;
}
