export type CurrencyCode = 'CAD' | 'USD' | 'AUD' | 'EUR' | 'GBP';

export type Collections = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

export type AvailableColor = {
  name: string;
  bgColor: string;
};

export type Image = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

export type Detail = {
  name: string;
  items: string[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  availableColors: AvailableColor[];
  images: Image[];
  details: Detail[];
};

export type OrderStatus = {
  status: 'out-for-delivery' | 'delivered' | 'cancelled';
  date?: string | null;
};

export type Quantity = {
  quantity: number;
};
export type ProductWithQuantity = Omit<
  Product,
  'images' | 'availableColors' | 'details' | 'rating'
> &
  Quantity;

export type ProductWithStatus = Omit<
  Product,
  'images' | 'availableColors' | 'details' | 'rating'
> &
  OrderStatus;

export type Order = {
  id: number;
  orderId: string;
  date: string;
  total: number;
  products: ProductWithStatus[];
};

export type AddressType = 'shipping' | 'billing';

export type AddressTypes = {
  value: AddressType;
  label: string;
};

export type country = {
  name: string;
  value: string;
};

export type Address = {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  zipcode: string;
  street: string;
  province: string;
  country: string;
  landmark: string;
  alternateMobile: string;
  addressType: string;
};
