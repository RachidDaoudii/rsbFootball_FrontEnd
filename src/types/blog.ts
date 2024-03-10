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
  createdAt:string;
  categories:{
    name:string
  },
  users:{
    lastName:string,
    firstName:string
  }
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
