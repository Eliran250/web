import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
  isOpenEventPopup: boolean
  setIsOpenEventPopup: React.Dispatch<React.SetStateAction<boolean>>
  fullDate: string[]
  setFullDate: React.Dispatch<React.SetStateAction<string[]>>
};

const Context = createContext<SidebarContextType | undefined>(undefined);


export const ContextProvider = ({ children }: { children: ReactNode }) => {

  const [isOpenEventPopup, setIsOpenEventPopup] = useState<boolean>(false);
  const [fullDate, setFullDate] = useState<string[]>([""]);


  return (
    <Context.Provider value={{ isOpenEventPopup, setIsOpenEventPopup, fullDate, setFullDate }}>
      {children}
    </Context.Provider>
  );
};

export const myContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useSidebar חייב להיות בתוך SidebarProvider");
  }
  return context;
};