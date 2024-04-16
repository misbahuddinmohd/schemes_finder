import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Schemes.css";
import Navbar from "../Navbar/Navbar";

const Schemes = () => {
  const location = useLocation();
  const age = location.state ? location.state.age : null;
  const gender = location.state ? location.state.gender : null;
  const occupation = location.state ? location.state.occupation : null;
  const caste = location.state ? location.state.caste : null;
  const income = location.state ? location.state.income : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = (link) => {
    window.open(link, "_blank");
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const schemes = [
    {
      name: "Double Bedroom Housing Scheme (2BHK Scheme)",
      description: "The government of Telangana formulated the double bedroom housing scheme in the month of October 2015 with a view to providing dignity to the poor by providing 100% subsidized housing. There is no beneficiary contribution under this scheme which is one of its kind. In rural areas, beneficiaries solely depend on seasonal conditions for their earnings, the 2BHK housing helped in protecting them from debt traps as was the case in the past.",
      minAge: "18", // Minimum age required
      minIncome: "50000", // Minimum income required
      gender: ["male", "female"], // Array of acceptable genders
      occupation: ["Student", "Farmer", "Unemployed", "Self-employed"], // Array of acceptable occupations
      caste: ["BC", "ST", "SC"], // Array of acceptable castes
      link: "https://2bhk.telangana.gov.in/"
    },
    {
      name: "KANTI VELUGU",
      description: "The State Government has embarked on a Noble Project of achieving “avoidable blindness-free Telangana” status by conducting a Comprehensive and Universal Eye Screening for the entire population of the State under the title ‘Kanti Velugu’.",
      minAge: "25", // Minimum age required
      minIncome: "40000", // Minimum income required
      gender: ["male", "female"], // Array of acceptable genders
      occupation: ["Student", "Farmer", "Unemployed", "Self-employed"], // No specific occupation required
      caste: ["BC","SC", "ST"], // No specific caste required
      link: "https://www.myscheme.gov.in/schemes/kv"
    },
    {
      name: "Rs 5 Lakh Insurance Cover To Farmers",
      description: "All the farmers in Telangana, who are aged between 18 and 60 years, will get 5 lakh insurance coverage from 15 August 2018.",
      minAge: "18", // Minimum age required
      minIncome: "30000", // Minimum income required
      gender: ["male", "female"], // No specific gender required
      occupation: ["Farmer"], // Only farmers eligible
      caste: ["BC", "SC", "ST"], // No specific caste required
      link: "https://www.myscheme.gov.in/schemes/farmer-insurance"
    },
    {
      name: "Chief Minister's Overseas Scholarship Scheme for Minorities",
      description: "The scheme “Chief Minister's Overseas Scholarship Scheme for Minorities” was launched by the Minorities Welfare Department, Government of Telangana in the year 2015-16 for students belonging to the Minority community to pursue Higher Studies in Post Graduate Courses in Foreign Universities.",
      minAge: "18", // Minimum age required
      minIncome: "30000", // Minimum income required
      gender: ["male", "female"], // No specific gender required
      occupation: ["Student"], // Only students eligible
      caste: ["BC", "ST", "SC"], // Array of acceptable castes
      link: "https://telanganaepass.cgg.gov.in/OverseasLinks.jsp"
    },
    {
      name: "Rythu Bima Scheme",
      description: "In order to ensure the economic and social security of the farmers, the Government of Telangana has conceptualized and implementing an innovative scheme named as Farmers Group Life Insurance Scheme (Rythu Bima) in addition to other initiatives in the agriculture sector.",
      minAge: "18", // Minimum age required
      minIncome: "25000", // Minimum income required
      gender: ["male", "female"], // No specific gender required
      occupation: ["Farmer"], // Only farmers eligible
      caste: ["BC", "SC", "ST"], // No specific caste required
      link: "https://rythubandhu.telangana.gov.in/Default_LIC1.aspx"
    },
    {
      name: "Kalyana Lakshmi Pathakam",
      description: "The Government of Telangana envisions the overall development of the Scheduled Castes/Scheduled Tribes/Backward Classes/Economically Backward Classes (SC, ST, BC & EBC) and in particular, the unmarried Girls belonging to these communities who are the disadvantaged section of the society.",
      minAge: "18", // Minimum age required
      minIncome: "20000", // Minimum income required
      gender: ["female"], // No specific gender required
      occupation: ["Farmer", "Unemployed", "Self-employed"], // No specific occupation required
      caste: ["BC", "SC", "ST"], // Array of acceptable castes
      link: "https://telanganaepass.cgg.gov.in/KalyanaLakshmiLinks.jsp"
    },
    {
      name: "DALIT BANDHU",
      description: "The Dalit Bandhu Scheme is a unique initiative launched by the government of Telangana to promote the economic development of families belonging to the Scheduled Caste (SC) and Scheduled Caste (ST) community.",
      minAge: "21", // Minimum age required
      minIncome: "35000", // Minimum income required
      gender: ["male", "female"], // No specific gender required
      occupation: ["Student", "Farmer", "Unemployed", "Self-employed"], // No specific occupation required
      caste: ["SC", "ST"], // Only SC, ST caste eligible
      link: "https://dalitbandhu.telangana.gov.in/Account/Login"
    },
    {
      name: "GRAMA JYOTHI",
      description: "The Government of Telangana launched the “Grama Jyothi” Program as a logical continuation of Mana Ooru-Mana Pranalika.",
      minAge: "20", // Minimum age required
      minIncome: "30000", // Minimum income required
      gender: ["male", "female"], // No specific gender required
      occupation: ["Student", "Farmer", "Employed", "Unemployed", "Self-employed"], // No specific occupation required
      caste: ["BC", "SC", "ST"], // No specific caste required
      link: "https://www.myscheme.gov.in/schemes/grama-jyothi"
    },
    {
      name: "Shaadi Mubarak Scheme",
      description: "In order to prevent child marriages and support the marriage expense of financially distressed families, on 02nd October 2014, Government of Telangana introduced a welfare scheme called “Shaadi Mubarak’’.",
      minAge: "18", // Minimum age required
      minIncome: "35000", // Minimum income required
      gender: ["female"], // No specific gender required
      occupation: ["Farmer", "Employed", "Self-employed"], // No specific occupation required
      caste: ["BC"], // No specific caste required
      link: "https://tscmfc.in/shaadi-mubarak.php"
    },
    {
      name: "KCR Nutrition KIT",
      description: "Telangana Government launched yet another pioneering initiative ‘KCR Nutrition Kits’, which is aimed at reducing Anemia and improving hemoglobin levels in pregnant women.",
      minAge: "18", // Minimum age required
      minIncome: "20000", // Minimum income required
      gender: ["female"], // No specific gender required
      occupation: ["Farmer", "Unemployed", "Self-employed"], // No specific occupation required
      caste: ["BC", "SC", "ST"], // No specific caste required
      link: "https://www.myscheme.gov.in/schemes/kcr-nutrition-kit"
    },
    {
      name: "Arogya Lakshmi",
      description: "Telangana government provides one nutritious meal every day to pregnant and lactating women and children below the age of six through Anganwadi centers.",
      minAge: "18", // Minimum age required
      minIncome: "20000", // Minimum income required
      gender: ["female"], // No specific gender required
      occupation: ["Farmer", "Unemployed", "Self-employed"], // No specific occupation required
      caste: ["BC", "SC", "ST"], // No specific caste required
      link: "https://hyderabad.telangana.gov.in/scheme/arogya-lakshmi/"
    }
  ];


  const filteredSchemes = schemes.filter((scheme) => {
    const meetsAgeRequirement = !scheme.minAge || parseInt(scheme.minAge) <= parseInt(age);
    // const meetsIncomeRequirement = !scheme.minIncome || parseInt(scheme.minIncome) <= parseInt(income);
    const meetsGenderRequirement = !scheme.gender || scheme.gender.includes(gender);
    const meetsOccupationRequirement = !scheme.occupation || scheme.occupation.includes(occupation);
    const meetsCasteRequirement = !scheme.caste || scheme.caste.includes(caste);
    return meetsAgeRequirement && meetsGenderRequirement && meetsOccupationRequirement && meetsCasteRequirement;
  });

  return (
    <div className="schemes-container">
      <Navbar />
      <br></br>
      <h2 style={headingStyle}>"You're Eligible for Below Schemes - Apply Now and Embrace Benefits!"</h2>
      <div className="scheme-cards">
        {filteredSchemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <button className="apply-button" onClick={() => handleApplyClick(scheme.link)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
