import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { useLanguage } from '../LanguageContext';
import { useTypedText } from '../hooks';
import { runCommand } from '../terminal';
import type { Section } from '../types';

export function Terminal({ navigate }: { navigate: (section: Section) => void }) {
  const { language, t } = useLanguage();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const commandHistory = useRef<string[]>([]);
  const historyIndex = useRef(0);
  const typedOutput = useTypedText(output, 20, 3);
  useEffect(() => setOutput(''), [language]);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!input.trim()) return;
    commandHistory.current.push(input.trim());
    historyIndex.current = commandHistory.current.length;
    const result = runCommand(input, language);
    setOutput(result.output);
    if (result.section) navigate(result.section);
    setInput('');
  }
  function browseHistory(event: KeyboardEvent<HTMLInputElement>) {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowUp' ? -1 : 1;
    historyIndex.current = Math.max(0, Math.min(commandHistory.current.length, historyIndex.current + direction));
    setInput(commandHistory.current[historyIndex.current] ?? '');
  }
  return <section className="command-area" aria-label={t('Prompt de navegação')}>
    <p className="command-help">{t('Navegue pelas abas ou digite')} <code>{t('jogos')}</code>, <code>software</code>, <code>{t('sobre')}</code> {t('ou')} <code>{t('ajuda')}</code>.</p>
    <form className="command-form" id="command-form" onSubmit={submit}>
      <label className="prompt-label" htmlFor="command-input">mikael@portfolio:~$</label>
      <input id="command-input" name="command" autoComplete="off" spellCheck={false} placeholder={t('digite um comando')} aria-label={t('Comando de navegação')} value={input} onChange={event => setInput(event.target.value)} onKeyDown={browseHistory} />
      <button type="submit">Enter</button>
    </form>
    <p id="command-output" className="command-output" role="status" aria-live={typedOutput === output ? 'polite' : 'off'}>{typedOutput}</p>
  </section>;
}
