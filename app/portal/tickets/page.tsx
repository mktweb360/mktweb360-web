"use client";
import { useCallback, useEffect, useState } from "react";

type Ticket = {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  created_at?: string;
};

type Reply = {
  id?: string;
  author?: string;
  sender?: string;
  role?: string;
  body?: string;
  message?: string;
  text?: string;
  created_at?: string;
};

const STATUS_STYLES: Record<string, string> = {
  open: "bg-blue-100 text-blue-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
  closed: "bg-gray-100 text-gray-600",
};
const STATUS_LABELS: Record<string, string> = {
  open: "Abierto",
  in_progress: "En proceso",
  resolved: "Resuelto",
  closed: "Cerrado",
};
const PRIORITY_STYLES: Record<string, string> = {
  low: "bg-gray-100 text-gray-600",
  normal: "bg-blue-100 text-blue-700",
  high: "bg-orange-100 text-orange-700",
  urgent: "bg-red-100 text-red-700",
};
const PRIORITY_LABELS: Record<string, string> = {
  low: "Baja",
  normal: "Normal",
  high: "Alta",
  urgent: "Urgente",
};

function statusStyle(s: string) {
  return STATUS_STYLES[s] ?? "bg-gray-100 text-gray-600";
}
function statusLabel(s: string) {
  return STATUS_LABELS[s] ?? s;
}
function priorityStyle(p: string) {
  return PRIORITY_STYLES[p] ?? "bg-gray-100 text-gray-600";
}
function priorityLabel(p: string) {
  return PRIORITY_LABELS[p] ?? p;
}
function formatFecha(value?: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}
function replyAuthor(r: Reply): string {
  return (r.author ?? r.sender ?? r.role ?? "client").toLowerCase();
}
function replyBody(r: Reply): string {
  return r.body ?? r.message ?? r.text ?? "";
}

