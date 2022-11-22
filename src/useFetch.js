import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data");
          }
          return res.json(); //asynchronous - we get the response object in jsion format then we get the data
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]); //dependency to use effect url changes--re run the function to get the data for the endpoint (for each url)

  return { data, isPending, error };
};

export default useFetch;
