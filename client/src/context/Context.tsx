import { createContext, useContext, type ReactNode } from "react";

interface SidebarContextType {

};

const Context = createContext<SidebarContextType | undefined>(undefined);


export const ContextProvider = ({ children }: { children: ReactNode }) => {

  return (
    <Context.Provider value={undefined}>
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