import { useLanguage } from '../LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  return <header className="outside-header">
    <a className="signature initials" href="#" aria-label="Mikael Cavalcanti">MCS<span>.</span></a>
    <div className="header-tools">
      <nav className="language-switch" aria-label="Idioma / Language">
        <button type="button" data-language="pt" aria-pressed={language === 'pt'} lang="pt-BR" onClick={() => setLanguage('pt')}>PT</button>
        <span aria-hidden="true">/</span>
        <button type="button" data-language="en" aria-pressed={language === 'en'} lang="en" onClick={() => setLanguage('en')}>EN</button>
      </nav>
      <a className="profile-photo-link" href="https://github.com/Mikael-Cavalcanti" target="_blank" rel="noopener noreferrer" aria-label={t('GitHub de Mikael Cavalcanti')}>
        <img className="profile-photo" src="./mikael-photo.jpg" alt={t('Foto de Mikael Cavalcanti')} width="88" height="104" />
      </a>
    </div>
  </header>;
}
