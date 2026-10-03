import { useLanguage } from '../LanguageContext';
import type { Section } from '../types';
import { ProjectCard } from './ProjectCard';

export function AboutSection({ section }: { section: Section }) {
  const { t } = useLanguage();
  return (
<section className="panel" role="tabpanel" id="panel-about" aria-labelledby="tab-about" hidden={section !== "about"}>
<div className="section-header">
<h2>
{t("$ cat sobre.md")}
</h2>
<p>
{"MIKAEL CAVALCANTI"}
</p>
</div>
<div className="about-layout">
<h3>
{t("Engenharia na base.")}
<br />
{t("Interação na prática.")}
</h3>
<div>
<p>
{t("Sou desenvolvedor Unity, com experiência profissional em jogos desde 2021, e curso Engenharia da Computação no Centro de Informática da UFPE. Trabalho com gameplay, sistemas de física, IA para NPCs, interfaces e integração com backend.")}
</p>
<p>
{t("Na minha trajetória, o desafio é fazer a experiência funcionar bem: implementar comportamentos, conectar sistemas e adaptar código, memória e assets às limitações da plataforma. Isso inclui jogos WebGL em dispositivos com poucos recursos.")}
</p>
<p>
{t("Atuei na OPA Games, na Mangrove e na GDS TEC, e sou cofundador da NoTask Studios. Colaboro com equipes de arte, valido assets e desenvolvo ferramentas reutilizáveis. Aqui, cada projeto destaca minha contribuição dentro do trabalho da equipe.")}
</p>
<p>
{t("Busco oportunidades remotas como Unity Developer, Gameplay Programmer ou Unity Engineer.")}
</p>
<div className="about-fact">
<small>
{t("FORMAÇÃO")}
</small>
<b>
{t("Engenharia da Computação · CIn-UFPE")}
</b>
</div>
<div className="about-fact">
<small>
{t("DESENVOLVIMENTO")}
</small>
<b>
{t("Unity · C# · Gameplay · Física · IA de NPCs · UI")}
</b>
</div>
<div className="about-fact">
<small>
{t("PROJETO ATUAL")}
</small>
<b>
{t("Tower defense em desenvolvimento")}
</b>
</div>
<div className="about-fact">
<small>
{t("CONTATO PROFISSIONAL")}
</small>
<a href="mailto:mikaelcavalcanti@outlook.com">
{"mikaelcavalcanti@outlook.com"}
</a>
<br />
<a className="catalog-link" href="https://www.linkedin.com/in/mikael-cavalcant1" target="_blank" rel="noopener">
{"LinkedIn / Mikael Cavalcanti"}
</a>
</div>
</div>
</div>

<div className="software-state">
<div>
<p className="mono">
{t("ENGENHARIA APLICADA")}
</p>
<h3>
{t("Sistemas que fazem acontecer.")}
</h3>
<p>
{t("Além dos jogos, desenvolvo backend e ferramentas para automatizar o trabalho de equipes de software. Meus projetos conectam aplicações, processos de build e agentes de IA ao fluxo de desenvolvimento.")}
</p>
</div>
<aside>
<p className="mono">
{t("BASE TÉCNICA")}
</p>
<p>
{t("C# e orientação a objetos, HTTP, WebSockets, Git e Jira. Experiência com integração de serviços, componentes reutilizáveis e automação de fluxos de desenvolvimento.")}
</p>
</aside>
</div>

<section className="igaming" aria-labelledby="skills-heading">
<div className="section-header">
<h2 id="skills-heading">
{t("$ cat competencias.md")}
</h2>
<p>
{t("COMPETÊNCIAS PRÁTICAS / EXPERIÊNCIA PROFISSIONAL")}
</p>
</div>
<div className="games-grid">

<ProjectCard>
<div className="game-body">
<span className="badge">
{"Performance / Unity / WebGL"}
</span>
<h3>
{t("Otimização de builds & UI")}
</h3>
<p className="game-summary">
{t("Trabalho na otimização de jogos para navegadores, ajustando configurações de build, imagens, áudio e interfaces para reduzir o custo de execução.")}
</p>
<div className="contribution">
<h4>
{t("Na prática")}
</h4>
<ul>
<li>
{t("Ajustes nas configurações de build")}
</li>
<li>
{t("Otimização de imagens e sons")}
</li>
<li>
{t("Ajustes de UI para reduzir draw calls")}
</li>
<li>
{t("Organização de Sprite Atlases da Unity por contexto")}
</li>
<li>
{t("Otimização de código, memória e assets para WebGL")}
</li>
</ul>
</div>
<div className="contribution">
<h4>
{t("Um resultado na OPA Games")}
</h4>
<p className="game-summary">
{t("Em um jogo recente, ainda não publicado, reduzi a quantidade de draw calls de uma interface com alto custo de renderização. Reorganizei os atlas por contexto na Unity e apliquei outras técnicas de otimização de UI.")}
</p>
</div>
</div>
</ProjectCard>

<ProjectCard>
<div className="game-body">
<span className="badge">
{t("Gameplay / Sistemas / Ferramentas")}
</span>
<h3>
{t("Desenvolvimento & integração")}
</h3>
<p className="game-summary">
{t("Implemento mecânicas de gameplay, sistemas de física, IA de NPCs e interfaces. Também desenvolvo integrações e ferramentas para apoiar o trabalho da equipe.")}
</p>
<div className="contribution">
<h4>
{t("Na prática")}
</h4>
<ul>
<li>
{t("Mecânicas de personagens, física e IA de NPCs")}
</li>
<li>
{t("Desenvolvimento de interfaces em Unity")}
</li>
<li>
{t("Integração com backend por HTTP e WebSockets")}
</li>
<li>
{t("Packages reutilizáveis e automação de builds")}
</li>
<li>
{t("Validação técnica de assets e colaboração com arte")}
</li>
<li>
{t("Apoio técnico a desenvolvedores juniores")}
</li>
</ul>
</div>
</div>
</ProjectCard>

</div>
</section>

<section className="igaming" aria-labelledby="technologies-heading">
<div className="section-header">
<h2 id="technologies-heading">
{t("$ ls tecnologias")}
</h2>
<p>
{t("TRABALHO / UNIVERSIDADE / ESTUDOS")}
</p>
</div>
<div className="igaming-grid">
<div>
<h3>
{t("Tecnologias que já explorei")}
</h3>
<p>
{t("Linguagens e ferramentas com as quais tive contato no mercado de trabalho, na universidade e nos meus estudos. Esta lista registra minha familiaridade com elas, sem atribuir o mesmo nível de experiência a todas.")}
</p>
<p style={{"marginTop": "14px"}}>
{t("Tive contato inicial com Assembly na universidade. Go é um estudo em andamento: tive contato inicial com a linguagem e continuo aprendendo.")}
</p>
</div>
<div className="catalog">
<div className="catalog-caption">
{t("LINGUAGENS")}
</div>
<span>
{"C#"}
</span>
<span>
{"C++"}
</span>
<span>
{"C"}
</span>
<span>
{"Haskell"}
</span>
<span>
{t("Assembly · contato acadêmico inicial")}
</span>
<span>
{t("Go · contato inicial / em estudo")}
</span>
<div className="catalog-caption" style={{"marginTop": "15px"}}>
{t("FERRAMENTAS E PLATAFORMAS")}
</div>
<span>
{"Unity"}
</span>
<span>
{"WebGL"}
</span>
<span>
{"Git"}
</span>
<span>
{"GitHub"}
</span>
<span>
{"Jira"}
</span>
</div>
</div>
</section>

</section>
  );
}
