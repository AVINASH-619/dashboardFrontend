import { useEffect } from "react";

const Home=()=>
{
    useEffect(()=>
    {
      console.log("From frontend console")  
      fetch("http://localhost:8000/").
      then((res)=>res.json()).
      then((data)=>{console.log(data)}).
      catch((err)=>{console.log(err)})
    },[])
    return(
        <h1>Home page</h1>
    )
}

export default Home;