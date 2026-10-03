import { useLanguage } from '../LanguageContext';
import type { Section } from '../types';
import { ProjectCard } from './ProjectCard';

export function SoftwareSection({ section }: { section: Section }) {
  const { t } = useLanguage();
  return (
<section className="panel" role="tabpanel" id="panel-software" aria-labelledby="tab-software" hidden={section !== "software"}>
<div className="section-header">
<h2>
{t("$ ls projetos/software")}
</h2>
<p>
{t("BACKEND / AUTOMAÇÃO / FERRAMENTAS")}
</p>
</div>
<div className="games-grid" style={{"marginTop": "24px"}}>

<ProjectCard>
<img className="game-image software-logo" src="https://empregosrecife.com.br/wp-content/uploads/2024/11/Empregos-Recife-transparent.png.webp" alt={t("Logo do Empregos Recife")} loading="lazy" />
<div className="game-body">
<div className="card-top">
<span className="badge">
{t("Backend / Em desenvolvimento")}
</span>
<span className="slot">
{"01 / empregos-recife"}
</span>
</div>
<h3>
{"Empregos Recife"}
</h3>
<p className="game-summary">
{t("Estou desenvolvendo o backend da nova versão do Empregos Recife, que hoje funciona em WordPress. O projeto está sendo refeito como uma aplicação, em colaboração com outro programador responsável pelo frontend.")}
</p>
<div className="contribution">
<h4>
{t("Minha contribuição")}
</h4>
<p className="game-summary">
{t("Desenvolvimento do backend da nova aplicação, em parceria com o responsável pelo frontend.")}
</p>
</div>
<p className="credit">
{t("Nova versão em desenvolvimento · O link abaixo leva ao site atual.")}
</p>
<a className="play" href="https://empregosrecife.com.br/" target="_blank" rel="noopener">
{t("Conhecer o site atual")}
</a>
</div>
</ProjectCard>

<ProjectCard>
<div className="game-body">
<div className="card-top">
<span className="badge">
{t("Unity / Automação / Em desenvolvimento")}
</span>
<span className="slot">
{"02 / buildmaker"}
</span>
</div>
<h3>
{"BuildMaker"}
</h3>
<p className="game-summary">
{t("Estou desenvolvendo uma ferramenta para automatizar builds de projetos Unity por linha de comando e integração contínua no GitHub.")}
</p>
<div className="contribution">
<h4>
{t("Objetivo do projeto")}
</h4>
<p className="game-summary">
{t("Conectar a CLI da Unity ao fluxo de CI do GitHub para automatizar a geração de builds.")}
</p>
</div>
<p className="credit">
{t("Projeto em andamento · Repositório no GitHub.")}
</p>
<a className="play" href="https://github.com/Mika-Games-Studio/BuildMaker" target="_blank" rel="noopener">
{t("Ver BuildMaker no GitHub")}
</a>
</div>
</ProjectCard>

<ProjectCard>
<div className="game-body">
<div className="card-top">
<span className="badge">
{t("Agentes de IA / Jira / Automação")}
</span>
<span className="slot">
{"03 / ai-jira"}
</span>
</div>
<h3>
{"ai-jira"}
</h3>
<p className="game-summary">
{t("Criei um conjunto de skills para integrar o Jira a agentes de IA, como Codex e Claude Code. A ferramenta conecta cards, branches e pull requests ao fluxo de desenvolvimento.")}
</p>
<div className="contribution">
<h4>
{t("Minha contribuição")}
</h4>
<p className="game-summary">
{t("Desenvolvimento das skills e automações para criar cards a partir das mudanças no código e acompanhar seu status conforme o andamento dos pull requests.")}
</p>
</div>
<p className="credit">
{t("Ferramenta de autoria própria · Integração entre Jira, GitHub e agentes de IA.")}
</p>
<a className="play" href="https://github.com/Mika-Games-Studio/ai-jira" target="_blank" rel="noopener">
{t("Ver ai-jira no GitHub")}
</a>
</div>
</ProjectCard>

<ProjectCard>
<div className="game-body">
<div className="card-top">
<span className="badge">
{"Unity / UI / Package"}
</span>
<span className="slot">
{"04 / custom-button"}
</span>
</div>
<h3>
{"Custom Button"}
</h3>
<p className="game-summary">
{t("Participei do desenvolvimento de um package da NoTask Studios que amplia o botão padrão da Unity com recursos de personalização visual e interação.")}
</p>
<div className="contribution">
<h4>
{t("Minha contribuição")}
</h4>
<p className="game-summary">
{t("Trabalhei no desenvolvimento do botão customizado, com funções para alterar as cores dos elementos filhos conforme o estado de interação e inverter as cores do texto em relação ao fundo.")}
</p>
</div>
<div className="contribution">
<h4>
{t("Recursos do package")}
</h4>
<ul>
<li>
{t("Transições de cor para o botão, elementos filhos e textos TextMesh Pro")}
</li>
<li>
{t("Troca de sprites conforme o estado de interação")}
</li>
<li>
{t("Animações configuráveis com presets reutilizáveis")}
</li>
</ul>
</div>
<p className="credit">
{t("Package da NoTask Studios · Desenvolvimento colaborativo.")}
</p>
<a className="play" href="https://github.com/NoTaskStudios/com.notask.custom-button" target="_blank" rel="noopener">
{t("Ver Custom Button no GitHub")}
</a>
</div>
</ProjectCard>

</div>
</section>
  );
}
