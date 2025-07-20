import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [lang, setLang] = useState("en");

  return <Dashboard lang={lang} setLang={setLang} />;
};

export default App;
