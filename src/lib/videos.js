import data from './data.json'
async function getVideosByCatgory({category}){
    const key = 'AIzaSyAsvy7-Fkx47DTCSH8iJ7UAXjEFmqxVStY'
    try{
        const response =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${category}&key=${key}`)
        const data = await response.json();
        return data?.items.map(item =>{
            return {
                title:item.snippet.title,
                imgUrl:item.snippet.thumbnails.high.url,
                videoId : item.id.videoId,
            }
        })
    }catch(err){
        return data.items.map(item=>{
            return{
                title:item.snippet.title,
                imgUrl:item.snippet.thumbnails.high.url,
                videoId : item.id.videoId,
                description: item.snippet.description
            }
        })
    }
}

export default getVideosByCatgory