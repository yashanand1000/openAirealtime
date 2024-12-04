import React from "react";
import "./HomePage.scss"; // External CSS file or use styled-components/tailwind
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  theme: string;
  language: string;
}

const HomePage: React.FC<HomePageProps> = ({ theme, language }) => {
  const navigate = useNavigate();

  const tryTheseItems = [
    { title: "Practice a new language", helper: "HyperGlot" },
    { title: "Practice interviewing", helper: "Interviewer" },
    { title: "Brainstorm ideas", helper: "Brainstormer" },
    { title: "Plan a trip", helper: "Trip Planner" },
    { title: "Write a story", helper: "Creative Helper" },
    { title: "Play a game", helper: "Space Adventure Game" },
    { title: "Get book recommendations", helper: "Librarian Linda" },
    { title: "Help me make a decision", helper: "DecisionHelper" },
  ];

  const featuredItems = [
    { title: "AwkwardFamilyDinner", helper: "cai-official", views: "1.1m" },
    { title: "Detective Haywire", helper: "cai-official", views: "2.1m" },
    { title: "Game Master", helper: "cai-official", views: "44.0k" },
    { title: "Sergeant Whitaker", helper: "cai-official", views: "483.6k" },
  ];

  const categories = [
    "Assistants",
    "Anime",
    "Creativity & Writing",
    "Entertainment & Gaming",
    "History",
    "Humor",
    "Learning",
    "Lifestyle",
    "Parody",
    "RPG & Puzzles",
  ];

  const handleGoogleLogin = () => {
    window.open('http://localhost:8081/auth/google', '_self');
  };

  const handleBoxClick = () => {
    navigate('/language-select');
  };


  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">Zupee</div>
        <div className="header-right">
          <button className="btn" onClick={handleGoogleLogin}>Sign Up to Chat</button>
          <button className="btn secondary" onClick={handleGoogleLogin}>Login</button>
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* For You Section */}
        <section className="for-you">
          <h2>For You</h2>
          <div className="placeholder-grid" onClick={handleBoxClick} style={{ cursor: 'pointer' }}>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={crypto.randomUUID()} className="placeholder-box"></div>
              ))}
          </div>
        </section>

        {/* Try These Section */}
<section className="try-these">
  <h2>Try These</h2>
  <div className="scrollable-row">
    {tryTheseItems.map((item) => (
      <div key={item.title} className="try-item">
        <p>{item.title}</p>
        <span>with {item.helper}</span>
      </div>
    ))}
  </div>
</section>

<section className="featured">
  <h2>Featured</h2>
  <div className="grid-container">
    {featuredItems.map((item) => (
      <div key={item.title} className="featured-card">
        <p>{item.title}</p>
        <span>By {item.helper}</span>
        <span>{item.views}</span>
      </div>
    ))}
  </div>
</section>
<section className="categories">
  <div className="scrollable-row">
    {categories.map((category) => (
      <div key={category} className="category-tab">
        {category}
      </div>
    ))}
  </div>
</section>

        {/* Category Tabs */}
        <section className="categories">
          <div className="scrollable-row">
            {categories.map((category) => (
              <div key={category} className="category-tab">
                {category}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
