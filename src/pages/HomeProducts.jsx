import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HomeProducts = () => {

  const [dataProducts, setDataProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${20}`)
    const data = await response.json();
    setDataProducts(data)
  }   
  
  useEffect(() => {
    fetchProducts();
  },[])
  
  console.log(dataProducts)
  
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Busqueda de productos..." className="border-2 py-1 px-3 w-64" />
      </form>
      <article className="flex flex-wrap justify-center gap-5 py-5">
        {
          dataProducts && dataProducts.length > 0 ? dataProducts.map((product) => (
            <Link state={{logged: true}} to={`/dashboard/products/${product.id}`} key={product.id} className="grid grid-cols-1 grid-rows-2 border-2 rounded-lg w-64 max-w-[16rem] h-[20rem]">
              <section className="w-full h-full">
                <img src={product.image} alt="" className="w-full h-full object-contain" />
              </section>
              <section className="mt-2 p-1">
                <h1 className="text-lg font-bold line-clamp-2">{product.title}</h1>
                <p className="line-clamp-3">{product.description}</p>
              </section>
            </Link>
          
        )) : <div>Cargando ...</div>}
        
      </article>
    </div>
  )
}

export default HomeProducts