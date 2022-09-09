import React,{useState} from 'react'
import data from './Data'


const Pledges = () => {
const [cards, setCards] = useState(data)

  return (
    <>
     <div className='data grid grid-cols-1 gap-4'>
          {cards.map(card =>{
            const {id, title,pledge,desc,left,button} = card

            return (
              <article key={id} className="border-2 p-5 rounded-xl">
                <h2 className='gray font-bold text-lg'>{title}</h2>
                <p className='gray desc font-bold'>{pledge}</p>
                <p className=' gray my-5'>{desc}</p>
                <p className=' gray font-bold text-4xl flex items-center pb-5'>{left}
                 <span className='gray  ml-3 font-light text-gray-600 text-base'>left</span> </p>
                <button className='btn py-2 px-6 rounded-full text-white'>{button}</button>

              </article>
            )
          })}
        </div>
   
    </>
  )
}

export default Pledges