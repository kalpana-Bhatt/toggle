import React from 'react'
import { useState } from 'react'
function DisplayAcc() {
  const [Toggle, setToggle] = useState(false);
 
  const Data=[
    {
     id:"1",
     title:"this is first accordian",
     desc:"this is description of accordian",
     show:false,
    },
    {
        id:"2",
        title:"this is Second accordian",
        desc:"this is second  description of accordian",
        show:false
       }
]
const [AllData ,setAllData]=useState(Data)

function showtoggle(id){
   

   let chdt= AllData.map((item)=>{
        if(item.id==id){
            item.show=!item.show;
        }
        
        return item
    })

  setAllData(chdt)

}
  return (
    <>
    {AllData.map((item)=>{
        return(<>
         <div className='bg-slate-400 w-[96%] rounded-md mt-4 mx-auto' key={item.id}>
        <div className="p-2" >
             <p className='font-bold text-white capitalize cursor-pointer' onClick={(e)=>{
                showtoggle(item.id)  
             }}>{item.title} </p>
             
              <p className={item.show ?'block text-white capitalize text-md ':'hidden'}>{item.desc}</p>
              
        </div>
    </div>
        </>)
    })}
   
    </>
  )
}

export default DisplayAcc