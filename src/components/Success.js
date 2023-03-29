import React from 'react';
import useJsonFetch from "../hooks/JsonFetch";

function Success( {url} ) {
    const {data, loading, error} = useJsonFetch(url);
    // console.log(data);

    return (
        <>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export default Success;