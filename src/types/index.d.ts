interface IProduct {
  _id: string;
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  createdAt: string;
  updatedAt: string;
}

interface ICategory {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export {IProduct, ICategory};
