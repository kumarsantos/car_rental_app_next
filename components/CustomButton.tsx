'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types';


const CustomButton = ({
    title,
    disabled = false,
    type = 'button',
    containerStyles,
    handleClick,
    rightIcon,
    textStyles
}: CustomButtonProps) => {

    return (
        <button
            disabled={disabled}
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && <div className='relative w-6 h-6'><Image src={rightIcon} fill className='object-contain' alt='right-arrow' /></div>}

        </button>
    )
}

export default CustomButton