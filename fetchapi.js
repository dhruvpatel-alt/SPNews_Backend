import fetch from "node-fetch";
async function fetchnews(category){
    let apiKey='daa91f388f8d486baf8b25b364f8969c';
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
    let data=await fetch(url);
    let parseddata=await data.json();
return parseddata;
}
