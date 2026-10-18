# Asistente IA de Mkt Web 360 · Diseño v1
18/10/2026 · Sustituye a la v0 (`DISENO-asistente-ia-v0.md`) e incorpora las decisiones de José de hoy. **Solo diseño: no se instala ni se integra nada hasta que José lo apruebe.**

Marcas: **[C]** confirmado con documento o fuente · **[E]** estimación · **[I]** interpretación o propuesta que hay que validar.

---

## 0. Decisiones de José (18/10, 12:16)
1. **Conocimiento:** lo que ya existe en el Sistema Operativo y en la web. Su finalidad es que el visitante nos conozca, entienda los servicios y avance hacia el objetivo: **lead cualificado → acuerdo de colaboración**.
2. **Tono lo más humano posible, sin respuestas repetitivas.** Usa Claude con un **consumo muy controlado**, sin bajar la calidad.
3. **No es una IA de uso libre.** Solo responde sobre los servicios de Mkt Web 360.
4. **Integración en toda la infraestructura:** MktOS (mktos360.app), mktweb360.com y el área privada de clientes.

---

## 1. Qué tiene que conseguir (y cómo se mide)
| Objetivo | Métrica principal | Métrica de control |
|---|---|---|
| Que más visitantes se conviertan en leads cualificados | % de conversaciones que acaban en un lead con necesidad, sector y contacto | % de leads que José descarta como no cualificados |
| Que más leads acaben firmando | % de leads del asistente con propuesta enviada y con firma | Tiempo desde el lead hasta la primera respuesta de José |
| Calidad percibida | % de 👍 y % de conversaciones derivadas a una persona | % de 👎 y motivo |
| Gasto controlado | € de IA al mes y € por lead cualificado | Días con el tope de gasto alcanzado |

**Dato que falta para calcular la rentabilidad:** el margen medio y el valor de vida de un cliente por servicio. Con eso se fija cuánto se puede gastar por lead.

---

## 2. Arquitectura: un solo «cerebro» en MktOS y tres puertas de entrada
```
 mktweb360.com (web pública)     Área privada (/area-privada)       /d/{token} (diagnóstico de Captación)
        │ modo VISITANTE               │ modo CLIENTE (con login)          │ modo DIAGNÓSTICO
        └──────────────┬───────────────┴──────────────────┬───────────────┘
                       ▼                                  ▼
          mktweb360-web /api/chat (proxy: valida, limita frecuencia y oculta las claves)
                       │ servidor a servidor, con token
                       ▼
          MktOS /api/public/assistant ── Pasarela IA (§6): presupuesto, registro de uso, modelo
                       │
     herramientas acotadas, según el modo (§5)
     get_page_context · get_catalog · search_kb · create_lead · book_call
     [cliente] get_my_services · get_my_invoices · get_my_reports · open_ticket
     [diagnóstico] get_diagnostic(token)
```
- **El mismo cerebro sirve para los tres modos.** Cada modo cambia las herramientas disponibles y las instrucciones, y nada más.
- **Modo cliente [I]:** reutiliza lo que ya existe en MktOS `src/server/client-portal/` (`scope.ts`, `invoices.ts`, `report.ts`, `overview.ts`) y el login del área privada de la web (`app/api/portal/auth/*`) **[C]**.
  - Solo lectura de **los datos de ese cliente**, filtrados por el ámbito de su sesión.
  - Escritura solo para abrir una solicitud de soporte.
- **Modo diagnóstico [I]:** en la página privada `/d/{token}` de Captación (RT126), el asistente conoce el diagnóstico aprobado de ese negocio y responde dudas sobre él. Ofrece ampliarlo a una auditoría completa con la puerta legal de RT125 (doble confirmación).
- **Después:** WhatsApp con el mismo cerebro y el **módulo vendible** a clientes de MktOS (todo lleva `workspace_id`).

---

