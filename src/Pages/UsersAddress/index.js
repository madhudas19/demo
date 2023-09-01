import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Header from '../../Component/Header'
import axios from 'axios'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


const UsersAddress = () => {

  const [users, setUsers] = useState([])
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };

  const handleshow = () => {
    setShow(!show)
  }


  //get data from backend
  console.log("set", users);
  const getAddress = () => {
    axios.get("getAllAddress")
      .then((res) => {
        // console.log("res",res);
        console.log("res", res.data);
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err, "err");
      })
  }


  //data delete func create

  const deleteAddress = (id) => {
    axios.post("dataDelete", {
      id: deleteId
    })
      .then((res) => {
        console.log("res", res.data);
        getAddress()
        handleOpen()
        setOpen1(true)
        setTimeout(() => {
          setOpen1(false)
        }, 2000)

      })
      .catch((err) => {
        console.log("err", err);
      })
  }






  useEffect(() => {
    getAddress()
  }, [])








  return (

    <>
      <Header />

      {users.length > 0 && users.map((item, i) => {

        return (
          <div key={i} style={{ height: "50px", weight: "100px", backgroundColor: "brown", display: "flex", margin: "5px auto", justifyContent: "space-evenly", alignItems: "center" }}>


            <p>{item._id}</p>
            <p>{item.po}</p>
            <p>{item.ps}</p>

            <Button onClick={() => {
              setOpen(!open)
              setDeleteId(item._id)
            }
            }>delete</Button>

          </div>

        )
      })}
      <Button onClick={handleshow}>show</Button>

      <div style={{ width: "100px", height: "100px", backgroundColor: show ? "red" : "green" }}></div>


      {!open1 ?
        <>
          <p style={{ color: open1 ? "green" : "red" }}>this is p tag</p><p style={{ color: open1 ? "green" : "red" }}>this is p tag</p>
        </>
        : null}



      <>

        <Dialog size="sm" open={open} handler={handleshow}>
          <DialogHeader>Are you sure to delete record</DialogHeader>

          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleshow}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={deleteAddress}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
      <>

        <Dialog size="sm" open={open1} handler={handleOpen}>
          <DialogHeader>delete successful</DialogHeader>


        </Dialog>
      </>
      return (
      <div className="mx-auto my-4 max-w-4xl md:my-6">
        <div className="overflow-hidden  rounded-xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product List */}
            <div className="bg-gray-100 px-5 py-6 md:px-8">
              <div className="flow-root">
                <ul className="-my-7 divide-y divide-gray-200">

                </ul>
              </div>
              <hr className="mt-6 border-gray-200" />
              <form action="#" className="mt-6">
                <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                  <div className="flex-grow">

                  </div>
                  <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">

                  </div>
                </div>
              </form>
              <ul className="mt-6 space-y-3">
                
              </ul>
            </div>

            {/* Contact Info */}
            <div className="px-5 py-6 text-gray-900 md:px-8">
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="py-6">
                    <h2 className="text-base  font-bold">Contact Information</h2>

                    <form action="#" className="mt-6">
                      <div className="space-y-5">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div>
                          <button
                            type="button"
                            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="py-6">
                    <h2 className="text-base font-bold text-gray-500">Shipping Information</h2>
                  </div>
                  <div className="py-6">
                    <h2 className="text-base font-bold text-gray-500">Billing Information</h2>
                  </div>
                  <div className="py-6">
                    <h2 className="text-base font-bold text-gray-500">Payment Method</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )

    </>
  )
}


export default UsersAddress




