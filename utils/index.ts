
import { CarProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; 
	const mileageFactor = 0.1; 
	const ageFactor = 0.05; 
	
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
	
	
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
	
	return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
	
	const searchParams = new URLSearchParams(window.location.search);
	
	searchParams.set(type, value);
	
	
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
	
	return newPathname;
};


export async function fetchCars() {
const headers = {
   
	'X-RapidAPI-Key': '049df4321cmsh3324b974496b4ecp195f68jsnb537182429eb',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
	
	const response = await  fetch ( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
	{
		headers:headers,
	}
		
);
const result = await response.json();
	

	
	return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;
  
	url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(" ")[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	
	url.searchParams.append('angle', `${angle}`);
  
	return `${url}`;
  } 


/*

ein Link von dem Ninja...

https://rapidapi.com/apininjas/api/cars-by-api-ninjas?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel

vs 

https://api-ninjas.com/api/cars


was ist   ???
*/