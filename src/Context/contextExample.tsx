import React, { createContext, useState, useContext } from "react";

type updateContextProps = {
  updated: number;
  setUpdated?: React.Dispatch<React.SetStateAction<number>>;
};

const updatedContext = createContext<updateContextProps>({
  updated: 0,
});

export const UpdatedProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [updated, setUpdated] = useState(0);

  return (
    <updatedContext.Provider value={{ updated, setUpdated }}>
      {children}
    </updatedContext.Provider>
    //         <InternetConnectionContext.Provider
    //             value= {{
    //         internetConnection,
    //             }
    // }
    //         >
    //     { children }
    //     < /InternetConnectionContext.Provider>
  );
};

export const useUpdatedContext = (): updateContextProps =>
  useContext(updatedContext);

export default updatedContext;
