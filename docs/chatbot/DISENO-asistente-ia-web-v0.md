# Asistente IA de mktweb360.com · Diseño v0
Mkt Web 360 SLU · 18/10/2026 · Rama `feature/chatbot-ia-diseno` (solo documentación: no se instala ni se integra nada todavía).

Hay un documento previo que este borrador **actualiza, no sustituye**: `proyecto-chatbot-especificacion.md`. Proponía un widget React IIFE en widget.mktweb360.com, un backend Next.js, Claude Sonnet, la creación del lead por `POST /api/webhooks/web-lead` y tres fases (guiado, conversacional con IA y avanzado). No está en el repositorio; está en Drive. Mañana conviene juntarlos.

---

## 1. Qué queremos (en palabras de José)
- Ayuda **a quien aterriza** en la web, **siempre centrada en nuestros productos y servicios**: encontrarlos y resolver dudas.
- Que use **toda la información que ya tenemos**: catálogo y precios de MktOS, páginas, FAQs y condiciones.
- Que **sepa en qué URL está** el usuario y adapte la ayuda a esa página.
- Versión final: que **llegue prácticamente a cerrar un cliente**:
  1. Responde y ofrece alternativas.
  2. Recoge datos y consentimientos.
  3. Recoge el email.
  4. **MktOS genera la propuesta o el contrato.**
  5. José lo revisa.
  6. Se envía al cliente y se cierra el servicio.

**Límite que no se negocia:** el asistente **nunca cierra nada solo**. Prepara, y José aprueba. Así está ya diseñado el resto de MktOS: la IA genera, una persona revisa y confirma.

## 2. Experiencia de uso
| Momento | Comportamiento |
|---|---|
| Carga de la página | Botón discreto **arriba a la derecha**, como pidió José. Ver el riesgo en §11.1 |
| A los 20–30 s, o al 50 % de scroll, en páginas de servicio | Mensaje breve adaptado a la página (§3). Sale una vez por sesión y se cierra con un clic |
| Artículos del blog | No se abre solo. Si el usuario lo abre, ofrece el servicio relacionado con el artículo |
| Móvil | Hoja a pantalla completa. Se cierra deslizando |
| Banner de cookies visible | El asistente espera a que se resuelva el banner y no lo tapa |
| Idioma | El de la página (es, en o fr), igual que la web |

## 3. Personalización por URL
El widget envía el **contexto de la página** con cada mensaje: `url`, `ruta`, `title`, `idioma`, `utm_*`, `referrer` y `servicio inferido`.

El servidor resuelve ese contexto con dos fuentes:
- `docs/chatbot/conocimiento/paginas-web.json`: 159 páginas indexadas (53 de servicio, 99 artículos y 7 institucionales), con la ruta, el servicio, el título y la descripción. Se generó hoy desde los metadatos de `app/(site)/*/page.tsx`. **Debe regenerarse en cada despliegue.**
- El **catálogo publicado de MktOS** (`/api/public/catalog`), para precios y modalidades vigentes.

Ejemplos de mensaje inicial:
| Página | Mensaje inicial (borrador) |
|---|---|
| `/seo-toledo/` | «¿Buscas posicionar tu negocio en Toledo? Te ayudo a ver qué plan SEO encaja con tu caso o a pedir la auditoría gratuita.» |
| `/precios-seo/` | «¿Dudas entre planes? Dime a qué se dedica tu negocio y cuántas zonas atiendes y te recomiendo uno.» |
| `/diseno-web-para-dentistas/` | «¿Quieres una web que traiga pacientes? Puedo explicarte qué incluye y qué plazos manejamos.» |
| Artículo de chatbots | «Si te interesa un chatbot para tu negocio, puedo contarte cómo lo hacemos nosotros.» |
| `/contacto/` | Va directo a recoger la consulta, sin rodeos |

## 4. Fuentes de conocimiento: qué puede usar y qué no
**Puede usar (información pública o publicable):**
1. Catálogo de MktOS: servicios, modalidades, precios **sin IVA**, permanencia, preaviso y características. Es la **única fuente de precios**.
2. Planes SEO (`lib/planes-seo.ts`, como respaldo si MktOS no responde): nombres, para quién, límites e incluye.
3. Índice de páginas (§3) y FAQs de cada página. Siguiente paso: extraer las FAQs y los «qué hacemos» de cada página.
4. Condiciones públicas: aviso legal, privacidad, cookies, compromiso de exclusividad y metodología SEO.
5. **Base de conocimiento curada en MktOS** (nueva, §8): preguntas y respuestas que José aprueba. Aquí entra la información del Sistema Operativo **que se pueda publicar**.

