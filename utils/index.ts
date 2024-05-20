import { CarProps, FilterProps } from "@/types";

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

// Beispielwerte für die verschiedenen Eigenschaften
const manufacturers = ["alfa romeo", "bmw", "audi", "mercedes", "toyota", "honda"];
const models = ["4c", "m3", "a4", "c-class", "corolla", "civic"];
const years = [2016, 2017, 2018, 2019, 2020, 2021];
const fuelTypes = ["gas", "diesel", "electric", "hybrid"];
const limits = [10, 20, 30, 40, 50];
const drives = ["rwd", "fwd", "awd"];
const classes = ["two seater", "sedan", "suv", "truck"];
const transmissions = ["a", "m"];
const cylindersOptions = [4, 6, 8];
const displacementOptions = [1.8, 2.0, 2.5, 3.0, 3.5];
const img = ["https://media.istockphoto.com/id/1707927462/de/foto/roadtrip-romantik.jpg?s=2048x2048&w=is&k=20&c=9evrtyoh_X-bkfr3F3Fhd1Kju3q5pU3whGY3hEsCWIs=","https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg","https://media.istockphoto.com/id/170450723/de/foto/sports-car.jpg?s=2048x2048&w=is&k=20&c=cTpT66iKp5NICPjytE5fdsD0Pkc-2rttYVv6wxE3OIw="];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomCar(filters) {
  const { manufacturer, year, model, limit, fuel } = filters;

  return {
    manufacturer: manufacturer || getRandomElement(manufacturers),
    year: year || getRandomElement(years),
    model: model || getRandomElement(models),
    limit: limit || getRandomElement(limits),
    fuel: fuel || getRandomElement(fuelTypes),
    drive: getRandomElement(drives),
    class: getRandomElement(classes),
    transmission: getRandomElement(transmissions),
    cylinders: getRandomElement(cylindersOptions),
    displacement: getRandomElement(displacementOptions),
    city_mpg: Math.floor(Math.random() * 20) + 10,  // Random value between 10 and 30
    combination_mpg: Math.floor(Math.random() * 15) + 15,  // Random value between 15 and 30
    highway_mpg: Math.floor(Math.random() * 20) + 25 , // Random value between 25 and 45
	img:getRandomElement(img),
  };
}

// Funktion zum Generieren eines Arrays mit n zufälligen Objekten und spezifischen Filtern
function generateCarsArray(n, filters) {
  const cars = [];
  for (let i = 0; i < n; i++) {
    cars.push(generateRandomCar(filters));
  }
  return cars;
}

// Beispiel für die Filter
const filters = {
  manufacturer: "bmw",
  year: 2020,
  model: "m3",
  limit: 30,
  fuel: "gas"
};

// Generieren eines Arrays mit 100 zufälligen Autos unter Verwendung der Filter
//const carsArray = generateCarsArray(100, filters);

export const generateCarImageUrl = (car, angle) => {
 
	return car.img;
  };
  


export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": "049df4321cmsh3324b974496b4ecp195f68jsnb537182429eb",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const car = {
	city_mpg: 24,
	class: "two seater",
	combination_mpg: 28,
	cylinders: 4,
	displacement: 1.8,
	drive: "rwd",
	fuel_type: "gas",
	highway_mpg: 34,
	make: "alfa romeo",
	model: "4c",
	transmission: "a",
	year: 2016
  };
  const result = generateCarsArray(100, filters);



 

  return result;


}



