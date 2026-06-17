import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const {
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
    fecha,
    pagoInfo,
  } = await req.json();

  const contratoHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Acuerdo de Colaboración — Mkt Web 360</title>
<style>
  body { font-family: Georgia, serif; color: #1a1a2e; line-height: 1.7; max-width: 700px; margin: 0 auto; padding: 40px 20px; }
  h1 { font-size: 16px; text-align: center; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #1a1a2e; padding-bottom: 16px; margin-bottom: 32px; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-top: 32px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px; }
  p { font-size: 13px; margin: 12px 0; }
  .highlight { background: #f0f4ff; border-left: 3px solid #1a1a2e; padding: 12px 16px; margin: 16px 0; }
  .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 60px; }
  .sig-block { border-top: 1px solid #333; padding-top: 12px; text-align: center; }
  .sig-label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
  .sig-sub { font-size: 11px; color: #666; margin-top: 4px; }
  .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e0e0e0; font-size: 11px; color: #888; text-align: center; }
  table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 12px; }
  th { background: #1a1a2e; color: white; padding: 8px 12px; text-align: left; }
  td { padding: 8px 12px; border-bottom: 1px solid #f0f0f0; }
</style>
</head>
<body>

<h1>Acuerdo de Prestación de Servicios de Posicionamiento Web</h1>

<p>De una parte, <strong>MKT WEB 360 S.L.U.</strong>, con CIF <strong>B87679304</strong>, domicilio social en <strong>El Viso de San Juan, Toledo</strong>, inscrita en el Registro Mercantil de Toledo (en adelante, <strong>"el Prestador"</strong>).</p>

<p>De otra parte, <strong>${nombreEmpresa}</strong>, con NIF/CIF <strong>${nifCliente}</strong>${direccionCliente ? `, domicilio en <strong>${direccionCliente}</strong>` : ""}${nombreRepresentante ? `, representado por <strong>${nombreRepresentante}</strong>${dniRepresentante ? ` con DNI <strong>${dniRepresentante}</strong>` : ""}` : ""} (en adelante, <strong>"el Cliente"</strong>).</p>

<p>Ambas partes se reconocen mutuamente capacidad legal suficiente para suscribir el presente acuerdo.</p>

<h2>Cláusula 1 — Objeto del acuerdo</h2>
<p>El Prestador prestará al Cliente un servicio de posicionamiento web (SEO) para el dominio <strong>${lead.dominio}</strong>, con una duración de <strong>seis (6) meses</strong> desde la fecha de firma, conforme al siguiente plan de trabajo:</p>

<p><strong>Mes 1 — Auditoría y base técnica:</strong> Auditoría técnica completa del dominio, investigación de palabras clave, optimización on-page de páginas principales, configuración de Google Search Console y Google Analytics 4.</p>
<p><strong>Meses 2 y 3 — Construcción:</strong> Optimización de páginas secundarias, creación de contenido SEO, trabajo de enlaces internos, informe mensual con métricas reales.</p>
<p><strong>Meses 4, 5 y 6 — Consolidación:</strong> Continuación del plan de contenidos, link building ético, ajustes técnicos, seguimiento semanal de posiciones e informe mensual.</p>

<h2>Cláusula 2 — Duración</h2>
<p>El presente acuerdo tendrá una duración de <strong>seis (6) meses</strong> desde la fecha de su firma. Dado que el trabajo de posicionamiento web tiene naturaleza acumulativa y los resultados se consolidan de forma progresiva, ambas partes asumen el compromiso de mantener la colaboración durante el periodo íntegro acordado.</p>

<h2>Cláusula 3 — Obligaciones del Prestador</h2>
<p>El Prestador se compromete a: ejecutar las actuaciones con diligencia profesional (white hat SEO); proporcionar acceso a Google Search Console y Analytics 4, herramientas que permanecerán en propiedad del Cliente; remitir informe mensual durante los primeros días de cada mes; mantener comunicación con respuesta máxima de 24 horas hábiles; y no prestar servicios SEO a competidores directos del Cliente en su mismo ámbito geográfico local.</p>

<h2>Cláusula 4 — Obligaciones del Cliente</h2>
<p>El Cliente se compromete a: facilitar acceso a los sistemas necesarios; proporcionar información veraz sobre su negocio; aprobar o rechazar contenidos en un plazo máximo de 5 días hábiles; abonar las cantidades en los plazos establecidos; y comunicar previamente cualquier cambio en el sitio web que pueda afectar al trabajo SEO en curso.</p>

<h2>Cláusula 5 — Precio y forma de pago</h2>
<p>La contraprestación económica asciende a <strong>SEISCIENTOS EUROS (600,00 €)</strong>, más IVA vigente, mediante domiciliación bancaria SEPA:</p>

<table>
  <tr><th>Opción elegida</th><th>Descripción</th><th>Importe y calendario</th></tr>
  <tr><td><strong>${pagoInfo.label}</strong></td><td>${pagoInfo.descripcion}</td><td>${pagoInfo.cuotas}</td></tr>
</table>

${ibanCliente ? `<div class="highlight"><p><strong>Datos de domiciliación SEPA:</strong><br>Titular: ${titularCuenta || nombreRepresentante || nombreEmpresa}<br>IBAN: ${ibanCliente}</p></div>` : ""}

<p>Los recibos serán emitidos y domiciliados en los <strong>3 días hábiles siguientes</strong> a cada fecha de pago acordada.</p>

<h2>Cláusula 6 — Compromisos de prestación y resolución</h2>
<p>Dado que el servicio de posicionamiento web tiene naturaleza técnica acumulativa, ambas partes asumen el presente acuerdo como un compromiso de prestación íntegra durante los seis meses acordados. En caso de que el Cliente decida no continuar antes de la finalización del periodo, los importes ya abonados no serán objeto de devolución, al haber sido aplicados a trabajo ya ejecutado con valor técnico real y verificable.</p>

<h2>Cláusula 7 — Resultados y expectativas</h2>
<p>El Prestador ejecutará el trabajo con diligencia y conforme a las mejores prácticas del sector. El posicionamiento en motores de búsqueda depende de factores externos no controlables, por lo que <strong>no se garantizan posiciones concretas</strong> ni plazos exactos. Lo que sí se garantiza es la ejecución íntegra del plan de trabajo y la entrega de informes mensuales con métricas verificables.</p>

<h2>Cláusula 8 — Confidencialidad</h2>
<p>Ambas partes se obligan a mantener en estricta confidencialidad toda la información a la que accedan durante la ejecución del acuerdo, durante su vigencia y por un periodo de <strong>dos (2) años</strong> tras su finalización.</p>

<h2>Cláusula 9 — Protección de datos</h2>
<p>Los datos personales recabados serán tratados conforme al RGPD y la LOPDGDD, con la finalidad exclusiva de gestionar la relación contractual. Responsable del tratamiento: MKT WEB 360 S.L.U. Derechos: info@mktweb360.com.</p>

<h2>Cláusula 10 — Legislación y jurisdicción</h2>
<p>El presente acuerdo se rige por la legislación española. Para la resolución de cualquier controversia, ambas partes se someten a los <strong>Juzgados y Tribunales de Toledo</strong>.</p>

<div class="signatures">
  <div class="sig-block">
    <p class="sig-label">Por MKT WEB 360 S.L.U.</p>
    <p class="sig-sub">En ${ciudadCliente || "Toledo"}, a ${fecha}</p>
    <p class="sig-sub">Firma: ____________________</p>
  </div>
  <div class="sig-block">
    <p class="sig-label">Por el Cliente</p>
    <p class="sig-sub">${nombreRepresentante || nombreEmpresa}</p>
    ${dniRepresentante ? `<p class="sig-sub">DNI: ${dniRepresentante}</p>` : ""}
    <p class="sig-sub">Firma: ____________________</p>
  </div>
</div>

<div class="footer">
  <p>Mkt Web 360 S.L.U. · CIF B87679304 · El Viso de San Juan, Toledo · info@mktweb360.com · +34 622 74 89 87</p>
</div>

</body>
</html>
  `;

  try {
    await resend.emails.send({
      from: "Mkt Web 360 <info@mktweb360.com>",
      to: [emailCliente],
      cc: ["info@mktweb360.com"],
      subject: `Acuerdo de Colaboración SEO — ${nombreEmpresa} · ${lead.dominio}`,
      html: contratoHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
