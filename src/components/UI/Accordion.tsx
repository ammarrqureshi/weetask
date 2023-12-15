import React, { ReactNode, useState } from 'react'
import { useSpring, animated } from '@react-spring/web';

interface AccordionProps{
    title:string;
    children: ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({children, title}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {height, opacity} = useSpring({
        from:{height:0, opacity:0},
        to: {height: isOpen ? 'auto' : 0 , opacity: isOpen ? 1 : 0}
    })
  return (
    <div>
        <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer'>
                {title}
        </div>
    </div>
  )
}
