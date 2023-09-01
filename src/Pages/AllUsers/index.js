import React,{useState,useEffect} from 'react'
import Header from '../../Component/Header'
import axios from 'axios'
import { Button } from "@material-tailwind/react";



const AllUser = () => {
    const [users,setUsers]=useState([])
    const [count,setCount]=useState(0)
    
//  
  const getAllUsers=async()=>{
    
    try {
    const madhu=await axios.get("allusers")
    console.log(madhu.data,"data");
    setUsers(madhu.data)
    } catch (error) {
      console.log(error,"err");
    }
  




    // axios.get("allusers")
    // .then((res)=>{
    //     // console.log(res.data);
    //     setUsers(res.data)
    // })
    // .catch((err)=>{
    //  console.log(err);
    // })

  }


  const deleteUser=(id)=>{
    axios.post("deleteuser",{
        id:id
    })
    .then((res)=>{
        // console.log(res.data);
        setUsers(res.data)
    })
    .catch((err)=>{
     console.log(err);
    })
    // setCount(count+1)
  }


useEffect(()=>{
    getAllUsers()
},[])
useEffect(()=>{
   console.log("use");
},[count])

    return (
      <> <Header/>
    
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.{count}
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Phone Number</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {users.length>0 && users.map((item) => (
                      <tr key={item._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {/* <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              /> */}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-700">{item?.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{}</div>
                          <div className="text-sm text-gray-700">{}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <Button onClick={()=>{
                            deleteUser(item._id)
                        }} color="red" size="sm">delete</Button>
                        <Button className='ml-1' size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AllUser
