import Product from "./components/Product"
import { useProducts } from "./hooks/products"

const App = () => {
  const {loading,error,products} = useProducts()

  return (
    <div className='w-full flex flex-col justify-center items-center  '>
        {loading && <p className="text-center text-[black]">Loading...</p> }
        {error && <p className="text-center text-[red]">{error}</p>}
        
      {products.map((el)=><Product product={el} key={el.id}/>) }


    </div>
  )
} 

export default App