## 3. Conocimiento: una única fuente de verdad
| Fuente | Qué aporta | Estado | Regla |
|---|---|---|---|
| Catálogo publicado de MktOS (`/api/public/catalog`) | Servicios, modalidades, precios sin IVA, permanencia | Existe **[C]** | **Única fuente de precios** |
| `paginas-web.json` | 159 páginas: ruta, servicio, título y descripción | Generado el 17/10 **[C]** | Se regenera en cada despliegue |
| `faqs-web.json` | 738 FAQs (458 en español) | **Pendientes de revisión** **[C]** | Solo se usan las aprobadas |
| Sistema Operativo (CORE y satélites) | Propuesta de valor, metodología, forma de trabajar, sectores | Interno | Se extraen **fichas publicables** que José aprueba. Nunca se lee el SO en bruto |
| `crm.assistant_kb` (nueva) | Respuestas curadas, objeciones, casos sin datos inventados | Por crear | Todo lo que se publica tiene «aprobado por» |

**Proceso de mantenimiento [I]:**
1. Cada pregunta sin buena respuesta genera una **tarea «ampliar conocimiento»** en MktOS.
2. José aprueba o edita la respuesta en un clic.
3. Las preguntas reales de los visitantes pasan cada mes a **ideas de contenido para el blog y para GEO**, porque son las dudas reales de los clientes.

**Primer paso concreto:** revisar las 120 FAQs marcadas en `REVISION-FAQS-2026-10-18.md`. Llevan plazos, cifras o absolutos, y son el mayor riesgo de prometer algo de más.

---

## 4. Comportamiento humano y sin repeticiones
**Guía de voz (borrador para José):** cercano, directo y con criterio, como un consultor senior que escucha antes de vender.
- Tutea por defecto y pasa a usted si el visitante lo usa.
- Frases cortas.
- **Una sola pregunta por mensaje.**
- Sin listas salvo que se pidan.
- Sin emojis, salvo que el visitante los use.

**Técnicas, de menor a mayor coste:**
1. **Frases prohibidas en el prompt:** «¡Excelente pregunta!», «Como asistente de IA…», «Estaré encantado de ayudarte», «No dudes en…», cierres del tipo «¿Hay algo más en lo que pueda ayudarte?» en cada mensaje, y repetir el nombre del servicio en cada frase.
2. **Mensajes de apertura con 3–4 variantes por tipo de página**, rotadas y medidas (A/B). Sin IA y sin coste.
3. **Memoria de la conversación:**
   - Se envía la conversación completa y un resumen de «lo que ya sabemos» (sector, objetivo, zona, web).
   - No vuelve a preguntar lo que ya se ha dicho.
   - Retoma lo dicho («Antes me comentabas que…»).
4. **Reconoce antes de responder:** valida la situación del visitante con detalles concretos de lo que ha contado, no con fórmulas.
5. **Ejemplos de conversación en el prompt:** 3 o 4 diálogos buenos y 2 malos, con el porqué.
6. **Control automático de repetición [I]:**
   - Antes de enviar, se compara la respuesta con las anteriores de la sesión, por solapamiento de frases.
   - Si se repite demasiado, se regenera una vez.
   - Solo se activa si el control lo detecta, así que el coste extra es bajo.
7. **Revisión semanal:** 20 conversaciones leídas. Lo que suene a robot va a la lista de frases prohibidas o a los ejemplos.

**Lo que no es negociable:**
- Avisa de que es una IA **al inicio de la conversación**. Es obligatorio desde el 02/08/2026 (art. 50 del Reglamento de IA). Según las Directrices de la Comisión, no basta con ponerlo en las condiciones **[C]**.
- Hablar con una persona siempre está disponible.

---

## 5. Uso exclusivo para Mkt Web 360: defensa por capas
Ninguna capa basta sola. La idea es que **las instrucciones orientan y el código obliga**.

