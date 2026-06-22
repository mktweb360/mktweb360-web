"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Lead = {
  id: string;
  nombre: string;
  telefono: string;
  dominio: string;
  sector: string;
  canal: string;
  estado: string;
  historialSeo: string;
  objetivos: string[];
  opcionPago: string;
  notas: string;
  savedAt: string;
  opportunity_id?: string;
};

const PAGO_LABELS: Record<string, { label: string; descripcion: string; cuotas: string }> = {
  unico: {
    label: "A — Pago único",
    descripcion: "Importe total a la firma",
    cuotas: "600,00 € en el momento de la firma",
  },
  flex: {
    label: "B — Flex 50/50",
    descripcion: "Dos cuotas iguales",
    cuotas: "300,00 € a la firma + 300,00 € el mes siguiente",
  },
  cuotas: {
    label: "C — Cuotas mensuales",
    descripcion: "Seis cuotas mensuales",
    cuotas: "6 × 100,00 € desde la fecha de firma",
  },
};

export default function ContratoPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [cerrando, setCerrando] = useState(false);
  const [cerrado, setCerrado] = useState(false);
  const [precioAcordado, setPrecioAcordado] = useState("600");
  const [error, setError] = useState("");

  // Client data fields
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
    fetch(`/api/admin/leads/seo-6x3/${id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) setLead(d.lead);
        setLoading(false);
      });
  }, [id]);

  const handleCerrar = async () => {
    if (!lead) return;
    if (!emailCliente || !nombreEmpresa || !nifCliente) {
      setError("Completa email, empresa y NIF antes de cerrar el contrato.");
      return;
    }
    setCerrando(true);
    setError("");
    const res = await fetch("/api/admin/leads/seo-6x3/cerrar-contrato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        opportunity_id: lead.opportunity_id || "",
        nombre: lead.nombre,
        email: emailCliente,
        telefono: lead.telefono,
        empresa: nombreEmpresa,
        cif: nifCliente,
        direccion: direccionCliente,
        precio: Number(precioAcordado),
        forma_pago: lead.opcionPago === "flex" ? "flex" : lead.opcionPago === "cuotas" ? "installments" : "single",
        cuotas: lead.opcionPago === "cuotas" ? 6 : undefined,
        notas: lead.notas || "",
      }),
    });
    const data = await res.json();
    if (data.ok && data.redirect_url) {
      setCerrado(true);
      window.open(data.redirect_url, "_blank");
    } else {
      setError("Error al registrar el cierre en MktOS. Inténtalo de nuevo.");
    }
    setCerrando(false);
  };

  const today = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const pagoInfo = PAGO_LABELS[lead?.opcionPago ?? ""] ?? PAGO_LABELS.unico;

  const handleSend = async () => {
    if (!emailCliente || !nombreEmpresa || !nifCliente) {
      setError("Email, nombre de empresa y NIF son obligatorios para enviar el contrato.");
      return;
    }
    setSending(true);
    setError("");
    const res = await fetch("/api/admin/leads/seo-6x3/enviar-contrato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead,
        emailCliente,
        nombreEmpresa,
        nifCliente,
        direccionCliente,
        nombreRepresentante,
        dniRepresentante,
        ciudadCliente,
        titularCuenta,
        ibanCliente,
        fecha: today,
        pagoInfo,
      }),
    });
    const data = await res.json();
    if (data.ok) {
      setSent(true);
    } else {
      setError("Error al enviar el contrato. Inténtalo de nuevo.");
    }
    setSending(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-500">Cargando datos del lead...</p>
    </div>
  );

  if (!lead) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-red-500">Lead no encontrado.</p>
    </div>
  );

  if (sent) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-sm">
        <div className="text-4xl mb-4">📨</div>
        <h2 className="text-xl font-bold text-primary-600 mb-2">Contrato enviado</h2>
        <p className="text-gray-500 text-sm mb-6">El acuerdo de colaboración ha sido enviado a <strong>{emailCliente}</strong>.</p>
        <button onClick={() => router.push("/area-privada/dashboard")} className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
          Volver al panel
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-600 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">SEO 6x3 — Contrato</p>
          <h1 className="text-base font-bold">{lead.nombre} · {lead.dominio}</h1>
        </div>
        <button onClick={() => router.back()} className="text-xs text-primary-300 hover:text-white">← Volver</button>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">

        {/* Datos del cliente — campos a completar */}
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
                <input
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Vista previa del contrato */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">2</span>
            Vista previa del contrato
          </h2>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-4 text-sm leading-relaxed border border-gray-100 rounded-xl p-6 bg-gray-50">
            <div className="text-center mb-6">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">ACUERDO DE PRESTACIÓN DE SERVICIOS DE POSICIONAMIENTO WEB</h3>
            </div>

            <p>De una parte, <strong>MKT WEB 360 S.L.U.</strong>, con CIF <strong>B87679304</strong>, domicilio social en <strong>El Viso de San Juan, Toledo</strong>, inscrita en el Registro Mercantil de Toledo (en adelante, <strong>"el Prestador"</strong>).</p>

            <p>De otra parte, <strong>{nombreEmpresa || "[NOMBRE EMPRESA]"}</strong>, con NIF/CIF <strong>{nifCliente || "[NIF/CIF]"}</strong>, domicilio en <strong>{direccionCliente || "[DIRECCIÓN]"}</strong>, representado por <strong>{nombreRepresentante || "[REPRESENTANTE]"}</strong> con DNI <strong>{dniRepresentante || "[DNI]"}</strong> (en adelante, <strong>"el Cliente"</strong>).</p>

            <hr className="border-gray-200" />

            <p><strong>OBJETO.</strong> El Prestador prestará al Cliente un servicio de posicionamiento web (SEO) para el dominio <strong>{lead.dominio}</strong>, con una duración de <strong>seis (6) meses</strong> desde la fecha de firma, conforme al plan de trabajo detallado en el presente acuerdo.</p>

            <p><strong>DURACIÓN.</strong> El acuerdo tendrá una duración de seis (6) meses desde la fecha de su firma. Dado que el trabajo de posicionamiento web tiene naturaleza acumulativa y los resultados se consolidan de forma progresiva, ambas partes asumen el compromiso de mantener la colaboración durante el periodo íntegro acordado.</p>

            <p><strong>PRECIO Y FORMA DE PAGO.</strong> La contraprestación económica por la totalidad del servicio asciende a <strong>SEISCIENTOS EUROS (600,00 €)</strong>, más IVA vigente. El pago se realizará mediante domiciliación bancaria SEPA, según la opción elegida:</p>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-primary-600">{pagoInfo.label}</p>
              <p className="text-gray-600 text-xs mt-1">{pagoInfo.cuotas}</p>
              {ibanCliente && <p className="text-gray-600 text-xs mt-2">IBAN: <strong>{ibanCliente}</strong> — Titular: <strong>{titularCuenta || nombreRepresentante || nombreEmpresa}</strong></p>}
            </div>

            <p><strong>COMPROMISOS DE PRESTACIÓN.</strong> En caso de que el Cliente decida no continuar con el servicio antes de la finalización del periodo acordado, los importes ya abonados no serán objeto de devolución, al haber sido aplicados a trabajo ya ejecutado con valor técnico real y verificable.</p>

            <p><strong>RESULTADOS.</strong> El Prestador ejecutará el trabajo con diligencia y conforme a las mejores prácticas del sector. El posicionamiento en motores de búsqueda depende de factores externos no controlables, por lo que no se garantizan posiciones concretas ni plazos exactos.</p>

            <p><strong>CONFIDENCIALIDAD.</strong> Ambas partes se obligan a mantener en estricta confidencialidad toda la información a la que accedan durante la ejecución del acuerdo, durante la vigencia del mismo y por un periodo de dos (2) años tras su finalización.</p>

            <p><strong>PROTECCIÓN DE DATOS.</strong> Los datos personales recabados serán tratados conforme al RGPD y la LOPDGDD, con la finalidad exclusiva de gestionar la relación contractual. Responsable: MKT WEB 360 S.L.U. Contacto: info@mktweb360.com.</p>

            <p><strong>LEGISLACIÓN Y JURISDICCIÓN.</strong> El presente acuerdo se rige por la legislación española. Cualquier controversia se somete a los Juzgados y Tribunales de Toledo.</p>

            <div className="mt-8 grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-6">En {ciudadCliente || "[ciudad]"}, a {today}</p>
                <div className="border-t border-gray-300 pt-2">
                  <p className="text-xs font-bold text-gray-700">Por MKT WEB 360 S.L.U.</p>
                </div>
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

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Send button */}
        {/* PRECIO ACORDADO */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">€</span>
            Precio acordado
          </h2>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={precioAcordado}
              onChange={(e) => setPrecioAcordado(e.target.value)}
              className="w-40 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 font-bold"
              placeholder="600"
              min="1"
            />
            <span className="text-sm text-gray-500">€ + IVA — precio real del acuerdo</span>
          </div>
        </section>

        <button
          onClick={handleSend}
          disabled={sending || !emailCliente || !nombreEmpresa || !nifCliente}
          className="w-full bg-accent-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-accent-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed sticky bottom-4 shadow-lg"
        >
          {sending ? "Enviando contrato..." : "📨 Enviar contrato por email"}
        </button>

        {sent && (
          <button
            onClick={handleCerrar}
            disabled={cerrando || cerrado}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            {cerrando ? "Registrando en MktOS..." : cerrado ? "✅ Contrato registrado en MktOS" : "✅ Contrato firmado — Registrar cierre"}
          </button>
        )}

      </div>
    </div>
  );
}
