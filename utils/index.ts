{/*BlockCode von NinjaCars unsuccesfulleProbe */}
/*
const request = require('request');

var model = 'camry'
request.get({
  url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
},
function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

{/*BlockCode von NinjaCars unsuccesfulleProbe */
export async function fetchCars(){
  const headers = {
    headers: {
      'X-Api-Key': 'YOUR_API_KEY'
    }
  }

  const responsed = await fetch ( 'https://api.api-ninjas.com/v1/cars?limit=2&model=',{
  headers:headers
  });
  const result = await responsed.json();

  return result;
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

{/*BlockCode von NinjaCars unsuccesfulleProbe */}