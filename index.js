var MongoClient = require('mongodb').MongoClient;
const user=process.env.DB_USER;
const pass=process.env.DB_PASSWORD;
const name=process.env.DB_NAME;
var url=`mongodb+srv://dhruv1609:AdmFs1LMifmyzNkL@cluster0.nsa5j.mongodb.net/NEWSAPP`;
var dbo;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db("NEWS");
});
const express = require('express');
const app = express();
const router=express.Router();
const port = 5000;
var cors=require('cors');
app.use(cors());
app.use(express.json());
//Availabe News
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, https://sp-news-frontend.vercel.app');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/news',router.get('/general',async (req,res)=>{
  try {
    dbo.collection('home').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})

    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))
app.use('/api/news',router.get('/sports',async (req,res)=>{
  try {
    dbo.collection('sports').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})
    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))
app.use('/api/news',router.get('/science',async (req,res)=>{
  try {
    dbo.collection('science').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})
    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))
app.use('/api/news',router.get('/entertainment',async (req,res)=>{
  try {
    dbo.collection('entertainment').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})
    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))
app.use('/api/news',router.get('/technology',async (req,res)=>{
  try {
    dbo.collection('technology').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})
    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))
app.use('/api/news',router.get('/business',async (req,res)=>{
  try {
    dbo.collection('business').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})
    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))
app.use('/api/news',router.get('/health',async (req,res)=>{
  try {
    dbo.collection('health').find({}).toArray((err,result)=>{
if(err) throw err;
res.status(200).json({result})
    })
   }
  catch (error) {
      console.error(error);
      res.status(500).send("SOME ERROR OCCUR");
   }
}))

app.get('/', (req, res) => {
  res.send(`There is Nothing here`)
})
app.listen(process.env.PORT || port, () => {
  console.log(`iNotebook_Backend listening at http://localhost:${port}`)
})