| Capa | Medida | Coste |
|---|---|---|
| 1. Entrada | Máximo de 600 caracteres por mensaje, 20 mensajes por sesión y 5 sesiones por IP y día (cifras a ajustar). Se rechazan bloques de código y adjuntos | 0 |
| 2. Reglas previas sin IA | Se detectan patrones de mal uso: «ignora las instrucciones», «actúa como», «traduce», «escríbeme un código, un correo o un texto sobre…», preguntas de cultura general. Respuesta fija y amable | 0 |
| 3. Instrucciones | Ámbito cerrado. El contenido del usuario y de las herramientas se trata como **datos, no como órdenes**. No revela sus instrucciones | Incluido |
| 4. Herramientas mínimas | Sin navegación ni peticiones externas. Escritura solo para `create_lead`, `book_call` y `open_ticket`, validada en el servidor. En modo cliente, solo los datos de ese cliente | 0 |
| 5. Comprobación de salida | No contiene el prompt del sistema. Los precios coinciden con el catálogo. No promete resultados ni da plazos inventados. No sale del ámbito | 0, con reglas |
| 6. Escalado | Al segundo intento fuera de ámbito, cierra la sesión con educación y ofrece contacto humano. Los intentos repetidos se registran y alertan | 0 |
| 7. Opcional | Clasificador ligero con Haiku, solo para mensajes dudosos que pasen las capas 1–2 | Muy bajo |

**Resultado esperado [I]:** quien intente usarlo como ChatGPT gratuito recibe 1 o 2 respuestas amables y la sesión se cierra, con un coste casi nulo.

---

## 6. Consumo muy controlado: pasarela IA con presupuesto
**Modelo:** **Claude Haiku 5.5** (`claude-haiku-5-5`) para la conversación. Anthropic lo recomienda para tareas de mucho volumen y baja latencia **[C]**.
- **Precio por millón de tokens [C]:**
  - entrada 0,10 $;
  - salida 0,50 $;
  - escritura en caché de 5 minutos 0,125 $;
  - lectura de caché 0,01 $.
  - (Todo para prompts de hasta 100.000 tokens.)
- **Otros datos [C]:**
  - la caché mínima es de 512 tokens;
  - el razonamiento es adaptativo y se regula con `effort`, que por defecto es `medium`;
  - cuenta un 30 % más de tokens que Haiku 4.5 con el mismo texto.
- **Sonnet 5.5** (2 $ de entrada y 10 $ de salida por millón **[C]**) solo para redactar borradores de propuesta, que José revisa.

**Estimación [E]:**

| Supuesto | Valor |
|---|---|
| Instrucciones y conocimiento base cacheados | unos 6.000 tokens |
| Por turno | unos 800 tokens nuevos de entrada y unos 250 de salida, con `effort` bajo |
| Coste por turno | unos 0,0003 $ |
| Conversación de 8 turnos, con la escritura inicial en caché | **unos 0,003 $** |
| 1.000 conversaciones al mes | **unos 3 $**. Aunque el consumo real fuera 5 veces mayor, menos de 20 $ al mes |

Hay que medir el coste real en las primeras 200 conversaciones.

**Controles en código [I]:**
1. **Registro de uso** (`ai.usage_ledger`) de cada llamada: modo, modelo, tokens de entrada, de caché y de salida, coste y sesión.
2. **Topes:**
   - por sesión: 20 turnos y un número máximo de tokens;
   - por día: por ejemplo 1 €;
   - por mes: por ejemplo 15 €, a decidir por José.
3. **Al 80 % del tope** llega un aviso al móvil de José. **Al 100 %**, el asistente pasa a **modo guiado sin IA**: botones, FAQs aprobadas y contacto. La web nunca se queda sin asistente.
4. **Respaldo en Anthropic:** límite de gasto del workspace en la consola.
5. **Caché:** las instrucciones y el conocimiento estable van primero y sin cambios. Nada variable (fecha, URL) antes del bloque cacheado.
6. **`effort` bajo** y respuestas cortas pedidas en el prompt. Según la guía de Anthropic, el tope de `max_tokens` no ahorra: lo que se corta se paga igual **[C]**. Se fija un tope prudente para evitar desbordes, no para ahorrar.

**Mejora de paso en MktOS:** el Hub IA actual (`src/server/ai-hub/providers.ts`) lista modelos antiguos (Opus 4.8, Sonnet 4.6, Haiku 4.5) y **no registra el gasto** **[C]**. Esta pasarela debería ser la **única puerta de la IA para todo MktOS**: auditorías, contenidos, social, documentos, notificaciones y chatbot. Así se ve y se limita el gasto total en un solo sitio.

