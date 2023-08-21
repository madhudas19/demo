import React, { useState } from 'react'

import Header from '../../Component/Header'
const items = [
    {id:1,
        name: "one",
        price: 10,
        quant: 1
    },
    {
        id:2,
        name: "two",
        price: 20,
        quant: 1
    },
    {  id:3,
        name: "three",
        price: 30,
        quant: 1
    },
]
const Cart = () => {
    const [cartItem, setcardItem] = useState([])

    console.log(cartItem, "card");
    const addCard = (ite) => {
        
        let cartItem1 = []

        if (cartItem.length == 0) {
            cartItem1.push(ite)
            setcardItem(cartItem1)
        }
        else {
            const findeItem = cartItem.find((item =>item.id == ite.id))
            if (findeItem) {
                alert('already')
            }else{
               
               
              const dd =  cartItem.push(ite)
                setcardItem(dd)
            }
            
        }
    }
    return (
        <> <Header />
            <div style={{
                width: "800px",
                backgroundColor: "red"
                , height: "300px",
                margin: "0 auto",
                display: "flex"
            }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: "150px", height: "150px", border: "2px solid grey", margin: "2px" }}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={() => { addCard(item) }} className='bg-black text-white p-4'>add</button>
                        </div>
                    )
                })}




            </div>



            <div style={{
                width: "800px",
                backgroundColor: "green"
                , height: "300px",
                margin: "0 auto"
            }}>

                {cartItem.length > 0 ? (
                    cartItem.map((item, i) => {
                        return (
                            <div key={i} style={{ width: "100%", height: "100px", border: "2px solid red", margin: "2px" }}>
                                <p>{item.name}</p>

                            </div>
                        )
                    })

                ) : (null)}



            </div>
        </>
    )
}


export default Cart