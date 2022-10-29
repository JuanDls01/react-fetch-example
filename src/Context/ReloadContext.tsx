import { createContext, useState, useContext } from "react";

type reloadContextType = {
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

export const ReloadContext = createContext<reloadContextType | undefined>(
  undefined
);

type props = { children: React.ReactNode };

const ReloadProvider: React.FC<props> = ({ children }) => {
  const [reload, setReload] = useState(0);

  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      {children}
    </ReloadContext.Provider>
  );
};

export default ReloadProvider;

export const useReloadContext = () => {
  const context = useContext(ReloadContext);
  if (context === undefined)
    throw new Error(
      "ReloadContext must be used within a ReloadContextProvider"
    );
  return context;
};
