export const headers = {
    mode: "cors",
    headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
        
    }
};
export const getData = async (apiUrl) => {
    const res = await fetch(
        apiUrl,
        {   ...headers,
            method: "GET"
        });
    const resData = await res.json();
    return resData;
};