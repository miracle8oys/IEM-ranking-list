import { useState, useEffect } from "react";
const base_url = 'http://localhost:3000';


const useFetch = (url, changes) => {
    const [data, setData] = useState(null);
    const [totalData, setTotalData] = useState(0);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(0);
    
    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        const refresh_token = localStorage.getItem("refresh_token");

        setError(null);
        fetch(`${base_url + url}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })
        .then(res => {
            if (res.status === 406) {
                fetch(`${base_url}/auth/refreshToken`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        refresh_token
                    })
                })
                .then(res => res.json())
                .then(result => {
                    localStorage.setItem("access_token", `${result.data.access_token}`);
                    localStorage.setItem("refresh_token", `${result.data.refresh_token}`);
                    setRefresh(current => current + 1);
                })
            }

            if (!res.ok) {
                throw new Error('fetch data failed')
            }

            return res.json()
        })
        .then(result => {
            setData(result.data);
            if (result.totalData) {
                setTotalData(result.totalData);
            }
        })
        .catch(err => {
            setError(err.message)
        })
    }, [url, changes, refresh])

    return {data, error, totalData}
}
 
export default useFetch;