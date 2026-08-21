export type Language = 'pt' | 'en' | 'es';

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

const pt = {
  nav: {
    sobre: 'Sobre',
    produtos: 'Produtos',
    parceiros: 'Parceiros',
    galeria: 'Galeria',
    contato: 'Contato',
  },
  languageSwitcher: {
    label: 'Selecionar idioma',
  },
  theme: {
    enableLight: 'Ativar modo claro',
    enableDark: 'Ativar modo escuro',
    light: 'Modo claro',
    dark: 'Modo escuro',
  },
  mobileMenu: {
    menu: 'Menu',
    openMenu: 'Abrir menu',
    whatsappCta: 'Fale no WhatsApp',
    instagramCta: 'Siga no Instagram',
    tagline: 'Produtos artesanais de Piracaia',
  },
  hero: {
    title: 'Empório Casarão Piracaia',
    subtitle: 'Produtos de ótima qualidade, muitos deles artesanais e todos de excelente qualidade.',
    ctaText: 'Conheça nossos produtos',
  },
  sobre: {
    title: 'Nossa história',
    body: 'Somos um empório de Piracaia, prezamos por qualidade e sabor de verdade — traga a família e experimente!',
  },
  produtos: {
    title: 'Destaques da Casa',
    items: [
      { name: 'Nhoque caseiro', description: 'Macio, artesanal e cheio de sabor.' },
      { name: 'Doce de leite', description: 'Feito com leite fresco e receita tradicional.' },
    ],
  },
  parceiros: {
    title: 'Nossos Parceiros',
    subtitle: 'Trabalhamos com as melhores marcas para trazer qualidade aos nossos clientes',
  },
  galeria: {
    title: 'Galeria',
    captions: ['Balcão do Empório', 'Doces caseiros', 'Produtos artesanais'],
    viewOnInstagram: 'Ver no Instagram',
  },
  contato: {
    title: 'Visite-nos',
    endereco: 'Endereço',
    telefone: 'Telefone',
    horario: 'Horário',
    horarioDias: 'Segunda a Sábado: 9h às 18h',
    horarioDomingo: 'Domingo: 9h às 13h',
    instagramLabel: 'Instagram',
    cta: 'Fale conosco pelo WhatsApp',
  },
  footer: {
    description: 'Produtos artesanais de Piracaia com qualidade e sabor de verdade.',
    contatoTitle: 'Contato',
    linksTitle: 'Links',
    rights: 'Todos os direitos reservados.',
    developedBy: 'Desenvolvido por',
  },
  whatsappFloat: {
    message: 'Olá! Vim através do site e gostaria de mais informações.',
    tooltip: 'Fale conosco!',
    srLabel: 'Fale no WhatsApp',
  },
  notFound: {
    title: 'Ops! Página não encontrada',
    description: 'A página que você está procurando não existe ou foi movida para outro lugar.',
    homeBtn: 'Ir para Home',
    produtosBtn: 'Ver Produtos',
    alsoText: 'Você também pode:',
    historia: 'Conhecer nossa história',
    galeria: 'Ver galeria',
    contato: 'Entrar em contato',
  },
};

const en: typeof pt = {
  nav: {
    sobre: 'About',
    produtos: 'Products',
    parceiros: 'Partners',
    galeria: 'Gallery',
    contato: 'Contact',
  },
  languageSwitcher: {
    label: 'Select language',
  },
  theme: {
    enableLight: 'Enable light mode',
    enableDark: 'Enable dark mode',
    light: 'Light mode',
    dark: 'Dark mode',
  },
  mobileMenu: {
    menu: 'Menu',
    openMenu: 'Open menu',
    whatsappCta: 'Chat on WhatsApp',
    instagramCta: 'Follow on Instagram',
    tagline: 'Artisanal products from Piracaia',
  },
  hero: {
    title: 'Empório Casarão Piracaia',
    subtitle: 'Great quality products, many of them handmade and all crafted with excellence.',
    ctaText: 'See our products',
  },
  sobre: {
    title: 'Our story',
    body: 'We are a grocery shop in Piracaia. We value real quality and flavor — bring the family and give it a try!',
  },
  produtos: {
    title: 'House Specialties',
    items: [
      { name: 'Homemade Gnocchi', description: 'Soft, handmade and full of flavor.' },
      { name: 'Dulce de Leche', description: 'Made with fresh milk and a traditional recipe.' },
    ],
  },
  parceiros: {
    title: 'Our Partners',
    subtitle: 'We work with the best brands to bring quality to our customers',
  },
  galeria: {
    title: 'Gallery',
    captions: ['Shop counter', 'Homemade sweets', 'Artisanal products'],
    viewOnInstagram: 'View on Instagram',
  },
  contato: {
    title: 'Visit Us',
    endereco: 'Address',
    telefone: 'Phone',
    horario: 'Hours',
    horarioDias: 'Monday to Saturday: 9am – 6pm',
    horarioDomingo: 'Sunday: 9am – 1pm',
    instagramLabel: 'Instagram',
    cta: 'Chat with us on WhatsApp',
  },
  footer: {
    description: 'Artisanal products from Piracaia with real quality and flavor.',
    contatoTitle: 'Contact',
    linksTitle: 'Links',
    rights: 'All rights reserved.',
    developedBy: 'Developed by',
  },
  whatsappFloat: {
    message: "Hi! I found you through the website and I'd like more information.",
    tooltip: 'Chat with us!',
    srLabel: 'Chat on WhatsApp',
  },
  notFound: {
    title: 'Oops! Page not found',
    description: "The page you're looking for doesn't exist or has been moved.",
    homeBtn: 'Go Home',
    produtosBtn: 'See Products',
    alsoText: 'You can also:',
    historia: 'Learn our story',
    galeria: 'View gallery',
    contato: 'Get in touch',
  },
};

