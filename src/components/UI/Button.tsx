import React from 'react'

export const Button = ( { children , onClick , style, value } ) => {
  return (
    <button onClick={onClick} style={style} value={value}>{children}</button>
  )
}
