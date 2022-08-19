import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const sendRequest = useCallback(async (url: string = '', options: any = {}) => {
    // Start loading
    setIsLoading(true);
    setError(null);

    // Http request via fetch api
    try {
      const response = await fetch(url, {
        method: options.method ? options.method : 'GET',
        headers: options.headers ? options.headers : {},
        body: options.body ? JSON.stringify(options.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      setData(await response.json());
    } catch (err: any) {
      setError(err.message || 'Something went wrong!💥💥💥');
    }

    // Stop loading
    setIsLoading(false);
  }, []);

  return {
    loading: isLoading,
    error: error,
    data: data,
    request: sendRequest,
  };
};
