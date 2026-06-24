"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Lead = {
  id: string;
  nombre: string;
  telefono: string;
  sector: string;
  situacion: string;
  catalogo: string;
  dominioActual: string;
  tieneFotos: string;
  opcionPago: string;
  notas: string;
  savedAt: string;
};

const PAGO_LABELS: Record<string, { label: string; cuotas: string }> = {
  unico: { label: "A — Pago único", cuotas: "490,00 € en el momento de la firma" },
  flex: { label: "B — Flex 50/50", cuotas: "245,00 € a la firma + 245,00 € al lanzar la tienda" },
};

export default function ContratoTiendaPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [cerrando, setCerrando] = useState(false);
  const [cerrado, setCerrado] = useState(false);
  const [error, setError] = useState("");
  const [errorCierre, setErrorCierre] = useState("");
  const precioFinal = 490;
  const [emailCliente, setEmailCliente] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [nifCliente, setNifCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const [nombreRepresentante, setNombreRepresentante] = useState("");
  const [dniRepresentante, setDniRepresentante] = useState("");
  const [ciudadCliente, setCiudadCliente] = useState("");
  const [titularCuenta, setTitularCuenta] = useState("");
  const [ibanCliente, setIbanCliente] = useState("");

  useEffect(() => {
    fetch(`/api/admin/leads/tienda-online/${id}`)
      .then((r) => r.json())
      .then((d) => { if (d.ok) setLead(d.lead); setLoading(false); });
  }, [id]);

  const today = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
  const pagoInfo = PAGO_LABELS[lead?.opcionPago ?? ""] ?? PAGO_LABELS.unico;

  const handleCerrar = async () => {
    if (!lead) return;
    if (!emailCliente || !nombreEmpresa || !nifCliente) {
      setErrorCierre("Completa email, empresa y NIF antes de registrar el cierre.");
      return;
    }
    setCerrando(true);
    setErrorCierre("");
    const res = await fetch("/api/admin/leads/tienda-online/cerrar-contrato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead_id: lead.id,
        nombre: lead.nombre,
        email: emailCliente,
        telefono: lead.telefono,
        empresa: nombreEmpresa,
        cif: nifCliente,
        direccion: direccionCliente,
        precio: precioFinal,
        opcion_pago: lead.opcionPago,
        notas: lead.notas || "",
      }),
    });
    const data = await res.json();
    if (data.ok && data.redirect_url) {
      setCerrado(true);
      window.open(data.redirect_url, "_blank");
    } else {
      setErrorCierre("Error al registrar el cierre en MktOS. Inténtalo de nuevo.");
    }
    setCerrando(false);
  };

  const handleSend = async () => {
    if (!emailCliente || !nombreEmpresa || !nifCliente) {
      setError("Email, nombre de empresa y NIF son obligatorios para enviar el contrato.");
      return;
    }
    setSending(true);
    setError("");
    const res = await fetch("/api/admin/leads/tienda-online/enviar-contrato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lead, emailCliente, nombreEmpresa, nifCliente, direccionCliente, nombreRepresentante, dniRepresentante, ciudadCliente, titularCuenta, ibanCliente, fecha: today, pagoInfo }),
    });
    const data = await res.json();
    if (data.ok) { setSent(true); } else { setError("Error al enviar el contrato. Inténtalo de nuevo."); }
    setSending(false);
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">Cargando...</p></div>;
  if (!lead) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-red-500">Lead no encontrado.</p></div>;

  if (sent) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-sm">
        <div className="text-4xl mb-4">📨</div>
        <h2 className="text-xl font-bold text-primary-600 mb-2">Contrato enviado</h2>
        <p className="text-gray-500 text-sm mb-6">El acuerdo ha sido enviado a <strong>{emailCliente}</strong>.</p>
        <button onClick={() => router.push("/area-privada/dashboard")} className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">Volver al panel</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-600 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Tienda Online 490€ — Contrato</p>
          <h1 className="text-base font-bold">{lead.nombre}</h1>
        </div>
        <button onClick={() => router.back()} className="text-xs text-primary-300 hover:text-white">← Volver</button>
      </header>
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">1</span>
            Datos del cliente para el contrato
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Email del cliente *", value: emailCliente, set: setEmailCliente, placeholder: "cliente@empresa.com" },
              { label: "Nombre de empresa *", value: nombreEmpresa, set: setNombreEmpresa, placeholder: "Empresa S.L." },
              { label: "NIF/CIF *", value: nifCliente, set: setNifCliente, placeholder: "B12345678" },
              { label: "Dirección", value: direccionCliente, set: setDireccionCliente, placeholder: "Calle, número, ciudad" },
              { label: "Nombre representante", value: nombreRepresentante, set: setNombreRepresentante, placeholder: "Nombre completo" },
              { label: "DNI representante", value: dniRepresentante, set: setDniRepresentante, placeholder: "12345678A" },
              { label: "Ciudad (para la firma)", value: ciudadCliente, set: setCiudadCliente, placeholder: "Madrid" },
              { label: "Titular cuenta SEPA", value: titularCuenta, set: setTitularCuenta, placeholder: "Nombre titular" },
              { label: "IBAN cliente", value: ibanCliente, set: setIbanCliente, placeholder: "ES00 0000 0000 0000 0000 0000" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-gray-600 mb-1">{f.label}</label>
                <input value={f.value} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" />
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">2</span>
            Vista previa del contrato
          </h2>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4 text-sm leading-relaxed border border-gray-100 rounded-xl p-6 bg-gray-50">
            <div className="text-center mb-6">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">ACUERDO DE PRESTACIÓN DE SERVICIOS DE DISEÑO DE TIENDA ONLINE</h3>
            </div>
            <p>De una parte, <strong>MKT WEB 360 S.L.U.</strong>, con CIF <strong>B87679304</strong>, domicilio social en <strong>El Viso de San Juan, Toledo</strong> (en adelante, <strong>"el Prestador"</strong>).</p>
            <p>De otra parte, <strong>{nombreEmpresa || "[NOMBRE EMPRESA]"}</strong>, con NIF/CIF <strong>{nifCliente || "[NIF/CIF]"}</strong>, domicilio en <strong>{direccionCliente || "[DIRECCIÓN]"}</strong>, representado por <strong>{nombreRepresentante || "[REPRESENTANTE]"}</strong> con DNI <strong>{dniRepresentante || "[DNI]"}</strong> (en adelante, <strong>"el Cliente"</strong>).</p>
            <hr className="border-gray-200" />
            <p><strong>OBJETO.</strong> El Prestador diseñará y desarrollará una tienda online profesional para el Cliente, conforme a las especificaciones acordadas, sin comisiones por venta ni licencias mensuales de plataforma.</p>
            <p><strong>PRECIO Y FORMA DE PAGO.</strong> La contraprestación económica asciende a <strong>CUATROCIENTOS NOVENTA EUROS (490,00 €)</strong>, más IVA vigente.</p>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-primary-600">{pagoInfo.label}</p>
              <p className="text-gray-600 text-xs mt-1">{pagoInfo.cuotas}</p>
              {ibanCliente && <p className="text-gray-600 text-xs mt-2">IBAN: <strong>{ibanCliente}</strong> — Titular: <strong>{titularCuenta || nombreRepresentante || nombreEmpresa}</strong></p>}
            </div>
            <p><strong>PROPIEDAD.</strong> Una vez abonado el importe total, la tienda online y todos sus elementos pasarán a ser propiedad exclusiva del Cliente.</p>
            <p><strong>CONFIDENCIALIDAD.</strong> Ambas partes se obligan a mantener en estricta confidencialidad toda la información a la que accedan durante la ejecución del acuerdo.</p>
            <p><strong>PROTECCIÓN DE DATOS.</strong> Los datos personales serán tratados conforme al RGPD y la LOPDGDD. Responsable: MKT WEB 360 S.L.U. Contacto: info@mktweb360.com.</p>
            <p><strong>LEGISLACIÓN Y JURISDICCIÓN.</strong> El presente acuerdo se rige por la legislación española. Cualquier controversia se somete a los Juzgados y Tribunales de Toledo.</p>
            <div className="mt-8 grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-6">En {ciudadCliente || "[ciudad]"}, a {today}</p>
                <div className="border-t border-gray-300 pt-2"><p className="text-xs font-bold text-gray-700">Por MKT WEB 360 S.L.U.</p></div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-6">&nbsp;</p>
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-xs font-bold text-gray-700">Por el Cliente</p>
                  <p className="text-xs text-gray-500">{nombreRepresentante || "[Representante]"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {error && <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">{error}</div>}
        <button onClick={handleSend} disabled={sending || !emailCliente || !nombreEmpresa || !nifCliente} className="w-full bg-accent-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-accent-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed sticky bottom-4 shadow-lg">
          {sending ? "Enviando contrato..." : "📨 Enviar contrato por email"}
        </button>
        {sent && (
          <>
            {errorCierre && <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">{errorCierre}</div>}
            <button
              onClick={handleCerrar}
              disabled={cerrando || cerrado}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
            >
              {cerrando ? "Registrando en MktOS..." : cerrado ? "✅ Contrato registrado en MktOS" : "✅ Contrato firmado — Registrar en MktOS"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
