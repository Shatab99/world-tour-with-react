import { useEffect } from "react"
import { useState } from "react"
import Country from "../country/Country"


function Countries() {

    const [countries, setCountries]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])


  return (
    <>
    <div className="px-20">
        <h1 className="text-3xl">Countries : {countries.length}</h1>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-x-6">
        {
            countries.map(country =><Country key={country.cca3} country={country}></Country> )
        }
        </div>

    </div>
    </>
  )
}

export default Countries
