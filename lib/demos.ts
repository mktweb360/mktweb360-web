export interface DemoItem {
  nombre: string;
  sector: string;
  url: string;
  image: string;
}

export const SERVICE_DEMOS: DemoItem[] = [
  { nombre: "Clínica Dental", sector: "Salud", url: "https://clinica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=75" },
  { nombre: "Restaurante", sector: "Hostelería", url: "https://restaurante-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75" },
  { nombre: "Despacho Abogados", sector: "Legal", url: "https://abogados-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=75" },
  { nombre: "Reformas", sector: "Construcción", url: "https://reformas-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75" },
  { nombre: "Gimnasio", sector: "Deporte", url: "https://gimnasio-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=75" },
  { nombre: "Inmobiliaria", sector: "Propiedades", url: "https://inmobiliaria-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75" },
  { nombre: "Centro Estética", sector: "Belleza", url: "https://estetica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75" },
  { nombre: "Academia", sector: "Educación", url: "https://academia-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75" },
  { nombre: "Psicólogo", sector: "Salud Mental", url: "https://psicologo-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=75" },
  { nombre: "Taller Mecánico", sector: "Automoción", url: "https://taller-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=75" },
];

export const TIENDAS_DEMOS: DemoItem[] = [
  { nombre: "Club Rythmia", sector: "Deporte", url: "https://deporte-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=75" },
  { nombre: "Studio Elevé", sector: "Moda", url: "https://tienda-moda-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=75" },
  { nombre: "Florería Encanto", sector: "Flores", url: "https://flores-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=75" },
  { nombre: "Dermé Cosmética", sector: "Cosmética", url: "https://cosmetica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=75" },
  { nombre: "Bodega La Encina", sector: "Vinos", url: "https://vinos-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=75" },
];

/** Mapa slug de demo -> item, para usar en DemoPreviewBanner dentro de cada artículo "5 factores". */
export const DEMO_BY_ID: Record<string, DemoItem> = {
  clinica: SERVICE_DEMOS[0],
  restaurante: SERVICE_DEMOS[1],
  abogados: SERVICE_DEMOS[2],
  reformas: SERVICE_DEMOS[3],
  gimnasio: SERVICE_DEMOS[4],
  inmobiliaria: SERVICE_DEMOS[5],
  estetica: SERVICE_DEMOS[6],
  academia: SERVICE_DEMOS[7],
  psicologo: SERVICE_DEMOS[8],
  taller: SERVICE_DEMOS[9],
};
