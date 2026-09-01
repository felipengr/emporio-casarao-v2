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
  accessibility: {
    label: 'Acessibilidade',
    increaseFont: 'Aumentar fonte',
    decreaseFont: 'Diminuir fonte',
    resetFont: 'Tamanho padrão da fonte',
    fontSize: 'Tamanho da fonte',
    highContrast: 'Alto contraste',
    readPage: 'Ler página em voz alta',
    stopReading: 'Parar leitura',
    reset: 'Redefinir tudo',
    notSupported: 'Leitura em voz alta não é compatível com este navegador',
    close: 'Fechar painel de acessibilidade',
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
    subtitle: 'Artesanato, gastronomia e cultura de Piracaia em produtos de ótima qualidade, muitos deles artesanais, feitos com carinho para você e sua família.',
    ctaText: 'Conheça nossos produtos',
  },
  sobre: {
    title: 'Nossa história',
    body: 'Toda grande história começa com pessoas, memórias e bons momentos compartilhados. O Empório Casarão nasceu do amor pela família, pelas nossas raízes e pelos sabores que fazem parte da nossa história. Aqui, cada produto é escolhido com carinho, valorizando qualidade, tradição e aquele sabor especial que transforma simples momentos em boas lembranças. Mais do que um empório, somos um pedacinho de casa em Piracaia.',
    highlights: [
      {
        title: 'Cultura de Piracaia',
        text: 'Levamos um pouco da história e das tradições da nossa cidade em cada visita ao Empório.',
      },
      {
        title: 'Gastronomia local',
        text: 'Sabores caseiros e receitas que carregam a memória afetiva da culinária de Piracaia.',
      },
      {
        title: 'Artesanato feito à mão',
        text: 'Produtos artesanais que valorizam o trabalho e as técnicas de produtores locais.',
      },
    ],
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
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Próxima foto',
    goToPhoto: 'Ir para foto {n}',
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
    comoChegar: 'Como chegar',
    googleMaps: 'Google Maps',
    waze: 'Waze',
    appleMaps: 'Apple Maps',
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
  accessibility: {
    label: 'Accessibility',
    increaseFont: 'Increase font size',
    decreaseFont: 'Decrease font size',
    resetFont: 'Default font size',
    fontSize: 'Font size',
    highContrast: 'High contrast',
    readPage: 'Read page aloud',
    stopReading: 'Stop reading',
    reset: 'Reset all',
    notSupported: 'Read-aloud is not supported in this browser',
    close: 'Close accessibility panel',
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
    subtitle: 'The craftsmanship, gastronomy, and culture of Piracaia in great quality products, many of them handmade with care for you and your family.',
    ctaText: 'See our products',
  },
  sobre: {
    title: 'Our story',
    body: 'Every great story begins with people, memories, and good moments shared together. Empório Casarão was born from a love of family, our roots, and the flavors that are part of our history. Here, every product is chosen with care, valuing quality, tradition, and that special taste that turns simple moments into fond memories. More than a grocery shop, we are a little piece of home in Piracaia.',
    highlights: [
      {
        title: 'Piracaia\'s culture',
        text: 'We carry a piece of our town\'s history and traditions into every visit to the shop.',
      },
      {
        title: 'Local gastronomy',
        text: 'Homemade flavors and recipes that hold the memory of Piracaia\'s cuisine.',
      },
      {
        title: 'Handmade craftsmanship',
        text: 'Artisanal products that celebrate the work and techniques of local producers.',
      },
    ],
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
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    goToPhoto: 'Go to photo {n}',
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
    comoChegar: 'Get directions',
    googleMaps: 'Google Maps',
    waze: 'Waze',
    appleMaps: 'Apple Maps',
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
  accessibility: {
    label: 'Accesibilidad',
    increaseFont: 'Aumentar fuente',
    decreaseFont: 'Reducir fuente',
    resetFont: 'Tamaño de fuente predeterminado',
    fontSize: 'Tamaño de fuente',
    highContrast: 'Alto contraste',
    readPage: 'Leer página en voz alta',
    stopReading: 'Detener lectura',
    reset: 'Restablecer todo',
    notSupported: 'La lectura en voz alta no es compatible con este navegador',
    close: 'Cerrar panel de accesibilidad',
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
    subtitle: 'Artesanía, gastronomía y cultura de Piracaia en productos de gran calidad, muchos de ellos artesanales, hechos con cariño para ti y tu familia.',
    ctaText: 'Conoce nuestros productos',
  },
  sobre: {
    title: 'Nuestra historia',
    body: 'Toda gran historia comienza con personas, recuerdos y buenos momentos compartidos. Empório Casarão nació del amor por la familia, por nuestras raíces y por los sabores que forman parte de nuestra historia. Aquí, cada producto se elige con cariño, valorando la calidad, la tradición y ese sabor especial que transforma simples momentos en buenos recuerdos. Más que una tienda, somos un pedacito de casa en Piracaia.',
    highlights: [
      {
        title: 'Cultura de Piracaia',
        text: 'Llevamos un poco de la historia y las tradiciones de nuestra ciudad en cada visita.',
      },
      {
        title: 'Gastronomía local',
        text: 'Sabores caseros y recetas que guardan la memoria afectiva de la cocina de Piracaia.',
      },
      {
        title: 'Artesanía hecha a mano',
        text: 'Productos artesanales que valoran el trabajo y las técnicas de productores locales.',
      },
    ],
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
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
    goToPhoto: 'Ir a la foto {n}',
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
    comoChegar: 'Cómo llegar',
    googleMaps: 'Google Maps',
    waze: 'Waze',
    appleMaps: 'Apple Maps',
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
