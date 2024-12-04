import { useState } from 'react';
import './LanguageSelect.scss';
import HomePage from './HomePage';  // 'HomePage' से 'homePage' में बदलें

function App() {
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('theme') || '');
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || '');

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = e.target.value;
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <div data-component="App">
      <div className="selectors-container">
        <div className="selector">
          <label htmlFor="theme">Select Theme:</label>
          <select 
            id="theme" 
            value={selectedTheme} 
            onChange={handleThemeChange}
          >
            <option value="" disabled>Choose Theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        {selectedTheme && (
          <div className="selector">
            <label htmlFor="language">Select Language:</label>
            <select 
              id="language" 
              value={selectedLanguage} 
              onChange={handleLanguageChange}
            >
              <option value="" disabled>Choose Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        )}
      </div>

      <HomePage theme={selectedTheme} language={selectedLanguage} />
    </div>
  );
}

export default App;