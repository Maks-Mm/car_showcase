import { fetchCars } from "@/utils";
import React from "react";

import { Hero, SearchBar, CustomFilter} from "@/components";
import {fuels,yearsOfProduction} from '@/constants';
import CarCard from "@/components/CarCard";


export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}

            <div className="home__cars-wrapper">
            </div>
          </section>
        ) : (
          // <img src="/hero.png" alt="ddd" />
          //<img src="icons8-autoverkauf-50.png" alt="nts" />
            <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops,no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

/*(You are not subscribed to this API.)das Problem legt daran dass ich keine API.Site aboniere ,darum habe ich unter den Leih eine Datenlocke 



Wenn allCars ein Objekt ist, das von der API zurückgegeben wird,
 und Sie sicher sind,
  dass es ein message-Attribut enthält, könnte das Problem möglicherweise 
  in der Struktur oder im Inhalt des message-Attributs liegen.


*/