---

## 7. De la conversación al acuerdo
**Cualificación progresiva y natural** (nunca un interrogatorio):
1. Qué hace el negocio y dónde.
2. Qué quiere conseguir.
3. Qué tiene hoy (web, ficha de Google, anuncios).
4. Urgencia.
5. Rango de inversión, solo si encaja en la conversación.

Con eso el asistente:
- **puntúa el lead** con el mismo criterio que Captación (`scoring-core.ts`);
- **recomienda el servicio** del catálogo con una alternativa.

**Siguiente paso, de menor a mayor compromiso:**
1. Página de detalle.
2. Auditoría gratuita.
3. **Reservar una llamada** en la agenda de MktOS (`src/server/agenda`, `calendar` **[C]**), con huecos reales.
4. Solicitud de propuesta. El borrador lo genera MktOS y **José lo aprueba** antes de enviarlo.

**Después del lead:**
- Aviso push a José con el **resumen de la conversación** y la puntuación.
- Objetivo: respuesta humana en menos de 15 minutos en horario laboral.
- Fuera de horario, el asistente lo dice y da un plazo realista.

**Datos y consentimientos:** igual que en la v0, §6:
- art. 13 RGPD antes de pedir datos;
- el consentimiento comercial va aparte, es opcional y se registra en `crm.legal_basis` (RT125).

---

## 8. Integración por puertas
| Puerta | Qué hace el asistente | Qué reutiliza |
|---|---|---|
| **mktweb360.com** | Modo visitante. Primer mensaje según la URL. Lead y llamada | Widget propio en la web, `paginas-web.json`, catálogo, `web-lead.ts` y `lead-spam.ts` |
| **Área privada** | Modo cliente: «¿Cómo va mi SEO?», «Descárgame la última factura», «Quiero ampliar el servicio» | `client-portal/*`, login del portal |
| **/d/{token}** | Modo diagnóstico | RT126 (`prospecting.ts`) |
| **MktOS (panel interno)** | No conversa. **Panel del asistente:** conversaciones, leads, preguntas sin respuesta, gasto, 👍/👎 y aprobación de la base de conocimiento | Tablas `crm.assistant_*`, `ai.usage_ledger` |

---

## 9. Plan por fases
| Fase | Qué incluye | Requisitos |
|---|---|---|
| **1. Base sin IA** | Widget, contexto por URL, aperturas con variantes, FAQs aprobadas, contacto humano, embudo medido | Revisión de FAQs, textos de apertura y aviso de IA |
| **2. IA en la web** | Pasarela con presupuesto, Haiku 5.5, capas de defensa, lead con consentimientos, reserva de llamada | Clave de IA en el servidor de MktOS, topes, prompt y guía de voz aprobados |
| **3. Área privada y diagnóstico** | Modo cliente (solo lectura) y modo diagnóstico | Fase 2 estable. RT125 y RT126 aplicadas |
| **4. Cierre asistido y nuevos canales** | Borrador de propuesta para que José lo apruebe, WhatsApp, módulo vendible | Plantillas de propuesta por servicio |

---

## 10. Ideas para el resto de la infraestructura (priorizadas)
| # | Idea | Para qué sirve | Esfuerzo |
|---|---|---|---|
| 1 | **Pasarela IA única con registro de gasto** (§6) | Controla el gasto de IA de todo MktOS, no solo del chatbot | Medio |
| 2 | **Avisos de cargos nuevos o recurrentes en las tarjetas.** Se importan los extractos y se marca cada comercio nuevo y cada cargo pequeño que se repite | Habría detectado Resadexa en julio, no en octubre | Bajo |
| 3 | **Respuesta rápida al lead:** aviso push con resumen, plantilla de respuesta y alerta si pasan más de 15 minutos sin contestar | La rapidez de respuesta es de lo que más pesa en el cierre **[I]** | Bajo |
| 4 | **Una única base de conocimiento** para la web, el chatbot, las propuestas y los contratos | Se acaban las contradicciones entre la web y lo que se ofrece | Medio |
| 5 | **Las preguntas de los visitantes como fuente de contenido:** informe mensual de dudas para el blog y GEO | Contenido que responde a demanda real | Bajo |
| 6 | **Panel diario de mando:** caja, deudas y vencimientos (del informe fiscal), leads, propuestas pendientes y gasto de IA | Una sola pantalla para gestionar y controlar | Medio |
| 7 | **Puntuación de leads unificada** para Captación, chatbot y formularios | Prioriza el tiempo de José | Bajo |
| 8 | **Asistente en el área privada** con informes en lenguaje claro | Retención: el cliente entiende lo que paga | Medio |
| 9 | **Chatbot como producto para clientes**, con paquetes por sector (clínicas, reformas…) | Nueva línea de ingresos recurrentes | Alto (fase 4) |