**No puede usar nunca:**
- Datos de clientes.
- Facturación.
- Documentos internos del Sistema Operativo (CORE y satélites) sin filtrar.
- Notas del CRM.
- Información fiscal.

El asistente consulta MktOS **solo a través de herramientas acotadas** (§7), nunca con acceso libre a la base de datos.

## 5. Cómo responde
- **Estructura:**
  1. Respuesta directa a la pregunta.
  2. Una o dos **alternativas** relevantes (por ejemplo, «si tu objetivo es vender ya, Google Ads; si es a medio plazo, SEO»).
  3. Un **siguiente paso** claro: auditoría gratuita, propuesta, llamada o página de detalle.
- **Precios:** solo los del catálogo, siempre con «sin IVA», la permanencia y lo que no incluye. Si un servicio es «a presupuesto», lo dice y ofrece preparar uno.
- **Prohibido:**
  - Prometer posiciones.
  - Inventar casos o testimonios: la web los retiró hasta tener reseñas verificables.
  - Inventar plazos.
  - Dar asesoramiento legal o fiscal.
  - Hablar de la competencia por su nombre.
- **Fuera de ámbito:** responde con educación que solo ayuda con los servicios de Mkt Web 360 y redirige.
- **Transparencia:** el primer mensaje dice que es un asistente de IA (art. 50 del Reglamento de IA), e incluye «Hablar con una persona» en todo momento (WhatsApp, teléfono o formulario).

## 6. Datos y consentimientos (por fases, sin pedir de más)
1. **Hasta tener una necesidad clara** no pide datos personales.
2. **Para preparar una propuesta** pide nombre, empresa, web, email y, si quiere, teléfono. Antes muestra la **información básica del art. 13 RGPD**:
   - responsable: Mkt Web 360 SLU;
   - finalidad: responder a su solicitud y preparar la propuesta;
   - base: medidas precontractuales a petición del interesado (art. 6.1.b);
   - conservación;
   - derechos;
   - enlace a la política de privacidad.
3. **Comunicaciones comerciales:** casilla aparte, **opcional** y desmarcada, con el texto exacto de `lib/consent-texts.ts` (`CONSENT_COMERCIAL`). Si la marca, se registra igual que en el formulario:
   - `crm.consent_events` (RT121);
   - tras RT125, `crm.legal_basis` con canal email y la prueba (texto, fecha, URL, IP y user-agent).
4. **Conversación:** se guarda vinculada al lead solo si se crea un lead, con el plazo que fije José (propuesta: 12 meses). Si no hay lead, se guarda anonimizada para mejorar el asistente, o no se guarda. Decisión pendiente (§11).
5. **Cookies:** el widget no usa cookies de seguimiento. Usa almacenamiento de sesión para no repetir el mensaje inicial.

## 7. Arquitectura propuesta (no se instala nada hoy)
```
mktweb360.com (widget React propio, sin dependencias nuevas)
   │  POST /api/chat  { mensajes, contextoPagina, sesion }
   ▼
mktweb360-web /api/chat  (proxy: valida, limita frecuencia y oculta las claves)
   │  server-to-server con un token
   ▼
MktOS /api/public/assistant  (aquí vive la IA; proveedor del Hub IA, Claude por defecto)
   ├─ herramienta get_page_context(ruta)       → índice de páginas
   ├─ herramienta get_catalog(servicio?)       → catálogo publicado
   ├─ herramienta search_kb(pregunta)          → base de conocimiento curada
   ├─ herramienta create_lead(datos, consentimientos)  → reutiliza src/server/crm/web-lead.ts (origen «chatbot»)
   └─ herramienta request_proposal(lead, servicio, modalidad, notas)
                                         → borrador de propuesta/contrato en MktOS (estado «pendiente de revisión»)
```
- **Lead:** se reutiliza el flujo actual de `web-lead.ts`, con filtro de spam (`lead-spam.ts`), consentimiento, oportunidad y alerta a José. **No se crea un webhook nuevo**, igual que en la especificación de Captación.
- **Propuesta y contrato:**
  - Se reutiliza lo que ya existe en MktOS: `src/server/crm/proposal-to-contract.ts`, el catálogo de contratos (RT119/RT124) y `post-signature-flow.ts`.
  - El asistente solo crea el **borrador**.
  - José recibe un aviso en el móvil con «Aprobar y enviar» o «Pedir cambios», como en la Auditoría gratuita.
- **Seguridad y costes:**
  - Límite de mensajes por sesión y por IP.
  - Tope de gasto diario de la API, con alerta.
  - Respuestas cortas.
  - Registro de cada llamada a herramientas.

