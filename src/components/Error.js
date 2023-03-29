import React from 'react';
import useJsonFetch from '../hooks/JsonFetch';

function Error( {url} ) {
    const {data, loading, error} = useJsonFetch(url);
    console.log(error);

    return (
        <>
            <p>{JSON.stringify(error)}</p>
        </>
    )
}

export default Error;