export default function PortalTicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Modal de creación
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState("");

  // Detalle / hilo
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detailTicket, setDetailTicket] = useState<Ticket | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);
  const [replyError, setReplyError] = useState("");

  const loadTickets = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/portal/tickets");
      const json = await res.json().catch(() => ({}));
      if (json.ok) {
        setTickets(json.tickets ?? []);
      } else {
        setError(json.error || "No se pudieron cargar tus tickets.");
      }
    } catch {
      setError("Error de conexión.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  const openDetail = useCallback(async (id: string) => {
    setSelectedId(id);
    setLoadingDetail(true);
    setDetailError("");
    setReplyText("");
    setReplyError("");
    try {
      const res = await fetch(`/api/portal/tickets/${id}`);
      const json = await res.json().catch(() => ({}));
      if (json.ok) {
        setDetailTicket(json.ticket ?? null);
        setReplies(json.replies ?? []);
      } else {
        setDetailError(json.error || "No se pudo cargar el ticket.");
      }
    } catch {
      setDetailError("Error de conexión.");
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const closeDetail = () => {
    setSelectedId(null);
    setDetailTicket(null);
    setReplies([]);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      setCreateError("Completa asunto y descripción.");
      return;
    }
    setCreating(true);
    setCreateError("");
    try {
      const res = await fetch("/api/portal/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, priority }),
      });
      const json = await res.json().catch(() => ({}));
      if (json.ok) {
        setModalOpen(false);
        setTitle("");
        setDescription("");
        setPriority("normal");
        await loadTickets();
      } else {
        setCreateError(json.error || "No se pudo crear el ticket.");
      }
    } catch {
      setCreateError("Error de conexión.");
    } finally {
      setCreating(false);
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedId) return;
    setSendingReply(true);
    setReplyError("");
    try {
      const res = await fetch(`/api/portal/tickets/${selectedId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: replyText }),
      });
      const json = await res.json().catch(() => ({}));
      if (json.ok) {
        setReplyText("");
        await openDetail(selectedId);
      } else {
        setReplyError(json.error || "No se pudo enviar la respuesta.");
      }
    } catch {
      setReplyError("Error de conexión.");
    } finally {
      setSendingReply(false);
    }
  };

  // ---- Vista de detalle ----
  if (selectedId) {
    return (
      <div className="space-y-5 max-w-3xl">
        <button
          onClick={closeDetail}
          className="text-sm text-gray-500 hover:text-primary-600 transition-colors flex items-center gap-1.5"
        >
          ← Volver a tickets
        </button>

        {loadingDetail ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-8 w-2/3 bg-gray-200 rounded" />
            <div className="h-24 bg-gray-100 rounded-2xl" />
            <div className="h-16 bg-gray-100 rounded-2xl" />
          </div>
        ) : detailError ? (
          <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">
            {detailError}
          </div>
        ) : detailTicket ? (
          <>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                <h1 className="text-xl font-bold text-primary-600">{detailTicket.title}</h1>
                <div className="flex gap-2 shrink-0">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${priorityStyle(detailTicket.priority)}`}>
                    {priorityLabel(detailTicket.priority)}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusStyle(detailTicket.status)}`}>
                    {statusLabel(detailTicket.status)}
                  </span>
                </div>
              </div>
              {detailTicket.description && (
                <p className="text-sm text-gray-600">{detailTicket.description}</p>
              )}
              {detailTicket.created_at && (
                <p className="text-xs text-gray-400 mt-2">Abierto: {formatFecha(detailTicket.created_at)}</p>
              )}
            </div>

            {/* Hilo de respuestas */}
            <div className="space-y-3">
              {replies.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-4">Sin respuestas todavía.</p>
              ) : (
                replies.map((r, i) => {
                  const isAgency = replyAuthor(r) === "agency";
                  return (
                    <div key={r.id ?? i} className={`flex ${isAgency ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${isAgency ? "bg-primary-600 text-white" : "bg-white border border-gray-100 text-gray-700"}`}>
                        <p className={`text-xs font-semibold mb-1 ${isAgency ? "text-primary-200" : "text-gray-400"}`}>
                          {isAgency ? "Mkt Web 360" : "Tú"}
                        </p>
                        <p className="whitespace-pre-wrap">{replyBody(r)}</p>
                        {r.created_at && (
                          <p className={`text-[10px] mt-1 ${isAgency ? "text-primary-200" : "text-gray-400"}`}>
                            {formatFecha(r.created_at)}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Formulario de respuesta — solo si no está cerrado */}
            {detailTicket.status !== "closed" ? (
              <form onSubmit={handleReply} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm space-y-3">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Escribe tu respuesta…"
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                />
                {replyError && <p className="text-xs text-red-500">{replyError}</p>}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={sendingReply || !replyText.trim()}
                    className="bg-accent-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50"
                  >
                    {sendingReply ? "Enviando…" : "Responder"}
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-xs text-gray-400 text-center py-2">Este ticket está cerrado.</p>
            )}
          </>
        ) : null}
      </div>
    );
  }

  // ---- Vista de listado ----
  const abiertos = tickets.filter((t) => t.status !== "closed" && t.status !== "resolved").length;

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

      {/* Lista */}
      {loading ? (
        <div className="space-y-3 animate-pulse">
          {[0, 1].map((i) => <div key={i} className="h-24 bg-gray-100 rounded-2xl" />)}
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">
          {error}
        </div>
      ) : tickets.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
          <div className="text-4xl mb-3">🎫</div>
          <p className="font-semibold text-gray-600 mb-1">No tienes tickets</p>
          <p className="text-sm text-gray-400">¿Tienes alguna duda o necesitas ayuda? Abre un ticket y te respondemos en menos de 24h.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => openDetail(ticket.id)}
              className="w-full text-left bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:border-primary-200 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                <p className="font-semibold text-gray-800">{ticket.title}</p>
                <div className="flex gap-2 shrink-0">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${priorityStyle(ticket.priority)}`}>
                    {priorityLabel(ticket.priority)}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusStyle(ticket.status)}`}>
                    {statusLabel(ticket.status)}
                  </span>
                </div>
              </div>
              {ticket.description && <p className="text-sm text-gray-500 mb-2 line-clamp-2">{ticket.description}</p>}
              {ticket.created_at && <p className="text-xs text-gray-400">Abierto: {formatFecha(ticket.created_at)}</p>}
            </button>
          ))}
        </div>
      )}

      {/* Modal de creación */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-primary-600">Nuevo ticket</h2>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Asunto *</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Descripción *</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe tu consulta con el máximo detalle posible…"
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Prioridad</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                >
                  <option value="low">Baja</option>
                  <option value="normal">Normal</option>
                  <option value="high">Alta</option>
                  <option value="urgent">Urgente</option>
                </select>
              </div>
              {createError && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{createError}</p>}
              <div className="flex gap-3">
                <button type="button" onClick={() => setModalOpen(false)} className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
                  Cancelar
                </button>
                <button type="submit" disabled={creating} className="flex-1 bg-accent-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50">
                  {creating ? "Enviando…" : "Enviar ticket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
