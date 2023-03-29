import React from 'react';
import useJsonFetch from "../hooks/JsonFetch";

function Loading ( {url} ) {
    const {data, loading, error} = useJsonFetch(url);
    // console.log(loading);

    return (
        <>
            <p>{JSON.stringify(loading)}</p>
        </>
    )
}

export default Loading;