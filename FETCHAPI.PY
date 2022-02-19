import asyncio
import requests
from pymongo import MongoClient
async def fetchapi(category,apikey):
    CONNECTION_STRING = "mongodb+srv://devil1609:dhRuv16o916@cluster0.nsa5j.mongodb.net/NEWSAPP"
    client = MongoClient(CONNECTION_STRING)
    DBNAME=client['NEWS'];
    collection_name = DBNAME[""+category+""];
    items=[];
    apiKey=apikey;
    url='https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey='+apiKey
    news=requests.get(url).json();
    articles=news["articles"];
    my_titles=[];
    my_description=[];
    my_image=[];
    my_newsurl=[];
    author=[];
    time=[];
    name=[];
    for article in articles:
        my_titles.append(article["title"]);
        my_description.append(article["description"]);
        my_image.append(article["urlToImage"]);
        my_newsurl.append(article["url"]);
        author.append(article["author"]);
        time.append(article["publishedAt"]);
        name.append(article["source"]["name"])
    for i in range(len(my_description)):
        item={"title":"","description":"","image":"","uid":"","newsurl":"","author":"","time":"","name":"","category":''};
        if my_titles[i]:
            item["title"]+=my_titles[i];
            item["category"]+=category;
        else:
            item["title"]+="";
            item["category"]+=category;
        if my_description[i]:
            item["description"]+=my_description[i];
        else:
            item["description"]+="";
        if my_image[i]:
            item["image"]+=my_image[i];
        else:
            item["image"]+="";
        if my_newsurl[i]:
            item["newsurl"]+=my_newsurl[i];
        else:
            item["newsurl"]+="";
        if author[i]:
            item["author"]+=author[i];
        else:
            item["author"]+="";
        if time[i]:
            item["time"]+=time[i];
        else:
            item["time"]+="";
        if name[i]:
            item["name"]+=name[i];
        else:
            item["name"]+="";
        item["uid"]+=str(i);
        items.append(item);

    for i in range(len(items)):
        print(str(i))
        collection_name.update_one(  {"uid":str(i)},
    {
            "$set":{
                    "title":items[i]["title"],
                    "description":items[i]["description"],
                    "image":items[i]["image"],
                    "newsurl":items[i]["newsurl"],
                    "author":items[i]["author"],
                    "time":items[i]["time"],
                    "name":items[i]["name"],
                    "category":items[i]["category"]
                    },
            "$currentDate":{"lastModified":True}
              
            })   
# asyncio.run(fetchapi("sports",'c478932c054e44be96c71cd0a90fd69b'));   
# asyncio.run(fetchapi("general"));   
# asyncio.run(fetchapi("business"));   
# asyncio.run(fetchapi("science"));   
# asyncio.run(fetchapi("technology"));   
# asyncio.run(fetchapi("health"));   
async def runnewsapi():
    while True:
        apikey2='c478932c054e44be96c71cd0a90fd69b';
        apikey1='daa91f388f8d486baf8b25b364f8969c';
        await fetchapi("sports",apikey1);
        await fetchapi("general",apikey1);
        await fetchapi("business",apikey1);
        await fetchapi("science",apikey2);
        await fetchapi("technology",apikey2);
        await fetchapi("health",apikey2);
        await fetchapi("entertainment",apikey2);
        await asyncio.sleep(3000);
   
asyncio.run(runnewsapi());