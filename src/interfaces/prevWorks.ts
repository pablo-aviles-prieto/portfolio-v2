import { techs } from '../utils/const';

export type PrevWork = {
  title: string;
  image: string;
  descriptionEn: string;
  subDescriptionEn?: string;
  descriptionEs: string;
  subDescriptionEs?: string;
  techs: Array<keyof typeof techs>;
  github: string;
  github2?: string;
  website?: string;
};
