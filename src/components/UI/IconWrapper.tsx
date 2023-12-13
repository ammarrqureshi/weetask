import React, { ReactNode } from 'react'

export const IconWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className='box-content p-1  w-6 h-6 flex justify-center items-center rounded-lg '>{children}</div>
  )
}
