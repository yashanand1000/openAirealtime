import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LanguageSelect from './pages/LanguageSelect';
import ConsolePage from './pages/ConsolePage';

function App() {
  // const theme = 'light';

  return (
    <Router>
      <div data-component="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/language-select" element={<LanguageSelect />} />
          <Route path="/console" element={<ConsolePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;