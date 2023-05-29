import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const cardsData= [
        {id:1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: fluoride
        },
        {id:2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: cavity
        },
        {id:1,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: whitening
        },
    ]
    return (
        <div className='text-center mt-36'>
            <h3 className="text-xl text-primary uppercase">our servcies</h3>
            <h2 className='text-4xl mt-2'>Services We Provide</h2>
<div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
{cardsData.map(card=> 
            <ServiceCard key={card.id}
            card= {card}
            >

            </ServiceCard>)}
</div>
          
        </div>
    );
};

export default Services;