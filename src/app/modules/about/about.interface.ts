export type TEducation = {
  degree: string;
  institution: string;
  department?: string;
  year?: string;
};

export type TExperience = {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
};

export interface TService {
  id: number;
  title: string;
  description: string;
  iconName: string;
}


export type TAbout = {
  image: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  bio: string;
  education: TEducation[];
  experience?: TExperience[];
  services: TService[];
  address: string;
  resumeLink?: string;
  _id?: string;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
