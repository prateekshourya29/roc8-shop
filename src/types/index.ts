export interface ProductDetails {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: Rating;
};

interface Rating {
  count: number;
  rate: number;
}