---

## 11. Decisiones pendientes de José
1. **Tope de gasto de IA:** diario (propuesta: 1 €) y mensual (propuesta: 15 €).
2. **Trato:** tú por defecto, o usted.
3. **Posición del botón y apertura automática:** pendientes de la v0, §11.1 y §11.2.
4. **Conservar las conversaciones sin lead:** anonimizadas 12 meses, o no guardarlas.
5. **Horario de atención humana** y canal preferido: WhatsApp, teléfono o formulario.
6. **Reserva de llamadas:** ¿con la agenda de MktOS? ¿Qué huecos y de cuánto tiempo?
7. **Revisión de FAQs:** ¿las revisas tú en bloque, o empiezo por las 120 marcadas y te paso solo las dudosas?

---
**Fuentes:**
- [Claude Haiku 5.5, documentación oficial](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
- [Anthropic, optimizar coste e inteligencia](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- [Art. 50 del Reglamento de IA, Legal Today](https://www.legaltoday.com/portada-2/portada-4/el-articulo-50-del-ria-entra-en-vigor-obligaciones-de-transparencia-en-sistemas-de-ia-de-adopcion-masiva-2026-07-31/)
- [Botpress, diseño conversacional 2026](https://botpress.com/blog/conversation-design)
- [Gobierno del coste de los LLM en producción](https://matheuspalma.com/blog/llm-cost-governance-token-budgets-model-routing-spend-guardrails)
- [Grepture, defensa frente a la inyección de prompts](https://grepture.com/en/blog/prompt-injection-prevention-guide)
- [Wonderchat, agente de ventas web](https://wonderchat.io/uses/ai-sales-agent-website)

---

## 12. Decisiones de José (18/10, 12:57). Cierran el §11
| # | Decisión | Cómo se aplica |
|---|---|---|
| 1 | Tope de **1 € al día y 15 € al mes** | `ai.usage_ledger` con tope diario y mensual. Aviso al 80 %; al 100 %, modo guiado sin IA. Límite de gasto también en la consola de Anthropic |
| 2 | **Tú** | Guía de voz: tutea siempre. Si el visitante trata de usted, el asistente mantiene la cercanía sin corregirle |
| 3 | Botón **arriba a la derecha** con **bocadillo tipo cómic** que avisa de que está ahí | Desktop: botón bajo la cabecera, a la derecha. Sale un bocadillo con el texto de apertura según la URL (§4.2), una vez por sesión, y se cierra con un clic. **Móvil [I]:** mismo diseño, comprobando que no tape el menú; si lo tapa, se baja la posición solo en móvil |
| 4 | Las conversaciones **sin contacto** se guardan **temporalmente** como fuente de conocimiento e ideas, y **se borran cuando ya se han aprovechado** | Se anonimizan al guardarlas (sin IP ni datos personales). Cada mes se extraen preguntas sin respuesta e ideas de contenido. **Borrado automático a los 90 días [I, propuesta de plazo]**. Lo extraído queda en `crm.assistant_kb` o en tareas, sin la conversación |
| 5 | Atención **24/7** | El asistente atiende 24/7 y la petición de contacto humano también se recoge 24/7, con aviso push inmediato. **Ojo:** José es una sola persona, así que el asistente **no promete respuesta humana inmediata**. Dice «José te responde en cuanto lo vea, normalmente en menos de X horas» (X a fijar por José) |
| 6 | **Todo se agenda en MktOS** y MktOS avisa a José con notificación al móvil | `book_call` escribe en la agenda de MktOS (`src/server/agenda`), con los huecos libres reales, y envía `sendPushToWorkspace` con el resumen del lead |
| 7 | Documento para aprobar o no cada FAQ | Página «Revisión FAQs del asistente» (artifact de claude.ai): 738 FAQs con la recomendación de Claude. Las decisiones se guardan en su base de datos y Claude las lee para cargar `crm.assistant_kb` |

**Recomendación de Claude por FAQ:**
- 101 de **aprobar**: páginas de servicio sin cifras.
- 138 de **revisar**: tienen cifras, plazos o absolutos.
- 47 de **excluir**: temas legales o fiscales de artículos, porque el asistente no asesora en eso.
- 452 **opcionales**: preguntas informativas de artículos.

---

## 13. Regla de intención comercial (José, 18/10, 13:08)
**Principio:** es un chatbot profesional para **dar a conocer nuestros servicios y conseguir leads**. No es una herramienta para que estudiantes, empresas o terceros resuelvan sus problemas o investiguen para su propio beneficio.

**Cómo se aplica:**

| Tipo de mensaje | Ejemplo | Qué hace el asistente | Coste de IA |
|---|---|---|---|
| **Interés en un servicio** | «¿Cuánto cuesta el SEO local?», «¿Me hacéis la web?» | Responde bien, cualifica y propone el siguiente paso | Normal |
| **Duda informativa ligada a un servicio** | «¿Qué es el GEO?» | Una o dos frases como mucho, sin tutorial. Conecta enseguida con su negocio: «¿Te interesa para tu negocio? ¿A qué te dedicas?» | Bajo |
| **Consulta de terceros o investigación** | «¿Cómo hago el SEO de mi web paso a paso?», «Explícame el algoritmo», «Es para un trabajo de clase o un TFG», «Dame una lista de herramientas», «Redáctame…» | **No la resuelve.** Dice con amabilidad que este canal es para quien quiere contar con Mkt Web 360, enlaza el artículo si existe y ofrece hablar de su proyecto | Mínimo (respuesta fija, sin IA si la detectan las reglas) |
| **Fuera de ámbito** | Cualquier otro tema | Respuesta fija y amable. Ofrece los servicios | 0 |

**Controles en código:**
1. **Cupo informativo por sesión:** como mucho **2 respuestas informativas** sin que aparezca una señal de negocio (sector, web, necesidad, interés en contratar).
   - A la tercera, el asistente pregunta directamente por su negocio.
   - Si no hay respuesta de negocio, **cierra con amabilidad** y deja la llamada a la acción (auditoría gratuita o contacto).
2. **Detección previa sin IA:** detecta patrones de uso propio («paso a paso», «tutorial», «para mi trabajo, clase, TFG o máster», «explícame», «hazme, redáctame o escríbeme», «lista de herramientas», «compara X e Y») y responde con una plantilla fija.
3. **Solo FAQs aprobadas:** en la revisión de FAQs, las **informativas de artículos se excluyen** por defecto:
   - 446 excluidas de las 738;
   - 237 para aprobar (de servicio, o de un artículo pero sobre nuestro servicio);
   - 55 para revisar.

   Así el asistente no tiene el material para hacer de consultor gratuito.
4. **Medición:** % de sesiones cerradas por el cupo informativo y % de leads por sesión. Si una consulta informativa se repite mucho, pasa a la revisión mensual como posible contenido nuevo (blog o lead magnet), no como respuesta del chatbot.

**Texto base de reconducción (borrador, tuteo):**
> «Esto lo explicamos con detalle en [artículo]. Por aquí te ayudo sobre todo si estás pensando en mejorar la captación de tu negocio: ¿a qué te dedicas y qué te gustaría conseguir?»

**Texto de cierre amable (borrador):**
> «Este canal está pensado para quien quiere contar con Mkt Web 360 en su proyecto. Si en algún momento te encaja, pide aquí la auditoría gratuita y lo vemos con tu caso.»
