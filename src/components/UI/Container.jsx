import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='w-[80%] m-auto overflow-auto'>{children}</div>
  )
}
