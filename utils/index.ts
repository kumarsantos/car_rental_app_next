import { CarProps, FilterProps } from "@/types";
import axios from "axios";



export async function fetCars(filters: FilterProps) {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${filters.model}&make=${filters.manufacturer}&year=${filters.year}&limit=${filters.limit}&fuel_type=${filters.fuel}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ca42b68a4msh293d270aa12ee41p1a57edjsn7a0ba4d17223',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
            "Content-type": 'json/application'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }

}



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

  export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
  };

//   export const deleteSearchParams = (type: string) => {
//     // Set the specified search parameter to the given value
//     const newSearchParams = new URLSearchParams(window.location.search);

//     // Delete the specified search parameter
//     newSearchParams.delete(type.toLocaleLowerCase());

//     // Construct the updated URL pathname with the deleted search parameter
//     const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

//     return newPathname;
//   };

//   export async function fetchCars(filters: FilterProps) {
//     const { manufacturer, year, model, limit, fuel } = filters;

//     // Set the required headers for the API request
//     const headers: HeadersInit = {
//       "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
//       "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//     };

//     // Set the required headers for the API request
//     const response = await fetch(
//       `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//       {
//         headers: headers,
//       }
//     );

//     // Parse the response as JSON
//     const result = await response.json();

//     return result;
//   }

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 