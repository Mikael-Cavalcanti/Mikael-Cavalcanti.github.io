import type { Language, Section } from './types';

export type CommandResult = { section?: Section; output: string };
const routes: Record<string, Section> = { jogos: 'games', games: 'games', software: 'software', sobre: 'about', perfil: 'about', about: 'about' };

export function runCommand(raw: string, language: Language): CommandResult {
  const input = raw.trim();
  const command = input.toLowerCase().replace(/^\.\//, '').replace(/^(cd|open)\s+/, '');
  if (!input || ['limpar', 'clear', 'cls'].includes(command)) return { output: '' };
  if (Object.hasOwn(routes, command)) return { section: routes[command], output: `$ ${input}\n${language === 'en' ? 'Opening' : 'Abrindo'} /${command}` };
  if (['ajuda', 'help', 'ls'].includes(command)) return { output: `$ ${input}` + (language === 'en'
    ? '\nAvailable commands:\n  games      → games and iGaming projects\n  software   → tools, integration and engineering\n  about      → background and contact\n  clear      → clear this output'
    : '\nComandos disponíveis:\n  jogos      → projetos de jogos e iGaming\n  software   → ferramentas, integração e engenharia\n  sobre      → trajetória e contato\n  limpar     → limpar esta saída') };
  return { output: `$ ${input}\n` + (language === 'en' ? 'Command not found. Type help to see the options.' : 'Comando não encontrado. Digite ajuda para ver as opções.') };
}
