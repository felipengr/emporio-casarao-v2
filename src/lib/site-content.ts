export const siteConfig = {
  siteName: 'Empório Casarão',
  phone: '(11) 99219-5337',
  whatsapp: '(11) 99219-5337',
  address: 'Praça Nossa Senhora do Rosário, 111 - Centro - Piracaia - SP',
  addressLines: ['Praça Nossa Senhora do Rosário, 111', 'Centro • Piracaia / SP'],
  instagramHandle: '@emporiocasarao.piracaia',
  instagram: 'https://instagram.com/emporiocasarao.piracaia',
  logo: '/images/logo-emporio-transparente.png',
};

export const seoConfig = {
  siteTitle: 'Empório Casarão | Artesanato e Gastronomia de Piracaia - SP',
  siteDescription:
    'Empório de produtos artesanais em Piracaia, SP. Doces caseiros, queijos, antepastos e temperos que celebram a cultura e a gastronomia da nossa cidade. Venha conhecer!',
  keywords: [
    'empório piracaia',
    'produtos artesanais',
    'doces caseiros',
    'antepastos',
    'temperos artesanais',
    'piracaia sp',
    'queijos artesanais',
    'empório casarão',
    'gastronomia de piracaia',
    'cultura de piracaia',
    'artesanato de piracaia',
    'artesanato piracaia sp',
    'produtos artesanais piracaia sp',
    'comida artesanal piracaia',
    'turismo em piracaia',
    'o que fazer em piracaia',
    'sabores da serra da mantiqueira',
  ],
  siteUrl: 'https://emporiocasarao.com.br',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterHandle: '@emporiocasarao',
};

export const heroMedia = {
  image: '/images/i1.jpg',
  ctaHref: '/#produtos',
  visitHref: '/#contato',
};

export const sobreMedia = {
  image: '/images/i2.jpg',
};

export const produtosCategorias = ['doces', 'massas', 'cafe', 'queijos'] as const;

export type ProdutoCategoria = (typeof produtosCategorias)[number];

export const produtosMedia = [
  { id: 'araci', category: 'doces', image: '/images/produtos/araci.jpg' },
  { id: 'rocca', category: 'doces', image: '/images/produtos/rocca.jpg' },
  { id: 'vicosa', category: 'doces', image: '/images/produtos/vicosa.jpg' },
  { id: 'warabu', category: 'doces', image: '/images/produtos/warabu.jpg' },
  { id: 'torta', category: 'doces', image: '/images/produtos/torta-de-maca.jpg' },
  { id: 'pastel', category: 'doces', image: '/images/produtos/pastel-de-belem.jpg' },
  { id: 'nhoque', category: 'massas', image: '/images/produtos/nhoque.jpg' },
  { id: 'pizza', category: 'massas', image: '/images/produtos/pizza-pontes.jpg' },
  { id: 'vitto', category: 'massas', image: '/images/produtos/vitto-paes.jpg' },
  { id: 'cafe', category: 'cafe', image: '/images/produtos/cafe.jpg' },
  { id: 'caipirao', category: 'cafe', image: '/images/produtos/cafe-caipirao.jpg' },
  { id: 'ibyra', category: 'cafe', image: '/images/produtos/ibyra.jpg' },
  { id: 'canastra', category: 'queijos', image: '/images/produtos/queijo-canastra.jpg' },
  { id: 'alagoa', category: 'queijos', image: '/images/produtos/queijos-alagoa.jpg' },
  { id: 'utopi', category: 'queijos', image: '/images/produtos/utopi.jpg' },
] as const satisfies readonly { id: string; category: ProdutoCategoria; image: string }[];

export const galeriaMedia = [
  { image: '/images/galeria/fachada.jpg' },
  { image: '/images/galeria/vo-cecilia.jpg' },
  { image: '/images/galeria/figo-ramy.jpg' },
];
