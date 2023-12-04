import { ReactNode } from 'react'

interface Props { 
 children: ReactNode;
value: string;
 onClick: () => void; 
}
export const Button = ( props: Props ) => {
  const {children , onClick ,value} = props;
  return (
    <button onClick={onClick}  value={value}>{children}</button>
  )
}
