import { Product, Service, Review } from './types';

export const CATEGORIES = ['Todos', 'iPhone', 'iPad', 'Watch', 'MacBook', 'Acessórios'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 12',
    category: 'iPhone',
    price: 1699.00,
    originalPrice: 2100.00,
    condition: 'Seminovo',
    image: 'https://i.imgur.com/7tYGMvf.png',
    images: ['https://i.imgur.com/7tYGMvf.png'],
    specs: { storage: '64GB', screen: '6.1"', chip: 'A14 Bionic' },
    description: 'O melhor custo-benefício da atualidade. Tela OLED, 5G e câmeras incríveis.',
    rating: 4.8,
    reviewsCount: 342,
    stock: 15
  },
  {
    id: '2',
    name: 'iPhone 13',
    category: 'iPhone',
    price: 2299.00,
    originalPrice: 2899.00,
    condition: 'Seminovo',
    image: 'https://i.imgur.com/H4G1vbz.png',
    images: ['https://i.imgur.com/H4G1vbz.png'],
    specs: { storage: '128GB', screen: '6.1"', chip: 'A15 Bionic' },
    description: 'Bateria de longa duração e modo Cinema. O queridinho dos usuários.',
    rating: 4.9,
    reviewsCount: 520,
    stock: 12
  },
  {
    id: '3',
    name: 'iPhone 14',
    category: 'iPhone',
    price: 2499.00,
    originalPrice: 3200.00,
    condition: 'Seminovo',
    image: 'https://i.imgur.com/u7o6oKp.png',
    images: ['https://i.imgur.com/u7o6oKp.png'],
    specs: { storage: '128GB', screen: '6.1"', chip: 'A15 Bionic (5-core GPU)' },
    description: 'Fotos incríveis em pouca luz e Detecção de Acidente.',
    rating: 4.9,
    reviewsCount: 120,
    stock: 8
  },
  {
    id: '4',
    name: 'iPhone 14 Pro',
    category: 'iPhone',
    price: 3499.00,
    originalPrice: 4500.00,
    condition: 'Seminovo',
    image: 'https://i.imgur.com/RyZbnav.png',
    images: ['https://i.imgur.com/RyZbnav.png'],
    specs: { storage: '128GB', screen: '6.1" ProMotion', chip: 'A16 Bionic' },
    description: 'Dynamic Island, câmera de 48MP e Tela Sempre Ativa.',
    rating: 5.0,
    reviewsCount: 85,
    stock: 5
  },
  {
    id: '5',
    name: 'iPhone 15 Pro',
    category: 'iPhone',
    price: 4799.00,
    originalPrice: 6500.00,
    condition: 'Seminovo',
    image: 'https://i.imgur.com/NeFTmkD.png',
    images: ['https://i.imgur.com/NeFTmkD.png'],
    specs: { storage: '512GB', screen: '6.1"', chip: 'A17 Pro' },
    description: 'Design em titânio aeroespacial. O chip mais rápido em um smartphone.',
    rating: 5.0,
    reviewsCount: 45,
    stock: 4
  },
  {
    id: '6',
    name: 'iPhone 16',
    category: 'iPhone',
    price: 4299.00,
    originalPrice: 5200.00,
    condition: 'Novo',
    image: 'https://i.imgur.com/y5Dx9yJ.png',
    images: ['https://i.imgur.com/y5Dx9yJ.png'],
    specs: { storage: '128GB', screen: '6.1"', chip: 'A18' },
    description: 'Controle de Câmera, Inteligência Apple e botão de Ação.',
    rating: 5.0,
    reviewsCount: 12,
    stock: 10
  },
  {
    id: '7',
    name: 'iPhone 17 Pro Max',
    category: 'iPhone',
    price: 9199.00,
    originalPrice: 10500.00,
    condition: 'Novo',
    image: 'https://i.imgur.com/ay6sDRd.png',
    images: ['https://i.imgur.com/ay6sDRd.png'],
    specs: { storage: '256GB', screen: '6.9"', chip: 'A18 Pro' },
    description: 'O maior display e a maior autonomia de bateria já vista num iPhone.',
    rating: 5.0,
    reviewsCount: 5,
    stock: 3
  },
  {
    id: '8',
    name: 'iPhone 17 Pro Max (512GB)',
    category: 'iPhone',
    price: 11499.00,
    originalPrice: 12500.00,
    condition: 'Novo',
    image: 'https://i.imgur.com/ay6sDRd.png',
    images: ['https://i.imgur.com/ay6sDRd.png'],
    specs: { storage: '512GB', screen: '6.9"', chip: 'A18 Pro' },
    description: 'Potência máxima e armazenamento de sobra para profissionais.',
    rating: 5.0,
    reviewsCount: 2,
    stock: 2
  },
  {
    id: '9',
    name: 'iPad 11 (128GB)',
    category: 'iPad',
    price: 3299.00,
    originalPrice: 4200.00,
    condition: 'Novo',
    image: 'https://i.imgur.com/f7rJDqy.png',
    images: ['https://i.imgur.com/f7rJDqy.png'],
    specs: { storage: '128GB', screen: '10.9"', chip: 'A15 Bionic' },
    description: 'Versatilidade, potência e design tudo em um só lugar. Ideal para trabalhar e criar.',
    rating: 4.9,
    reviewsCount: 15,
    stock: 8
  },
  {
    id: '10',
    name: 'Apple Watch Ultra 2',
    category: 'Watch',
    price: 6299.00,
    originalPrice: 7500.00,
    condition: 'Novo',
    image: 'https://i.imgur.com/nInQCxb.png',
    images: ['https://i.imgur.com/nInQCxb.png'],
    specs: { storage: '64GB', screen: '49mm', chip: 'S9 SiP' },
    description: 'O Apple Watch mais robusto e capaz. Caixa de titânio e GPS de precisão.',
    rating: 5.0,
    reviewsCount: 10,
    stock: 5
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Troca de Tela',
    description: 'Substituição de display quebrado ou com defeito. Peças originais ou premium.',
    priceEstimate: 'A partir de R$ 400',
    duration: '2-4 horas',
    icon: 'smartphone'
  },
  {
    id: '2',
    name: 'Troca de Bateria',
    description: 'Recupere a autonomia do seu aparelho. Serviço rápido e com garantia.',
    priceEstimate: 'A partir de R$ 250',
    duration: '1 hora',
    icon: 'battery'
  },
  {
    id: '3',
    name: 'Reparo em Placa',
    description: 'Diagnóstico avançado e microsoldagem para recuperar aparelhos mortos.',
    priceEstimate: 'Sob consulta',
    duration: '3-5 dias',
    icon: 'cpu'
  },
  {
    id: '4',
    name: 'Limpeza e Manutenção',
    description: 'Limpeza interna, troca de pasta térmica e desoxidação.',
    priceEstimate: 'R$ 150',
    duration: '2 horas',
    icon: 'tool'
  }
];

export const REVIEWS: Review[] = [
  { id: '1', user: 'Carlos Silva', rating: 5, comment: 'Atendimento impecável! O iPhone chegou em 1 dia em Salvador.', date: 'Há 2 dias' },
  { id: '2', user: 'Fernanda Oliveira', rating: 5, comment: 'Comprei um seminovo e parece que saiu da caixa. Recomendo muito.', date: 'Há 1 semana' },
  { id: '3', user: 'Ricardo Santos', rating: 4, comment: 'Preço justo e suporte técnico muito atencioso na loja física.', date: 'Há 3 semanas' }
];