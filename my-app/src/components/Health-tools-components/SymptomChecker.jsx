import React, { useState } from 'react';
import './SymptomChecker.css';
import { motion } from 'framer-motion';
import { useDarkMode } from '../DarkModeContext';
import { Search } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../Mood/Card';

const SymptomChecker = ({
  firstAidInfo = {},
  conditionDetails = {},
  onContinue,
}) => {
  const { darkMode: isDarkMode } = useDarkMode();

  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [severity, setSeverity] = useState('');
  const [duration, setDuration] = useState('');
  const [possibleConditions, setPossibleConditions] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(null);

  const bodyParts = [
    { id: "head", name: "Head & Face" },
    { id: "chest", name: "Chest & Heart" },
    { id: "abdomen", name: "Abdomen & Digestive" },
    { id: "limbs", name: "Arms & Legs" },
    { id: "skin", name: "Skin" },
    { id: "mental", name: "Mental & Neurological" },
    { id: "general", name: "General & Systemic" },
  ];
  
  const symptomsData = {
    head: [
      { id: "headache", name: "Headache" },
      { id: "dizziness", name: "Dizziness" },
      { id: "blurred_vision", name: "Blurred Vision" },
      { id: "ear_pain", name: "Ear Pain" },
      { id: "sinus_pain", name: "Sinus Pain" },
      { id: "sore_throat", name: "Sore Throat" },
    ],
    chest: [
      { id: "chest_pain", name: "Chest Pain" },
      { id: "shortness_of_breath", name: "Shortness of Breath" },
      { id: "palpitations", name: "Palpitations" },
      { id: "cough", name: "Cough" },
      { id: "wheezing", name: "Wheezing" },
    ],
    abdomen: [
      { id: "abdominal_pain", name: "Abdominal Pain" },
      { id: "nausea", name: "Nausea" },
      { id: "vomiting", name: "Vomiting" },
      { id: "diarrhea", name: "Diarrhea" },
      { id: "constipation", name: "Constipation" },
      { id: "bloating", name: "Bloating" },
    ],
    limbs: [
      { id: "joint_pain", name: "Joint Pain" },
      { id: "muscle_pain", name: "Muscle Pain" },
      { id: "swelling", name: "Swelling" },
      { id: "numbness", name: "Numbness or Tingling" },
      { id: "mobility_issues", name: "Difficulty Moving" },
    ],
    skin: [
      { id: "rash", name: "Rash" },
      { id: "itching", name: "Itching" },
      { id: "bruising", name: "Bruising" },
      { id: "discoloration", name: "Discoloration" },
      { id: "dryness", name: "Dryness" },
    ],
    mental: [
      { id: "fatigue", name: "Fatigue" },
      { id: "insomnia", name: "Insomnia" },
      { id: "anxiety", name: "Anxiety" },
      { id: "depression", name: "Depression" },
      { id: "confusion", name: "Confusion" },
      { id: "memory_loss", name: "Memory Loss" },
    ],
    general: [
      { id: "fever", name: "Fever" },
      { id: "chills", name: "Chills" },
      { id: "weight_loss", name: "Weight Loss" },
      { id: "weight_gain", name: "Weight Gain" },
      { id: "weakness", name: "General Weakness" },
      { id: "appetite_loss", name: "Loss of Appetite" },
    ],
  };

  // Filter symptoms based on selected body part or search query
  const filteredSymptoms = (() => {
    if (selectedBodyPart) {
      return symptomsData[selectedBodyPart] || [];
    }
  
    if (searchQuery) {
      // Check if the search query matches a body part key
      const matchedBodyPart = bodyParts.find(part =>
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      if (matchedBodyPart) {
        return symptomsData[matchedBodyPart.id] || [];
      }
  
      // Otherwise, search symptoms globally
      return Object.values(symptomsData)
        .flat()
        .filter(symptom =>
          symptom.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
  
    return [];
  })();
  



  const toggleSymptom = (symptomId) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId) ? prev.filter(s => s !== symptomId) : [...prev, symptomId]
    );
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // For demo: create dummy conditions based on symptoms
      const conditions = selectedSymptoms.map(s => `Condition for ${s}`);
      setPossibleConditions(conditions);
      setStep(3);
    } else {
      setStep(prev => prev + 1); // fallback
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleStartOver = () => {
    setStep(1);
    setSearchQuery('');
    setSelectedSymptoms([]);
    setSelectedBodyPart('');
    setSeverity('');
    setDuration('');
    setPossibleConditions([]);
    setSelectedCondition(null);
  };

  return (
    <div className={`symptom-checker ${isDarkMode ? 'dark' : ''}`}>
      <motion.div 
        className="symptom-checker-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="symptom-checker-container">
          <h1 className="symptom-checker-title">Symptom Checker</h1>
          <p className="symptom-checker-description">
            Check your symptoms to find possible causes and treatments.
            This tool is for informational purposes and should not replace 
            professional medical advice.
          </p>
        </div>

        <motion.div 
          className="symptom-checker-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="checker-container">
            {step === 1 && (
              <div className="step1-container">
                <h2>Step 1: Select Your Symptoms</h2>
                <p>Choose the symptoms you're experiencing either by searching or selecting a body area.</p>

                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search symptoms..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectedBodyPart(""); // clear body part if searching
                    }}
                    className="search-input"
                  />
                </div>

                <div className="bodypart-select">
                  <label htmlFor="bodyPartSelect">Or select area of the body:</label>
                  <select
                    id="bodyPartSelect"
                    value={selectedBodyPart}
                    onChange={(e) => {
                      setSelectedBodyPart(e.target.value);
                      setSearchQuery(""); // clear search if selecting body part
                    }}
                  >
                    <option value="">Select body area</option>
                    {bodyParts.map((part) => (
                      <option key={part.id} value={part.id}>
                        {part.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="symptom-list">
                  <label>Select all that apply:</label>
                  {filteredSymptoms.length === 0 && searchQuery && (
                    <p className="no-results">No symptoms found for "{searchQuery}"</p>
                  )}
                  <div className="symptoms-grid">
                    {filteredSymptoms.map((symptom) => (
                      <div key={symptom.id} className="symptom-item">
                        <input
                          type="checkbox"
                          id={symptom.id}
                          checked={selectedSymptoms.includes(symptom.id)}
                          onChange={() => toggleSymptom(symptom.id)}
                        />
                        <label htmlFor={symptom.id}>{symptom.name}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedSymptoms.length > 0 && (
                  <div className="selected-symptoms">
                    <label>Selected symptoms:</label>
                    <div className="selected-list">
                      {selectedSymptoms.map((id) => {
                        const symptom = Object.values(symptomsData)
                          .flat()
                          .find((s) => s.id === id);
                        return symptom ? (
                          <div key={id} className="selected-item">
                            {symptom.name}
                            <button
                              type="button"
                              className="remove-btn"
                              onClick={() => toggleSymptom(id)}
                            >
                              &times;
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                <div className="buttons">
                  <button type="button" onClick={handleStartOver} className="btn-clear">
                    Clear All
                  </button>

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={selectedSymptoms.length === 0}
                    className="btn-continue"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="checker-step">
                <h2 className="checker-title">Step 2: Symptom Details</h2>

                <div className="checker-section">
                  <label className="checker-label">How severe are your symptoms?</label>
                  <select value={severity} onChange={e => setSeverity(e.target.value)} className="checker-select">
                    <option value="">Select severity</option>
                    <option value="mild">Mild</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                    <option value="very-severe">Very Severe</option>
                  </select>
                </div>

                <div className="checker-section">
                  <label className="checker-label">How long have you had these symptoms?</label>
                  <select value={duration} onChange={e => setDuration(e.target.value)} className="checker-select">
                    <option value="">Select duration</option>
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                    <option value="week">About a week</option>
                    <option value="weeks">Weeks</option>
                    <option value="month">About a month</option>
                    <option value="months">Months</option>
                  </select>
                </div>

                {selectedSymptoms.some(s => ['chest_pain', 'shortness_of_breath', 'severe_bleeding'].includes(s)) && (
                  <div className="checker-alert">
                    <h4>First Aid Information</h4>
                    {selectedSymptoms.includes('chest_pain') && <p>{firstAidInfo.chest_pain}</p>}
                    {selectedSymptoms.includes('shortness_of_breath') && <p>{firstAidInfo.shortness_of_breath}</p>}
                    {selectedSymptoms.includes('severe_bleeding') && <p>{firstAidInfo.severe_bleeding}</p>}
                  </div>
                )}

                <div className="checker-actions">
                  <button onClick={handleBack} className="checker-button-outline">Back</button>
                  <button
                    onClick={handleContinue}
                    className="checker-button"
                    disabled={!severity || !duration}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            

            {/* Additional steps like 3 and 4 can be added similarly */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SymptomChecker;
