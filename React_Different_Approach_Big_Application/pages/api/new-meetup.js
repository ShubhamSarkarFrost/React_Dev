import {MongoClient} from "mongodb";

// api/new-meetup
//POST

async function handler(req, res){
    if(req.method === 'POST'){
      const data = req.body;

     const client = await MongoClient.connect("mongodb+srv://FrostAdmin:FrostAqua12@@myfirstdb.qyxru3s.mongodb.net/?retryWrites=true&w=majority")
     const db = client.db();

     const meetupcollections = db.collection('meetups')
     const result = await meetupcollections.insertOne(data);

     console.log(result);

     client.close();

     res.status(201).json({message:'Meetup is Inserted'})

    }
}

export default handler;