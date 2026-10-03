export type Language = 'pt' | 'en';
export type Section = 'about' | 'games' | 'software';
export const sections: Section[] = ['about', 'games', 'software'];
export function readSection(value: string | null): Section {
  return sections.includes(value as Section) ? value as Section : 'about';
}
