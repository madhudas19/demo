
import React,{useEffect} from 'react'
import {useNavigate,Navigate} from "react-router-dom"
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { Button } from "@material-tailwind/react";
import { useSelector } from 'react-redux';








const About = () => {
  const navigate =useNavigate()
  const {token} = useSelector(state=>state.user)
  
  // useEffect(()=>{
  //   const token =JSON.parse(localStorage.getItem("token")
  //  )
  //   console.log(token,"tok");
  
  //  if (!token) {
  //   navigate("/login")
  //  }
  //  },[] )
  if (token == "") {
    return <Navigate to="/login" replace/>;

  }
//  console.log(user.token,"use");

 return (
  <>
 
    <section className="px-2 py-10 md:px-0">
       <Header/>
      
      <div className="mx-auto max-w-4xl">
        <div className=" md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat
                laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">John Doe</p>
            <p className="mt-1 text-base text-gray-600">Frontend Developer at DevUI</p>
            <Button>Button</Button>;
            <Button color="red" variant="gradient" fullWidth>block level button</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    
    </>
  )
}
export default About