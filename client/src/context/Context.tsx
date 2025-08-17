import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<SidebarContextType | undefined>(undefined);


export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
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