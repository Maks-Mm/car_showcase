"use client";
import React, { useState } from "react";
import Image from "next/image";

import SearchManufacturer from "@/components/SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button  type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass-search.png"
      alt={"magnifying glass"}
      width={25}
      height={25}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">

        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
         <SearchButton otherClasses='sm:hidden' />
         </div>

         <div className='searchbar__item'>
         <Image
          src='/icons8-autoverkauf-50.png'
          width={25}
          height={25}
          className='absolute w-[25px] h-[25px] ml-4'
          alt='car model'
        />


        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="auto search"
          className="searchbar__input"
          />
            <SearchButton otherClasses='sm:hidden' />
          </div>

           <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

/*
 */
export default SearchBar;
