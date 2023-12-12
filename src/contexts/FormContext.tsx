import { createContext, ReactNode, useState } from "react";
import { FormContextType } from "../types/types.tasks";
export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {

    const [isEditing, setIsEditing] = useState(false)

    return (
        <FormContext.Provider value={{isEditing, setIsEditing}}>
            {children}
        </FormContext.Provider>
    )

};

