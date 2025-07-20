import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const dataEN = [
  { name: "Rent", value: 66 },
  { name: "Utilities", value: 19 },
  { name: "Clothing", value: 8 },
  { name: "Other", value: 6 },
];

const dataFR = [
  { name: "Loyer", value: 66 },
  { name: "Services publics", value: 19 },
  { name: "Vêtements", value: 8 },
  { name: "Autres", value: 6 },
];

const COLORS = ["#7c3aed", "#06b6d4", "#f43f5e", "#f97316"];

const CategoriesChart = ({ lang }) => {
  const data = lang === "fr" ? dataFR : dataEN;
  const t = {
    en: { title: "Categories", button: "Pie chart" },
    fr: { title: "Catégories", button: "Diagramme circulaire" },
  };

  const safeLang = t[lang] ? lang : "en";

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-1/3 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">{t[safeLang].title}</h2>
        <button className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200">
          {t[safeLang].button}
        </button>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={80}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoriesChart;