const es: typeof pt = {
  nav: {
    sobre: 'Nosotros',
    produtos: 'Productos',
    parceiros: 'Socios',
    galeria: 'Galería',
    contato: 'Contacto',
  },
  languageSwitcher: {
    label: 'Seleccionar idioma',
  },
  theme: {
    enableLight: 'Activar modo claro',
    enableDark: 'Activar modo oscuro',
    light: 'Modo claro',
    dark: 'Modo oscuro',
  },
  mobileMenu: {
    menu: 'Menú',
    openMenu: 'Abrir menú',
    whatsappCta: 'Chatear por WhatsApp',
    instagramCta: 'Síguenos en Instagram',
    tagline: 'Productos artesanales de Piracaia',
  },
  hero: {
    title: 'Empório Casarão Piracaia',
    subtitle: 'Productos de gran calidad, muchos de ellos artesanales y todos hechos con excelencia.',
    ctaText: 'Conoce nuestros productos',
  },
  sobre: {
    title: 'Nuestra historia',
    body: 'Somos una tienda en Piracaia. Valoramos la calidad y el sabor de verdad: ¡trae a la familia y pruébalo!',
  },
  produtos: {
    title: 'Especialidades de la Casa',
    items: [
      { name: 'Ñoquis Caseros', description: 'Suaves, artesanales y llenos de sabor.' },
      { name: 'Dulce de Leche', description: 'Hecho con leche fresca y receta tradicional.' },
    ],
  },
  parceiros: {
    title: 'Nuestros Socios',
    subtitle: 'Trabajamos con las mejores marcas para ofrecer calidad a nuestros clientes',
  },
  galeria: {
    title: 'Galería',
    captions: ['Mostrador de la tienda', 'Dulces caseros', 'Productos artesanales'],
    viewOnInstagram: 'Ver en Instagram',
  },
  contato: {
    title: 'Visítanos',
    endereco: 'Dirección',
    telefone: 'Teléfono',
    horario: 'Horario',
    horarioDias: 'Lunes a sábado: 9h a 18h',
    horarioDomingo: 'Domingo: 9h a 13h',
    instagramLabel: 'Instagram',
    cta: 'Chatea con nosotros por WhatsApp',
  },
  footer: {
    description: 'Productos artesanales de Piracaia con calidad y sabor de verdad.',
    contatoTitle: 'Contacto',
    linksTitle: 'Enlaces',
    rights: 'Todos los derechos reservados.',
    developedBy: 'Desarrollado por',
  },
  whatsappFloat: {
    message: '¡Hola! Los encontré a través del sitio web y me gustaría más información.',
    tooltip: '¡Chatea con nosotros!',
    srLabel: 'Chatear por WhatsApp',
  },
  notFound: {
    title: '¡Ups! Página no encontrada',
    description: 'La página que buscas no existe o fue movida a otro lugar.',
    homeBtn: 'Ir al Inicio',
    produtosBtn: 'Ver Productos',
    alsoText: 'También puedes:',
    historia: 'Conocer nuestra historia',
    galeria: 'Ver galería',
    contato: 'Contáctanos',
  },
};

export const translations = { pt, en, es };