## 8. Datos en MktOS (borrador de tablas, para la migración del día de la integración)
| Tabla | Para qué |
|---|---|
| `crm.assistant_sessions` | sesión, primera URL, UTM, idioma, inicio/fin, lead_id y opportunity_id si los hay |
| `crm.assistant_messages` | rol, texto, herramientas usadas, coste estimado |
| `crm.assistant_kb` | preguntas y respuestas curadas: pregunta, respuesta, servicio, idioma, aprobado_por, activa |
| `crm.assistant_feedback` | 👍/👎 del usuario y motivo |

Todas llevan `workspace_id` y RLS, con escritura solo desde el servidor. Así luego se puede vender a clientes de MktOS como un módulo más.

## 9. Medición
**Embudo:**
1. Widget visto.
2. Abierto.
3. Primer mensaje.
4. Necesidad identificada.
5. Datos dejados.
6. Propuesta solicitada.
7. Propuesta enviada (José).
8. Firmada.

**Por cada fase:** la URL de entrada, el servicio y el idioma. Usa `lib/track.ts` y los orígenes del CRM.

**Calidad:**
- % de respuestas con 👎.
- Conversaciones derivadas a una persona.
- Preguntas sin respuesta en la base de conocimiento, que se convierten en tareas para ampliarla.

## 10. Fases
| Fase | Contenido | Para estar listo |
|---|---|---|
| 1 | Widget + contexto por URL + respuestas guiadas con el catálogo y las FAQs, sin IA libre. Botón «Hablar con una persona» | Textos y botones aprobados por José |
| 2 | IA conversacional con las herramientas del §7 (sin `request_proposal`) y creación del lead con consentimientos | Clave de IA en el servidor, tope de gasto y prompt del sistema aprobado (§12) |
| 3 | `request_proposal`: borrador de propuesta o contrato en MktOS + revisión de José + envío + firma | Plantillas de propuesta y contrato por servicio aprobadas |
| 4 | WhatsApp (mismo cerebro), versión vendible para clientes de MktOS y paneles de medición | Fases 1–3 en marcha y medidas |

## 11. Decisiones para José (mañana)
1. **Posición arriba a la derecha.** Ahí suele estar el menú o el botón de contacto de la cabecera, y en móvil puede tapar la navegación. Propuesta:
   - Respetarlo en escritorio, justo debajo de la cabecera.
   - En móvil, abajo a la derecha (la zona que alcanza el pulgar).
   - ¿Te vale?
2. **Apertura automática** a los 20–30 s solo en páginas de servicio. ¿Sí, no, o en otro momento?
3. **Conservación de las conversaciones** sin lead: anonimizadas para mejorar, o no guardarlas.
4. **Cuánto puede «cerrar» el asistente:**
   - Propuesta: solo cuando la pide el usuario, o también cuando él la ofrece.
   - Servicios «a presupuesto»: siempre con llamada previa.
5. **Dónde vive el widget:** dentro de la web actual (más simple) o en widget.mktweb360.com (reutilizable en las webs de los clientes, como decía la especificación anterior).
6. **Proveedor de IA y tope de gasto mensual.**

## 12. Borrador del prompt del sistema (para revisar)
> Eres el asistente de Mkt Web 360, agencia de marketing digital fundada en 2016 con sede en El Viso de San Juan (Toledo), que trabaja con negocios de toda España.
>
> **Tu trabajo:** ayudar a quien visita la web a encontrar el servicio de Mkt Web 360 que le encaja, resolver sus dudas sobre esos servicios y, si quiere, preparar su solicitud de propuesta.
>
> **Reglas:**
> 1. Hablas solo de los servicios de Mkt Web 360. Si te preguntan otra cosa, dilo con amabilidad y ofrece ayuda con lo que sí haces.
> 2. Los precios, las modalidades y las condiciones salen **solo** de la herramienta del catálogo. Di siempre que son sin IVA, la permanencia si la hay y qué no incluyen. Si no hay precio, ofrece preparar un presupuesto.
> 3. Nunca prometas posiciones en Google ni resultados garantizados. No inventes casos, clientes, cifras ni plazos.
> 4. No das asesoramiento legal, fiscal ni financiero.
> 5. Responde en pocas frases. Después ofrece como mucho dos alternativas útiles y un siguiente paso claro.
> 6. Usa el contexto de la página en la que está el usuario para orientar la ayuda, sin decirle que «sabes» por dónde ha navegado.
> 7. Antes de pedir datos personales, explica para qué son y enlaza la política de privacidad. El consentimiento para recibir novedades es aparte y opcional.
> 8. Recuerda que eres un asistente de IA y ofrece siempre la opción de hablar con una persona.
> 9. Tú no cierras contratos ni confirmas precios finales: dejas preparada la solicitud y el equipo de Mkt Web 360 la revisa y la envía.
