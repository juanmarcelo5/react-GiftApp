export const getGif = async ( category )=>{
    const API_KEY = 'OaIouHJxZGv3uYo6uqmeL1IS379zIC73';
    const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=10`;
    const res = await fetch(URL);
    const {data} = await res.json();


    const gift = data.map( img =>{
        return {
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        
        }
    })
    return gift;
    
    
    
}
