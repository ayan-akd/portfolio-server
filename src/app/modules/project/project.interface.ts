export type TProject = {
  title: string;
  images: string[];
  description: string;
  technology: string[];
  liveLink: string;
  clientRepo: string;
  serverRepo?: string;
  videoLink?: string;
  serial?: number;
  isFeatured?: boolean;
  _id?: string;
  __v: number;
  createdAt?: Date;
  updatedAt?: Date;
};
