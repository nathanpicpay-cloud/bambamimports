export interface Product {
  id: string;
  name: string;
  category: 'iPhone' | 'iPad' | 'Watch' | 'MacBook' | 'Acessórios';
  price: number;
  originalPrice?: number;
  condition: 'Novo' | 'Seminovo';
  image: string;
  images: string[];
  specs: {
    storage?: string;
    color?: string;
    screen?: string;
    chip?: string;
  };
  description: string;
  rating: number;
  reviewsCount: number;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceEstimate: string;
  duration: string;
  icon: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
