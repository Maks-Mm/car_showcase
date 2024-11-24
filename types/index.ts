import { MouseEventHandler } from "react";

interface CarProps {
  manufacturer: string;
  year: number;
  model: string;
  limit: number;
  fuel: string;
  fuel_type: string;  // Hier fehlt in deinem Objekt der Wert
  markets: string[];   // Auch hier fehlt der Wert
  drive: string;
  class: string;
  transmission: string;
  cylinders: number;
  displacement: number;
  city_mpg: number;
  combination_mpg: number;
  highway_mpg: number;
  img: string;
}

//Probecodeblock fur CarCard
 export interface Props {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  img:string;
 }

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}