'use client';

import React, { useEffect, useState } from 'react';
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState<any[]>([]);  // Der Typ ist anpassbar
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCars({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 10,
          model: searchParams.model || "",
        });

        // Annahme, dass die Antwort ein 'cars' Array und eventuell eine 'message' enthält
        setAllCars(response?.cars || []);
        setErrorMessage(response?.message || "");
      } catch (error) {
        setErrorMessage("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);  // Wenn searchParams sich ändern, wird fetchData erneut ausgeführt

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Find the car you like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : !isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{errorMessage || "No message available"}</p>
          </div>
        )}
      </div>
    </main>
  );
}
