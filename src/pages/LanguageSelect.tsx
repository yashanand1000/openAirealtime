import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LanguageSelect.scss"; // Import external CSS for better styling

const LanguageSelect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the theme from state
  const { title } = location.state || {};

  if (!title) {
    console.log("Theme is null");
  } else {
    console.log("Theme is:", title);
  }

  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const options = [
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
    { label: "Hindi", value: "Hindi" },
    { label: "Punjabi", value: "Punjabi" },
    { label: "Bhojpuri", value: "Bhojpuri" },
    { label: "Marathi", value: "Marathi" },
  ];

  // Handle selection and navigate to the new page
  const handleProceed = () => {
    if (!selectedLanguage) {
      alert("Please select a language first.");
      return;
    }
    navigate("/console", { state: { title, language: selectedLanguage } });
  };

  return (
    <div className="main-container">
      <div className="language-select">
        <h1>Select Your Language</h1>
        <p className={!title ? "no-theme" : ""}>
          {!title ? "No theme selected. Please select a language." : `Current theme: ${title}`}
        </p>
        <div className="select-container">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="" disabled>
              Select a Language
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleProceed} className="proceed-btn">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default LanguageSelect;
