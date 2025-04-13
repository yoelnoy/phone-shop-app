export type Phone = {
  id: string;
  name: string;
  brand: string;
  description: string;
  basePrice: number;
  rating: number;
  imageUrl: string;
  colorOptions: {
    name: string;
    hexCode: string;
    imageUrl: string;
  }[];
  storageOptions: {
    capacity: string;
    price: number;
  }[];
  specs: {
    screen: string;
    resolution: string;
    os: string;
    processor: string;
    mainCamera: string;
    selfieCamera: string;
    battery: string;
    screenRefreshRate: string;
  };
  similarProducts: {
    id: string;
    name: string;
    brand: string;
    basePrice: number;
    imageUrl: string;
  }[];
};
