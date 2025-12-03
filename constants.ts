import { Product, Service, Review } from './types';

export const CATEGORIES = ['Todos', 'iPhone', 'iPad', 'Watch', 'MacBook', 'Acessórios'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    category: 'iPhone',
    price: 8299.00,
    originalPrice: 9500.00,
    condition: 'Novo',
    image: 'https://picsum.photos/seed/iphone15promax/600/600',
    images: ['https://picsum.photos/seed/iphone15promax/600/600', 'https://picsum.photos/seed/iphone15detail/600/600', 'https://picsum.photos/seed/iphone15side/600/600'],
    specs: { storage: '256GB', color: 'Titânio Natural', screen: '6.7"', chip: 'A17 Pro' },
    description: 'O iPhone definitivo. Design em titânio, botão de Ação e a câmera mais poderosa já feita pela Apple.',
    rating: 5,
    reviewsCount: 124,
    stock: 10
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    category: 'MacBook',
    price: 7499.00,
    originalPrice: 8999.00,
    condition: 'Novo',
    image: 'https://picsum.photos/seed/macbookair/600/600',
    images: ['https://picsum.photos/seed/macbookair/600/600', 'https://picsum.photos/seed/macbookside/600/600'],
    specs: { storage: '256GB', color: 'Midnight', screen: '13.6"', chip: 'M2' },
    description: 'Ultrafino, ultrarrapido. O chip M2 inicia a nova geração de processadores Apple Silicon.',
    rating: 4.9,
    reviewsCount: 89,
    stock: 5
  },
  {
    id: '3',
    name: 'Apple Watch Ultra 2',
    category: 'Watch',
    price: 5999.00,
    condition: 'Novo',
    image: 'https://picsum.photos/seed/watchultra/600/600',
    images: ['https://picsum.photos/seed/watchultra/600/600', 'https://picsum.photos/seed/watchstrap/600/600'],
    specs: { color: 'Titânio', screen: '49mm' },
    description: 'O relógio esportivo e de aventura definitivo. Caixa de titânio robusta e leve.',
    rating: 4.8,
    reviewsCount: 45,
    stock: 8
  },
  {
    id: '4',
    name: 'iPad Air 5',
    category: 'iPad',
    price: 4299.00,
    condition: 'Seminovo',
    image: 'https://picsum.photos/seed/ipadair/600/600',
    images: ['https://picsum.photos/seed/ipadair/600/600'],
    specs: { storage: '64GB', color: 'Azul', screen: '10.9"', chip: 'M1' },
    description: 'Leve, colorido e potente. Com chip M1, 5G ultrarrapido e câmera frontal Ultra Wide.',
    rating: 4.7,
    reviewsCount: 32,
    stock: 3
  },
  {
    id: '5',
    name: 'iPhone 13',
    category: 'iPhone',
    price: 3599.00,
    originalPrice: 4200.00,
    condition: 'Seminovo',
    image: 'https://picsum.photos/seed/iphone13/600/600',
    images: ['https://picsum.photos/seed/iphone13/600/600'],
    specs: { storage: '128GB', color: 'Estelar', screen: '6.1"', chip: 'A15' },
    description: 'O iPhone com o melhor custo benefício do mercado atualmente.',
    rating: 4.8,
    reviewsCount: 250,
    stock: 15
  },
   {
    id: '6',
    name: 'AirPods Pro (2ª Geração)',
    category: 'Acessórios',
    price: 1899.00,
    condition: 'Novo',
    image: 'https://picsum.photos/seed/airpods/600/600',
    images: ['https://picsum.photos/seed/airpods/600/600'],
    specs: { color: 'Branco', chip: 'H2' },
    description: 'Cancelamento Ativo de Ruído até 2x melhor e Áudio Espacial Personalizado.',
    rating: 4.9,
    reviewsCount: 150,
    stock: 20
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
