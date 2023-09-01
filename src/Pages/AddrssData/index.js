import React, {useState}from 'react'
import Header from '../../Component/Header'
import { Button } from '@material-tailwind/react'
import axios from 'axios'


const AddressData = () => {
 const[village,setVillage]=React.useState("")
 const[postoffice,setPostoffice]=React.useState("")
 const[policestation,setPolicestation]=React.useState("")
 

  const getaddress =(e)=>{
    e.preventDefault()

   if (village=="" || postoffice=="" || policestation=="") {
    console.log("object");
   } else {
    axios.post("/saveAddress",{
        vill:village,
        po:postoffice,
        ps:policestation
      })
        .then((res)=>{
            console.log(res.data);
            setPolicestation("")
            setVillage("")
            setPostoffice("")
        })
        .catch((err)=>{
         console.log(err);
        })
   }


   


  }




  return (

  
    <> AddressData
     <Header/>
     <form onSubmit={getaddress}>
        <input onChange={(e)=>{setVillage(e.target.value)}} 
        value={village}
        style={{width:"200px",height:"50px",border:"1px solid red",margin:"2px"}} placeholder='Enter your village'/><br/>

        <input onChange={(e)=>{setPostoffice(e.target.value)}} style={{width:"200px",height:"50px",border:"1px solid red",margin:"2px"}} placeholder='Enter your PostOffice'/><br/>

        <input onChange={(e)=>{setPolicestation(e.target.value)}} style={{width:"200px",height:"50px",border:"1px solid red",margin:"2px"}} placeholder='Enter your Police Station'/>
        <button type='submit' onClick={getaddress} >getdata</button>
     </form>
   

    </>
  )
}

export default AddressData