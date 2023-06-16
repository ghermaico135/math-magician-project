/*eslint-disabled */
import React,{useState,useEffect, useLayoutEffect} from "react";

function Quote(){
  const[category, setCategory] = useState([])
  const[loading, isLoading] = useState(false)
  const[error,hasError] = useState(false)

  useEffect(()=>{
    const fetchQuote = async()=>{
      isLoading(true)
      try{
        const fetchResponse = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`)
       
        const response = await fetchResponse.json()
        setCategory(response)
      } catch(error){
        hasError(true)
      }
      isLoading(false)
    }
    fetchQuote()
  },[category,isLoading])

  // const handleDisplay =() =>{
  //   {category.map((item)=>(
  //     <ul>
  //       <li key={item.id}>{item.quote}</li>
  //       <li key={item.id}>{item.author}</li>
  //       <li key={item.id}>{item.category}</li>
  //     </ul>
      
  // }

  return(
    <div>
      {category.map((item)=>(
        <ul>
          <li key={item.id}>{item.quote}</li>
          <li key={item.id}>{item.author}</li>
          <li key={item.id}>{item.category}</li>
        </ul>
        
      ))
      }
    </div>
  )
}

export default Quote