import React from 'react'
import { ArrowRight, Import } from 'lucide-react'
import TitleComponent from '../TitleComponent'

const ButtonComponent = ({madhu,title,sign}) => {
  return (
    <button style={{backgroundColor:madhu}}
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                    <TitleComponent
                    name={title}
                    />
                  {sign}
                  {/* // <ArrowRight className="ml-2" size={16} /> */}
                </button>
  )
}

export default ButtonComponent