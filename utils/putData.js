const base_url = 'http://localhost:3000';
const putData = async (url, body) => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    const data = await fetch(`${base_url + url}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify({...body})
    })
    .then(res => {
        if (res.status === 406) {
            const status = fetch(`${base_url}/auth/refreshToken`, {
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
                putData(url, body);
            })
            .then(() => {
                return 'token_expired'
            })
            return status
        } else {
            return res.json()
        }
    })
    .then(result => {
        return result
    })

    if (data === 'token_expired') {
        return putData(url, body)
    } else {
        return data;
    }
}
 
export default putData;