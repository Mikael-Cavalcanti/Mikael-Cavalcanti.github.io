import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { runCommand } from './terminal';
import { translations } from './translations';

test('Portuguese and English commands navigate to the same sections', () => {
  for (const language of ['pt', 'en'] as const) {
    for (const command of ['jogos', 'games', './games', 'cd jogos', 'open games', 'GAMES']) assert.equal(runCommand(command, language).section, 'games');
    assert.equal(runCommand('sobre', language).section, 'about');
    assert.equal(runCommand('software', language).section, 'software');
  }
});
test('help, clear and unknown commands respect language', () => {
  assert.match(runCommand('ajuda', 'pt').output, /Comandos disponíveis/);
  assert.match(runCommand('help', 'en').output, /Available commands/);
  assert.equal(runCommand('limpar', 'pt').output, '');
  assert.equal(runCommand('clear', 'en').output, '');
  assert.match(runCommand('invalid', 'en').output, /Command not found/);
  assert.equal(runCommand('__proto__', 'en').section, undefined);
});
test('C++ profile identifiers and role have English translations', () => {
  assert.equal(translations.nome, 'name');
  assert.equal(translations.cargo, 'role');
  assert.equal(translations.motor, 'engine');
  assert.equal(translations.linguagem, 'language');
  assert.equal(translations['Engenheiro de Software'], 'Software Engineer');
});
