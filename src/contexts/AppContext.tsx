import { createContext, ReactNode, useState } from "react";
import { AppContextType } from "../types/types.tasks";

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {

    const [isEditing, setIsEditing] = useState(false)

    return (
        <AppContext.Provider value={{isEditing, setIsEditing}}>
            {children}
        </AppContext.Provider>
    )

};
