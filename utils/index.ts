
export async function fetchCars() {

    const headers  = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    }
}
    /*
    const response = await fetch('https://api.api-ninjas.com/v1/cars?limit=2&model=',{
    headers:headers,
      });

      const result = await response.json();

      result;
    }*/
  