import Link from "next/link";

export function MetodologiaSeo() {
  const pasos = [
    {
      num: "01",
      title: "Diagnóstico real",
      desc: "Antes de proponer nada analizamos tu dominio, tu sector y tu competencia. Sabemos dónde estás antes de decirte a dónde puedes ir.",
    },
    {
      num: "02",
      title: "Estrategia propia",
      desc: "Cada plan de acción es específico para tu proyecto. No hay plantillas, no hay acciones genéricas. Cada tarea tiene un objetivo medible.",
    },
    {
      num: "03",
      title: "Ejecución directa",
      desc: "Hacemos el trabajo nosotros. No lo subcontratamos. El técnico que firma tu cuenta es el que trabaja en ella.",
    },
    {
      num: "04",
      title: "Medición honesta",
      desc: "Datos reales cada mes — buenos y malos. Posiciones reales, tráfico real, conversiones reales. Sin capturas de pantalla que no se pueden verificar.",
    },
    {
      num: "05",
      title: "Ajuste continuo",
      desc: "El plan evoluciona con los datos. Lo que no funciona se corrige. Lo que funciona se escala. El mes 6 no es igual al mes 1.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-100 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Cómo trabajamos</span>
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Un método. No una plantilla.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Cada proyecto comienza con un diagnóstico real y termina con resultados verificables. Lo que ocurre en medio es trabajo consistente, bien ejecutado y bien medido.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pasos.map((p) => (
            <div key={p.num} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
              <div className="text-3xl font-bold text-primary-100 mb-3">{p.num}</div>
              <h3 className="font-bold text-primary-600 mb-2 text-sm">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/seo-posicionamiento-web-organico/" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline text-sm">
            Ver el servicio SEO completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
