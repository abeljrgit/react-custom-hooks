import { useHttp } from '@hooks';
import { useEffect, useState } from 'react';

interface resultValTypes {
  l: any;
  e: any;
  d: any;
}

export const Swapi = () => {
  const { loading, error, data, request } = useHttp();
  const [result, setResult] = useState<resultValTypes>();

  const requestSwapi = () => {
    request('https://swapi.dev/api/people', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    setResult({ l: loading, e: error, d: data });
  }, [loading, error, data, request]);

  return (
    <div>
      <div>{result?.l}</div>
      <div>{result?.e}</div>
      <button onClick={requestSwapi}>Request Swapi</button>
      <div>{JSON.stringify(result?.d)}</div>
    </div>
  );
};
