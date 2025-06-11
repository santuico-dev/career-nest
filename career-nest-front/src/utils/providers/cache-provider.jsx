import { createContext, useState, useContext } from "react";

/*
******************************************************************************
  THE PURPOSE OF THIS PROVIDER IS TO CACHE THE DATA TO AVOID RE-RENDERING
******************************************************************************
*/

const CacheContext = createContext();

export const CacheProvider = ({ children }) => {
  const [cacheKey, setCache] = useState({});

  const setCacheData = (key, data) => {
    setCache((prevCache) => ({
      ...prevCache,
      [key]: data,
    }));
  };

  return (
    <CacheContext.Provider value={{ cacheKey, setCacheData }}>
      {children}
    </CacheContext.Provider>
  );
};

export const useCache = () => useContext(CacheContext);
