import React, { ReactNode, useState } from 'react'
import { useSpring, animated } from '@react-spring/web';

interface AccordionProps{
    title:string;
    children: ReactNode;
    className: string;
}

export const Accordion: React.FC<AccordionProps> = ({children, title, className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {height, opacity} = useSpring({
        from:{height:0, opacity:0},
        to: {height: isOpen ? 'auto' : 0 , opacity: isOpen ? 1 : 0}
    })
  return (
    <div>
        <div onClick={()=> setIsOpen(!isOpen)} className= {` w-full cursor-pointer ${className}`}>
                {title}
        </div>
        <animated.div className="w-full" style={{height, opacity, overflow:'hidden'}}>
{children}
        </animated.div>
        
    </div>
  )
}
