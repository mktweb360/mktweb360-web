"use client";
import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];

const DATA_CLICS = [
  { mes: "Ene", valor: 720 },
  { mes: "Feb", valor: 810 },
  { mes: "Mar", valor: 950 },
  { mes: "Abr", valor: 1020 },
  { mes: "May", valor: 1105 },
  { mes: "Jun", valor: 1247 },
];

const DATA_IMPRESIONES = [
  { mes: "Ene", valor: 16200 },
  { mes: "Feb", valor: 18500 },
  { mes: "Mar", valor: 20100 },
  { mes: "Abr", valor: 21800 },
  { mes: "May", valor: 23400 },
  { mes: "Jun", valor: 24830 },
];

const DATA_POSICION = [
  { mes: "Ene", valor: 18.2 },
  { mes: "Feb", valor: 17.1 },
  { mes: "Mar", valor: 16.4 },
  { mes: "Abr", valor: 15.8 },
  { mes: "May", valor: 14.9 },
  { mes: "Jun", valor: 14.3 },
];

const TABS = [
  { id: "seo", label: "SEO", locked: false },
  { id: "ads", label: "Google Ads", locked: true },
  { id: "rrss", label: "Redes Sociales", locked: true },
];

function MetricCard({ label, valor, delta }: { label: string; valor: string; delta: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-bold text-primary-600">{valor}</p>
      <p className="text-xs font-semibold text-green-600 mt-1">{delta} vs mes anterior</p>
    </div>
  );
}

function ChartCard({ title, data, color, unit }: {
  title: string;
  data: { mes: string; valor: number }[];
  color: string;
  unit?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-semibold text-primary-600 mb-4 text-sm">{title}</h3>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: 12 }}
            formatter={(v) => [`${v}${unit ?? ""}`, title]}
          />
          <Line type="monotone" dataKey="valor" stroke={color} strokeWidth={2.5} dot={{ r: 3, fill: color }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function PortalInformesPage() {
  const [activeTab, setActiveTab] = useState("seo");

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-primary-600 mb-1">Informes</h1>
        <p className="text-sm text-gray-500">Evolución de tus servicios — últimos 6 meses</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.locked && setActiveTab(tab.id)}
            disabled={tab.locked}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5
              ${tab.locked ? "border-transparent text-gray-300 cursor-not-allowed" : ""}
              ${!tab.locked && activeTab === tab.id ? "border-accent-500 text-accent-500" : ""}
              ${!tab.locked && activeTab !== tab.id ? "border-transparent text-gray-500 hover:text-primary-600" : ""}
            `}
          >
            {tab.label}
            {tab.locked && <span className="text-xs">🔒</span>}
          </button>
        ))}
      </div>

      {activeTab === "seo" && (
        <>
          {/* Métricas resumen */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard label="Clics (jun)" valor="1.247" delta="+18%" />
            <MetricCard label="Impresiones (jun)" valor="24.830" delta="+12%" />
            <MetricCard label="Posición media" valor="14,3" delta="-2,1 pos" />
            <MetricCard label="CTR medio" valor="5,02%" delta="+0,4%" />
          </div>

          {/* Gráficas */}
          <div className="grid md:grid-cols-2 gap-4">
            <ChartCard title="Clics orgánicos" data={DATA_CLICS} color="#f97316" />
            <ChartCard title="Impresiones" data={DATA_IMPRESIONES} color="#1e3a5f" />
          </div>
          <ChartCard title="Posición media (menor = mejor)" data={DATA_POSICION} color="#10b981" unit=" pos" />

          <p className="text-xs text-gray-400">
            Datos de Google Search Console · Actualización mensual · Período: enero – junio 2026
          </p>
        </>
      )}
    </div>
  );
}
