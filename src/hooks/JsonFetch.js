import {useState, useEffect} from 'react'

const useJsonFetch = (url, opts) => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
    })

    useEffect(() => {
        const update = async () => {
            setStatus({loading:true});
            try {
                const response = await fetch(url, {method: 'GET'});
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setStatus({loading: false, data: data});
                // console.log(data);
            } catch (e) {
                setStatus({loading: false, e});
            }
        };

        update();

    }, []);

    return {...status};
}

export default useJsonFetch;