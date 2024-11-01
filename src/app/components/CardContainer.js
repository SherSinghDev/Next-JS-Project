import React from 'react'
import data from "../data/data.json"
import Card from './Card';


function CardContainer() {
    console.log(data[0]);
    return (
        <>
            <div className='flex flex-wrap gap-y-6 mt-[60px]'>
                {data.map((card) => {
                    return (
                        <Card card={card} key={card.id} />
                    )
                })}
            </div>
        </>
    )
}

export default CardContainer