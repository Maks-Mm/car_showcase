"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import SearchManufacturer from "@/components/SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button  type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass-search.png"
      alt="magnifying glass"
      width={25}
      height={25}
      className="object-contain"
      style={{ marginLeft: '20px' }}
    />
  </button>
);

const SearchBar = () => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
const router = useRouter();


  const handleSearch = (e:React.FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();

    if(searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }
  setModel(searchModel)
  setSearchManufacturer(searchManufacturer)
  }

  const updateSearchParams = (model:string, manufacturer:string) => {
const searchParams = new URLSearchParams(window.location.search);

/*
if(model){
  searchParams.set('model',model)
}else{
  searchParams.delete('model')
}
if(manufacturer){
  searchParams.set('manufacturer',manufacturer)
}else{
  searchParams.delete('manufacturer')
}
const newPathname = `${window.location.pathname}?${searchParams.toString()}`

router.push(newPathname)

  }
  */

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
<br />
           <SearchButton  otherClasses='max-sm:hidden'   />
    </form>
  );
};


export default SearchBar;
