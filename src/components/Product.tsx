import { useState,} from 'react';
import { Iproduct } from '../models'


interface ProductProps {
  product:Iproduct
}
const Product = ({product}:ProductProps) => {
  const [details,setDetails] = useState(false)
  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400"
  const btnClasses = ["p-2 text-black rounded-[12px]",btnBgClassName]
  
  return (
    <div className='flex flex-col items-center w-[50%] bg-[white] border-2 mt-3 mx-auto justify-evenly p-2'>
      <div className='w-[45%]'>

     <img src={product.image} alt={product.title} className='w-[200px] h-[300px]' />
      </div>
      <div className='w-[45%]'>

     <p className=''>{product.rating.rate}</p>
     <p>title: {product.title}</p>
      <button onClick={()=>setDetails((prev)=> !prev)} className={btnClasses.join(" ")}>{details?"Hide Details":"Show Details"}</button>
      
      {
        details && <div>
       description : {product.description}
      </div>

      }
   

      </div>
    </div>
  )
}

export default Product