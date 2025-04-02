export const getData = async <T>(url : string) : Promise<T> =>{
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data : T = await response.json();
    return data;
} 