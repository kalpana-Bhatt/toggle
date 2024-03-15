
import DisplayAcc from "./Accordian/DisplayAcc"

  

import { useEffect ,useState } from 'react'
function App() {
  const [Data ,SetData]=useState(null)
  
  useEffect(()=>{
    let storeItem=localStorage.getItem("user");
    console.log("stroeItem" ,storeItem) 
    
    if(storeItem){
       SetData(JSON.stringify(storeItem));
    }

  },[])

  return (
    <>
    <div className="main h-[100vh] w-full  m-0 p-2">



    <DisplayAcc/>
    </div>
    </>
  )
}

export default App
