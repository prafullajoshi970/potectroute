

import { useEffect,useState } from "react";
import{Link} from 'react-router-dom'
function Products(props) {
  const[data,setData]=useState([]);

useEffect(() => {

    fetch("https://fakestoreapi.com/products")
    .then (resp =>resp.json())
    .then(data=>setData(data))
    
    .catch(error=>console.log(error))


},[])

console.log(data)


  return (
    <div className='NavBarc'>
     
    {
      data.length >0 ?(
         <div className='cardContainer'>
            {
               data.map((product)=>{
                return( <div className='card'>
                  <img src={product.image} alt=""></img>
                  <h6>{product.title}</h6>
                  <p>{product.category}</p>
                  <p>{product.rating.rate +'⭐'}</p>
                 <Link to={`/Addtocart/${product.id}`}> <button>AddtoCart</button> </Link> 

                  </div>) 
               })

            }
         </div>
      ):(<h2>NoData Found</h2>)
    }
     
     
    </div>
  )
}

export default Products;