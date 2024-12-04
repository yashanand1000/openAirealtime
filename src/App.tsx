import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LanguageSelect from './pages/LanguageSelect';
import { ConsolePage } from './pages/ConsolePage';

function App() {
  const theme = 'light';
  const language = 'en';

  return (
    <Router>
      <div data-component="App">
        {/* <Routes>
          <Route path="/" element={<HomePage theme={theme} language={language} />} />
          <Route path="/language-select" element={<LanguageSelect />} />
        </Routes> */}
        <ConsolePage />
      </div>
    </Router>
  );
}

export default App;