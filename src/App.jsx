import { useState,useEffect } from 'react'
import './App.css'
import { PostItem } from './assets/components/postItem'

function App() {

  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [page,setPage] = useState(1) 
async function fetchData(){
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    let finalData = await res.json();
  setData(finalData)
  setIsLoading(false);
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  fetchData();
},[page])


return(
  <>
  {isLoading ?  <p>Data is loading... Please wait</p>  : <PostItem data ={data}/>}
  
   <div style={{display:"flex",  justifyContent:"space-evenly"}} >
    
   {page == 1 ?  null :  <button onClick={() =>{
      if(page > 1 ){
           setPage(page - 1)
      }
    }}>Prev</button>}
    <p>Page  {page}</p>
    <button onClick={() =>{
    {page <  10 ?  setPage(page +1 ) : null }
    }}>Next</button>

   </div>
  </>
)
}

export default App
