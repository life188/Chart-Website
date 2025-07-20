import React from "react";
import Header from "./Header";
import TransactionsChart from "./AreaChart";
import CategoriesChart from "./PieChart";

const Dashboard = ({ lang, setLang }) => {
  const t = {
    en: {
      greeting: "Welcome back",
      subtitle: "Welcome to SmartSpend where we help you save money.",
    },
    fr: {
      greeting: "Bon retour",
      subtitle:
        "Bienvenue à DépenseIntelligente, où nous vous aidons à économiser.",
    },
  };

  const safeLang = t[lang] ? lang : "en";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header lang={safeLang} setLang={setLang} />
      <div className="px-6 py-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          {t[safeLang].greeting}, <span className="text-[#3EB489]">SIR</span>
        </h1>
        <p className="text-gray-600 text-md mb-8">{t[safeLang].subtitle}</p>

        <div className="flex flex-col md:flex-row gap-6">
          <TransactionsChart lang={safeLang} />
          <CategoriesChart lang={safeLang} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
