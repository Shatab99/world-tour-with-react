function Country({country}) {
    const {name, flags} = country
  return (
    <>
    <div className="border border-purple-500 px-12 py-5 my-5 rounded-lg">
            <h1 className=" font-semibold my-2">{name?.common}</h1>
            <img  src={flags?.png} className='w-32 h-20'  />
    </div>
    </>
  )
}

export default Country
