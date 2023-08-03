import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const ContextApi = React.createContext();

export const ContextWrapper = ({ children }) => {
  const [playLists, setPlayLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/spotify"
      );
      setLoading(false);
      setPlayLists(data);
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextApi.Provider
      value={{ playLists, loading, error, searchKey, setSearchKey }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export const ContextData = () => useContext(ContextApi);
