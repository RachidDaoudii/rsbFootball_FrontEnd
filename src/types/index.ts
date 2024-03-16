export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  id: number;
  image:string;
  title: string;
  content:string;
  createdAt?: string;
  deletedAt:string;
  updatedAt:string;
  categories:{
    name:string
  },
  users:{
    lastName:string,
    firstName:string
  }
  comments?:Array<
    {
      id:number;
      content:string;
      createdAt:string;
      deletedAt:string;
      updatedAt:string;
    }
  >
};



export type categoriesPlayer={
  id: number;
  image:string;
  name: string;
}

export type comment={
  id:number;
  content:string;
  createdAt:string;
}


export type Product = {
  id:number;
  name:string;
  image:string;
  description:string;
  price:number;
  qnt:number;
  Category:{
    name:string;
  }
}


export type category={
  id: number;
  image:string;
  name: string;
}


export type Player = {
  Date_of_birth: string;
  createdAt: string;
  deletedAt: string;
  experience: string;
  firstname: string;
  goals_scored: number;
  id: number;
  image: string;
  lastname: string;
  matches_played: number;
  nationality: string;
  number: number;
  position: string;
  size: number;
  updatedAt: string;
  weight: number;
};


export type Staff = {
  Date_of_birth: string;
  createdAt: string;
  deletedAt: string;
  experience: string;
  firstname: string;
  id: number;
  image: string;
  lastname: string;
  nationality: string;
  role: string;
  size: number;
  updatedAt: string;
  weight: number;
};


export type CartShopping<Product> = {
  shoppingCart:Product[]
}