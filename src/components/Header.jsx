import React from "react";

const Header = ({ lang, setLang }) => {
  const t = {
    en: {
      title: "SpendSmart",
      overview: "Overview",
    },
    fr: {
      title: "DépenseIntelligente",
      overview: "Aperçu",
    },
  };

  const safeLang = t[lang] ? lang : "en";

  return (
    <div className="relative bg-[#3EB489] text-white shadow-md">
      <div className="p-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight">
          {t[safeLang].title}
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-1">
            <button
              onClick={() => setLang("en")}
              className="bg-white/30 px-2 py-1 rounded hover:bg-white/50"
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className="bg-white/30 px-2 py-1 rounded hover:bg-white/50"
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
