import axios,{AxiosError} from "axios"
import {useEffect, useState} from "react"

import { Iproduct } from "../models"
export function useProducts() {
    const [products,setProducts] = useState<Iproduct[]>([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState('')
  
  
    async function getProducts() {
      try {
        setError(" ")
             setLoading(true)
       const response =  await axios.get<Iproduct[]>("https://fakestoreapi.com/products")
       console.log(response.data);
      setProducts(response.data)
      setLoading(false)
            } catch (e:unknown) {
              const error = e as AxiosError
              setLoading(false)
              setError(error.message)
        
      }
    }
  
  
    useEffect(()=>{
      getProducts()
    },[])
    return {products,error,loading}
}