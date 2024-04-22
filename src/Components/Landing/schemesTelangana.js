import React, { useState } from "react";
import "./Schemes.css"; // Import your CSS file for styling
import Navbar from "../Navbar/Navbar";

const Schemes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentScheme, setCurrentScheme] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleApplyClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  const handleCheckEligibility = (scheme) => {
    setCurrentScheme(scheme);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCurrentScheme(null);
    setAnswers({});
  };

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    // Check eligibility based on answers
    const schemeAnswers = currentScheme.questions.map((question) => answers[question]);
    const isEligible = schemeAnswers.every((answer, index) => answer === currentScheme.answers[index]);
    alert(isEligible ? "You are eligible!" : "You are not eligible!");
    handleClosePopup();
  };

  // Data for all schemes
  const schemes = [
    {
      name: "Double Bedroom Housing Scheme (2BHK Scheme)",
      description: "The government of Telangana formulated the double bedroom housing scheme in the month of October 2015 with a view to providing dignity to the poor by providing 100% subsidized housing. There is no beneficiary contribution under this scheme which is one of its kind. In rural areas, beneficiaries solely depend on seasonal conditions for their earnings, the 2BHK housing helped in protecting them from debt traps as was the case in the past.",
      questions: ["Are you aged 18 or above?", "Is your income above ₹50,000?", "Are you a male or female?", "Are you a Student, Farmer, Unemployed, or Self-employed?", "Do you belong to BC, ST, or SC category?"],
      answers: [1, 1, 1, 1, 1],
      link: "https://2bhk.telangana.gov.in/"
    },
    {
      name: "KANTI VELUGU",
      description: "The State Government has embarked on a Noble Project of achieving “avoidable blindness-free Telangana” status by conducting a Comprehensive and Universal Eye Screening for the entire population of the State under the title ‘Kanti Velugu’.",
      questions: ["Are you aged 25 or above?", "Is your income above ₹40,000?", "Are you a male or female?", "Are you a Student, Farmer, Unemployed, or Self-employed?", "Do you belong to BC, ST, or SC category?"],
      answers: [1, 1, 1, 1, 1],
      link: "https://www.myscheme.gov.in/schemes/kv"
    },
    {
      name: "Rs 5 Lakh Insurance Cover To Farmers",
      description: "All the farmers in Telangana, who are aged between 18 and 60 years, will get 5 lakh insurance coverage from 15 August 2018.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://www.myscheme.gov.in/schemes/farmer-insurance"
    },
    {
      name: "Chief Minister's Overseas Scholarship Scheme for Minorities",
      description: "The scheme “Chief Minister's Overseas Scholarship Scheme for Minorities” was launched by the Minorities Welfare Department, Government of Telangana in the year 2015-16 for students belonging to the Minority community to pursue Higher Studies in Post Graduate Courses in Foreign Universities.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://telanganaepass.cgg.gov.in/OverseasLinks.jsp"
    },
    {
      name: "Rythu Bima Scheme",
      description: "In order to ensure the economic and social security of the farmers, the Government of Telangana has conceptualized and implementing an innovative scheme named as Farmers Group Life Insurance Scheme (Rythu Bima) in addition to other initiatives in the agriculture sector.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://rythubandhu.telangana.gov.in/Default_LIC1.aspx"
    },
    {
      name: "Kalyana Lakshmi Pathakam",
      description: "The Government of Telangana envisions the overall development of the Scheduled Castes/Scheduled Tribes/Backward Classes/Economically Backward Classes (SC, ST, BC & EBC) and in particular, the unmarried Girls belonging to these communities who are the disadvantaged section of the society.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://telanganaepass.cgg.gov.in/KalyanaLakshmiLinks.jsp"
    },
    {
      name: "DALIT BANDHU",
      description: "The Dalit Bandhu Scheme is a unique initiative launched by the government of Telangana to promote the economic development of families belonging to the Scheduled Caste (SC) and Scheduled Caste (ST) community.",
      questions: ["Are you aged 21 or above?"],
      answers: [1],
      link: "https://dalitbandhu.telangana.gov.in/Account/Login"
    },
    {
      name: "GRAMA JYOTHI",
      description: "The Government of Telangana launched the “Grama Jyothi” Program as a logical continuation of Mana Ooru-Mana Pranalika.",
      questions: ["Are you aged 20 or above?"],
      answers: [1],
      link: "https://www.myscheme.gov.in/schemes/grama-jyothi"
    },
    {
      name: "Shaadi Mubarak Scheme",
      description: "In order to prevent child marriages and support the marriage expense of financially distressed families, on 02nd October 2014, Government of Telangana introduced a welfare scheme called “Shaadi Mubarak’’.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://tscmfc.in/shaadi-mubarak.php"
    },
    {
      name: "KCR Nutrition KIT",
      description: "Telangana Government launched yet another pioneering initiative ‘KCR Nutrition Kits’, which is aimed at reducing Anemia and improving hemoglobin levels in pregnant women.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://www.myscheme.gov.in/schemes/kcr-nutrition-kit"
    },
    {
      name: "Arogya Lakshmi",
      description: "Telangana government provides one nutritious meal every day to pregnant and lactating women and children below the age of six through Anganwadi centers.",
      questions: ["Are you aged 18 or above?"],
      answers: [1],
      link: "https://hyderabad.telangana.gov.in/scheme/arogya-lakshmi/"
    }
  ];
  

  return (
    <div className="schemes-container">
  <Navbar />
  <h2 style={{ textAlign: "center", fontSize: "28px", color: "#333", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>Below are the Schemes for Telangana State:</h2>
  <div className="scheme-cards">
    {schemes.map((scheme, index) => (
      <div key={index} className="scheme-card">
        <h3>{scheme.name}</h3>
        <p>{scheme.description}</p>
        <button className="apply-button" onClick={() => handleApplyClick(scheme.link)}>Apply</button>
        <button className="check-eligibility-button" onClick={() => handleCheckEligibility(scheme)}>Check Eligibility</button>
      </div>
    ))}
  </div>
  {showPopup && (
    <div className="popup">
      <div className="popup-content">
        <h2>{currentScheme.name} - Eligibility Check</h2>
        {currentScheme.questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question}</p>
            <div className="answer-options">
              <button onClick={() => handleAnswerChange(question, 0)}>No</button>
              <button onClick={() => handleAnswerChange(question, 1)}>Yes</button>
            </div>
          </div>
        ))}
        <div className="popup-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleClosePopup}>Cancel</button>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Schemes;
