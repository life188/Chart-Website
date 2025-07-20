import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "22 Jun", income: 400, expense: -300 },
  { date: "24 Jun", income: 600, expense: -450 },
  { date: "26 Jun", income: 200, expense: -200 },
  { date: "28 Jun", income: 300, expense: -100 },
  { date: "30 Jun", income: 500, expense: -400 },
  { date: "02 Jul", income: 650, expense: -550 },
  { date: "04 Jul", income: 200, expense: -350 },
  { date: "06 Jul", income: 700, expense: -300 },
];

const TransactionsChart = ({ lang }) => {
  const t = {
    en: { title: "Transactions", button: "Area chart" },
    fr: { title: "Transactions", button: "Graphique de zone" },
  };

  const safeLang = t[lang] ? lang : "en";

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-full md:w-2/3 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">{t[safeLang].title}</h2>
        <button className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200">
          {t[safeLang].button}
        </button>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Area dataKey="income" stroke="#2563eb" fill="#bfdbfe" />
          <Area dataKey="expense" stroke="#dc2626" fill="#fecaca" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionsChart;
