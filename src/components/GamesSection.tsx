import { useLanguage } from '../LanguageContext';
import type { Section } from '../types';
import { ProjectCard } from './ProjectCard';

export function GamesSection({ section }: { section: Section }) {
  const { t } = useLanguage();
  return (
<section className="panel" role="tabpanel" id="panel-games" aria-labelledby="tab-games" hidden={section !== "games"}>
<div className="section-header">
<h2>
{t("$ ls projetos/jogos")}
</h2>
<p>
{t("# projetos em equipe / minhas contribuições")}
</p>
</div>
<div className="games-grid">

<ProjectCard>
<img className="game-image" src="./mud-life.png" alt={t("Captura de Mangue Boy / Mud Life fornecida por Mikael")} />
<div className="game-body">
<div className="card-top">
<span className="badge">
{t("Unity / Trabalho em equipe")}
</span>
<span className="slot">
{"01 / mud-life"}
</span>
</div>
<h3>
{"Mud Life"}
</h3>
<p className="game-summary">
{t("Jogo de ação e aventura com foco em sobrevivência.")}
</p>
<div className="contribution">
<h4>
{t("Minha contribuição")}
</h4>
<ul>
<li>
{t("Mecânicas do personagem principal")}
</li>
<li>
{t("Inteligência artificial dos caranguejos")}
</li>
<li>
{t("Sistema de pontuação e interface (UI)")}
</li>
</ul>
</div>
<p className="credit">
{t("Projeto em equipe · Publicado por") + " "}
<a href="https://rafanasper.itch.io/mud-life" target="_blank" rel="noopener">
{"rafanasper"}
</a>
</p>
<a className="play" href="https://rafanasper.itch.io/mud-life" target="_blank" rel="noopener">
{t("Acessar jogo no itch.io")}
</a>
</div>
</ProjectCard>

<ProjectCard>
<img className="game-image" src="./split-soul.png" alt={t("Captura de Split Soul fornecida por Mikael")} />
<div className="game-body">
<div className="card-top">
<span className="badge jam">
{"Unity / Game jam"}
</span>
<span className="slot">
{"02 / split-soul"}
</span>
</div>
<h3>
{"Split Soul"}
</h3>
<p className="game-summary">
{t("Um labirinto, dois personagens e o desafio de reuni-los.")}
</p>
<div className="contribution">
<h4>
{t("Minha contribuição")}
</h4>
<ul>
<li>
{t("Desenvolvimento das mecânicas dos personagens")}
</li>
<li>
{t("Participação no desenvolvimento em game jam")}
</li>
</ul>
</div>
<p className="credit">
{t("Projeto em equipe · Publicado por") + " "}
<a href="https://rafanasper.itch.io/splitsoul" target="_blank" rel="noopener">
{"rafanasper"}
</a>
</p>
<a className="play" href="https://rafanasper.itch.io/splitsoul" target="_blank" rel="noopener">
{t("Jogar no itch.io")}
</a>
</div>
</ProjectCard>

</div>
<article className="tower">
<div>
<img className="tower-thumbnail" src="./tower-defense.png" alt={t("Tower Defense em desenvolvimento: ilha com terreno hexagonal e torres")} loading="lazy" />
<span className="badge">
{t("Em desenvolvimento / Projeto atual")}
</span>
<h3>
{"Tower Defense"}
</h3>
</div>
<div>
<p>
{t("Estou desenvolvendo um tower defense. Novos detalhes sobre o jogo e seu desenvolvimento serão adicionados aqui.")}
</p>
<p className="note">
{t("Sem versão pública disponível por enquanto.")}
</p>
</div>
</article>

<section className="igaming" aria-labelledby="igaming-title">
<div className="section-header">
<h2 id="igaming-title">
{t("$ cat experiencia/igaming")}
</h2>
<p>
{t("ATUAÇÃO PROFISSIONAL / EM EQUIPE")}
</p>
</div>
<div className="igaming-grid">
<div>
<h3>
{"OPA Games"}
</h3>
<p>
{t("Atuei como um dos programadores no desenvolvimento de todos os jogos do catálogo da OPA Games apresentado abaixo. Minha atuação conectou interface, serviços de backend e desempenho em WebGL.")}
</p>
<p style={{"marginTop": "14px"}}>
{t("Trabalhei com HTTP e WebSockets, otimização de código e memória, configuração de builds e packages reutilizáveis. Também apoiei o desenvolvimento técnico de profissionais juniores.")}
</p>
<p style={{"marginTop": "14px"}}>
{t("Em um jogo recente, ainda não publicado, reduzi os draw calls da interface reorganizando os Sprite Atlases da Unity por contexto, junto de outros ajustes de UI. Também trabalhei nas configurações de build e na otimização de imagens e áudio.")}
</p>
<a className="catalog-link" href="https://opagames.com/" target="_blank" rel="noopener">
{t("Conhecer os jogos da OPA Games")}
</a>
</div>
<div className="catalog">
<div className="catalog-caption">
{t("CATÁLOGO / PROJETOS EM QUE ATUEI")}
</div>
<span>
{"Lucky Trevor"}
</span>
<span>
{"Golden Dragon"}
</span>
<span>
{"Pyramids"}
</span>
<span>
{"Aviaturbo"}
</span>
<span>
{"El Luchador"}
</span>
<span>
{"Trevor Mines"}
</span>
<span>
{"Trevor TurboCrash"}
</span>
<span>
{"Golden Parrot"}
</span>
<span>
{"Bull Riders"}
</span>
<span>
{"Mines Football"}
</span>
<span>
{"Fortune Mines"}
</span>
</div>
</div>
</section>
</section>
  );
}
