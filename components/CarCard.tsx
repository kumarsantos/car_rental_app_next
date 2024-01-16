'use client';
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { CardDetails, CustomButton } from '.';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const {
        city_mpg,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year } = car;

    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false);

    const handleView = () => { console.log('Hell') };




    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>$</span>
                {carRent}
                <span className='self-end text-[14px] font-medium'>day</span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src='/hero.png' alt='hero' priority fill className='object-contain' />
            </div>
            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/steering-wheel.svg' alt='street-wheel' priority width={20} height={20} />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>

                    </div>
                </div>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/tire.svg' alt='street-wheel' priority width={20} height={20} />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>

                    </div>
                </div>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/gas.svg' alt='street-wheel' priority width={20} height={20} />
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>

                    </div>
                </div>

                <div className='car-card__btn-container'>
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        handleClick={() => setIsOpen(true)}
                        rightIcon='/right-arrow.svg'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'

                    />
                </div>


                <CardDetails
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    car={car}
                />
            </div>

        </div>
    )
}

export default CarCard