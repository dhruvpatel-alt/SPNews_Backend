
from pymongo import MongoClient

CONNECTION_STRING = "mongodb+srv://devil1609:dhRuv16o916@cluster0.nsa5j.mongodb.net/NEWSAPP"
client = MongoClient(CONNECTION_STRING)
DBNAME=client['NEWS'];
collection_name = DBNAME["news_items"]
item={"title":"","description":"","image":""};
items=[];

# for
item["title"]+="hello";
item["description"]+="des";
item["image"]+="imag";
items.append(item);

print(items)
collection_name.insert_one(items[0])