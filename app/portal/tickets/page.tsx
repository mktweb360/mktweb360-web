"use client";
import { useState } from "react";

type Ticket = {
  id: number;
  asunto: string;
  descripcion: string;
  estado: "Abierto" | "En proceso" | "Resuelto";
  fecha: string;
};

const TICKETS_MOCK: Ticket[] = [
  {
    id: 1,
    asunto: "¿Puedo añadir una nueva página de servicio?",
    descripcion: "Quiero añadir una página para un nuevo servicio que hemos lanzado. ¿Me podéis ayudar?",
    estado: "Resuelto",
    fecha: "12 may 2026",
  },
];

const ESTADO_STYLES: Record<string, string> = {
  Abierto: "bg-yellow-100 text-yellow-700",
  "En proceso": "bg-blue-100 text-blue-700",
  Resuelto: "bg-green-100 text-green-700",
};

export default function PortalTicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>(TICKETS_MOCK);
  const [modalOpen, setModalOpen] = useState(false);
  const [asunto, setAsunto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const abiertos = tickets.filter((t) => t.estado !== "Resuelto").length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!asunto || !descripcion) { setError("Completa asunto y descripción."); return; }
    setSending(true);
    setError("");
    await new Promise((r) => setTimeout(r, 800));
    const nuevo: Ticket = {
      id: Date.now(),
      asunto,
      descripcion,
      estado: "Abierto",
      fecha: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }),
    };
    setTickets((prev) => [nuevo, ...prev]);
    setSent(true);
    setSending(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setAsunto("");
    setDescripcion("");
    setError("");
    setSent(false);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-primary-600 mb-1">Tickets de soporte</h1>
          <p className="text-sm text-gray-500">
            {abiertos === 0 ? "No tienes tickets abiertos" : `${abiertos} ticket${abiertos > 1 ? "s" : ""} abierto${abiertos > 1 ? "s" : ""}`}
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
        >
          + Abrir nuevo ticket
        </button>
      </div>

      {/* Lista de tickets */}
      {tickets.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
          <div className="text-4xl mb-3">🎫</div>
          <p className="font-semibold text-gray-600 mb-1">No tienes tickets</p>
          <p className="text-sm text-gray-400">¿Tienes alguna duda o necesitas ayuda? Abre un ticket y te respondemos en menos de 24h.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                <p className="font-semibold text-gray-800">{ticket.asunto}</p>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${ESTADO_STYLES[ticket.estado]}`}>
                  {ticket.estado}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">{ticket.descripcion}</p>
              <p className="text-xs text-gray-400">Abierto: {ticket.fecha}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            {sent ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">✅</div>
                <h2 className="font-bold text-primary-600 mb-2">Ticket enviado</h2>
                <p className="text-sm text-gray-500 mb-6">Te responderemos en menos de 24 horas laborables.</p>
                <button onClick={closeModal} className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-700 transition-colors">
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-primary-600">Nuevo ticket</h2>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Asunto *</label>
                    <input
                      value={asunto}
                      onChange={(e) => setAsunto(e.target.value)}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Descripción *</label>
                    <textarea
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      placeholder="Describe tu consulta con el máximo detalle posible..."
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                    />
                  </div>
                  {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
                  <div className="flex gap-3">
                    <button type="button" onClick={closeModal} className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
                      Cancelar
                    </button>
                    <button type="submit" disabled={sending} className="flex-1 bg-accent-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50">
                      {sending ? "Enviando..." : "Enviar ticket"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
