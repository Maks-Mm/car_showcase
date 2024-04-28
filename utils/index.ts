/*const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/

export async function fetchCars() {
const headers = {
   
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
}

const response = await fetch ( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?',{
    headers:  headers,
});

const result = await response.json()

return result;

/*

ein Link von dem NinjaResours

https://rapidapi.com/apininjas/api/cars-by-api-ninjas?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel
 
vs 

https://api-ninjas.com/api/cars


was ist der Unterschied ???
*/