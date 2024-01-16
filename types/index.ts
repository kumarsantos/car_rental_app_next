import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean;
    type?: 'button' | 'submit';
    rightIcon?: string;
    textStyles?: string;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    type: string;
    options: OptionProps[];
}

export interface SearchBarProps {
    // title: string;
    // containerStyles?: string;
    // handleClick: MouseEventHandler<HTMLButtonElement>,
    // disabled?: boolean;
    // type?: 'button' | 'submit';
}
export interface SearchManufacturerProps {
    manufacturer?: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
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
}
export interface FilterProps {
    model: string;
    manufacturer: string;
    year: number;
    limit: number;
    fuel: string;
}
export interface ShowMoreProps {
    isNext: boolean;
    pageNumber: number;
}

